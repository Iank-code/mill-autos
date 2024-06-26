import React from "react";
import "./carCategory.css";
import { car_category } from "../../helpers/links.helpers";

export default function CarSlide() {
  return (
    <div className="wrapper">
      {/* <h2>Car Category</h2> */}

      <div className="carCategories">
        {car_category &&
          car_category.map((car, index) => (
            <img src={car.image} alt="" key={index} />
          ))}
      </div>
    </div>
  );
}
