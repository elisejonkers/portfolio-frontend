import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Timeline() {
  const [timelineItems, setTimelineItems] = useState([]);

  const loadTimelineItems = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/timelineitems`)
      .then((response) => {
        setTimelineItems(response.data);
      })
      .catch((error) => {
        console.log("This is error", error);
      });
  };

  const decideClassName = (id) => {
    if (id % 2 === 0) {
      return 'timeline-start md:text-end mb-10'
    } else {
      return "timeline-end mb-10"
    }
  }

  useEffect(() => {
    loadTimelineItems();
  }, []);


  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <div className="title-container">
                <div className="line"></div>
            <h1 className="title">Timeline</h1>
            <div className="line"></div>
            </div>
      {timelineItems.map((item) => {
        return (
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={decideClassName(item.id)}> 
              <time className="font-mono italic">{item.date}</time>
              <div className="text-lg font-black">{item.title}</div>
              <div className="text-md italic">{item.company}</div>
              {item.description}
            </div>
            <hr />
          </li>
        );
      })}
    </ul>
  );
}

export default Timeline;
