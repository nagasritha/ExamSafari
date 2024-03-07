import { useState, useEffect } from "react";
import "./hero.css";

function HeroSection() {
  const [data, setData] = useState({
    homeData: {
      backgroundText: "",
      // Add other properties with their default values if necessary
    }
  });

  useEffect(() => {
    fetch("https://example-na5m.onrender.com/home/home")
      .then((result) => result.json())
      .then((resp) => {
        // console.log("result", resp);
        setData(resp);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="heroSection flex justify-center items-center">
        <div className="blur"></div>
        <div className="bottom">
          <h2 className="text-2xl md:text-5xl z-5 text-[#030914] uppercase font-bold">
            {data?.homeData?.backgroundText}
          </h2>
          <div className="flex justify-center py-4">
            <input
              type="text"
              name="text"
              placeholder="Search here"
              className="input"
            />
          </div>
        </div>
      </div>
      <div className="rounded-xl floating">Book Now</div>
    </div>
  );
}

export default HeroSection;
