import React from "react";
import "./carCategory.css";
import { car_category } from "../../helpers/links.helpers";

export default function CarSlide() {
  return (
    <div>
      <h2>Car Category</h2>

      <div className="carCategories">
        {car_category &&
          car_category.map((car, index) => (
            <img src={car.image} alt="" srcset="" key={index} />
          ))}
      </div>
    </div>
  );
}
