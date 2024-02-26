import "../styles/Counters.css";
import React, { useState, useEffect } from "react";

const Counters = () => {
  const [state, setState] = useState({ activated: false, counters: [] });

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".counters");
      const pageYOffset = window.pageYOffset;
      const shouldBeActivated =
        pageYOffset > container.offsetTop - window.innerHeight;

      if (shouldBeActivated && !state.activated) {
        const counters = document.querySelectorAll(".counters span");
        counters.forEach((counter) => {
          const target = +counter.dataset.count; // '+' is a shorter way to convert string to number
          let count = 0;

          const updateCount = () => {
            if (count < target) {
              count++;
              counter.innerText = count;
              setTimeout(updateCount, 100);
            }
          };

          updateCount();
        });

        setState({ activated: true, counters });
      } else if (!shouldBeActivated && state.activated) {
        setState({ activated: false, counters: [] });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [state.activated]); // Dependency array now only needs state.activated

  return (
    <div className="counters">
      <div>
        <div className="counter">
          <h1>
            <span data-count="8">8</span>
          </h1>
          <h3>Meetups</h3>
        </div>
        <div className="counter">
          <h1>
            <span data-count="3">3</span>
          </h1>
          <h3>Hackathons</h3>
        </div>
        <div className="counter">
          <h1>
            <span data-count="15">15</span>
          </h1>
          <h3>Projects</h3>
        </div>
        <div className="counter">
          <h1>
            <span data-count="75">75</span>
          </h1>
          <h3>Contributions</h3>
        </div>
      </div>
    </div>
  );
};

export default Counters;
