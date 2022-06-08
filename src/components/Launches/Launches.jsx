import React from "react";
import { useEffect, useState, useRef } from "react";
import { fetchLaunches } from "../../services/SpacexService";
import Launch from "./Launch";

const Launches = () => {
  const scrollable = useRef();
  const [launches, setlaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getLaunches();
  }, []);

  const getLaunches = async () => {
    const data = await fetchLaunches();

    setlaunches(data);
    setIsLoading(false);
  };

  const handleScroll = () => {
    if (scrollable.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollable.current;
      if (scrollTop + clientHeight === scrollHeight) {
        // TO SOMETHING HERE
        console.log("Reached bottom");
      }
    }
  };

  return (
    <div
      className="main__wrapper"
      ref={scrollable}
      onScroll={() => handleScroll()}
    >
      {isLoading ? (
        <div>loading...</div>
      ) : (
        launches.map((launch) => {
          return (
            <Launch
              key={`${launch.flight_number}-${launch.launch_date_unix}`}
              launch={launch}
            />
          );
        })
      )}
    </div>
  );
};

export default Launches;
