import React, { useState, useEffect } from "react";

const Counters = () => {
  const [activated, setActivated] = useState(false);
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".counters");
      const pageYOffset = window.pageYOffset;

      if (
        pageYOffset > container.offsetTop - window.innerHeight &&
        !activated
      ) {
        setCounters(document.querySelectorAll(".counters span"));
        setActivated(true);
      } else if (
        (pageYOffset < container.offsetTop - window.innerHeight ||
          pageYOffset === 0) &&
        activated
      ) {
        setCounters([]);
        setActivated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activated]);

  useEffect(() => {
    if (activated) {
      counters.forEach((counter) => {
        const target = parseInt(counter.dataset.count);
        let count = 0;

        const updateCount = () => {
          if (count < target) {
            count++;
            counter.innerText = count;
            setTimeout(updateCount, 100); // Adjust the timeout duration for slower increment
          }
        };

        updateCount();
      });
    }
  }, [activated, counters]);

  return (
    <div className="counters">
      <div>
        <div className="counter">
          <h1>
            <span data-count="12">12</span>
          </h1>
          <h3>Meetups</h3>
        </div>
        <div className="counter">
          <h1>
            <span data-count="15">15</span>
          </h1>
          <h3>Hackathons</h3>
        </div>
        <div className="counter">
          <h1>
            <span data-count="20">20</span>
          </h1>
          <h3>Projects</h3>
        </div>
        <div className="counter">
          <h1>
            <span data-count="30">30</span>
          </h1>
          <h3>Collaborations</h3>
        </div>
      </div>
    </div>
  );
};

export default Counters;
