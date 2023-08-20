// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import FetchedData from "./FetchedData";

/*
  useEffect(() => {
    if (searchedData !== "") {
      let filteredData = data.filter((item) => {
        return item.brand.toLowerCase().includes(searchedData);
      });
      setSearchedData(filteredData);
      console.log("works");
    } else {
      setSearchedData(data);
      console.log("not working");
    }
  }, []);
*/
function OurStock() {
  const [searchedData, setSearchedData] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      /*"https://mill-auto-api.onrender.com/cars" */ "http://localhost:5000/cars",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // mode: "no-cors",
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((items) => {
        setData(items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  let filteredData = data.filter((item) => {
    return (
      // item.brand.toLowerCase().includes(searchedData.toLowerCase()) ||
      item.model.toLowerCase().includes(searchedData.toLowerCase()) ||
      item.year === Number(searchedData)
    );
  });

  return (
    <div>
      <Navbar />

      <div className="fetchedData">
        <div>
          <label>
            Search:{" "}
            <input
              type="text"
              value={searchedData}
              onChange={(e) => {
                setSearchedData(e.target.value);
              }}
              style={{
                border: "ipx solid black",
                background: "blue",
              }}
            />
          </label>
        </div>
        {filteredData.map((item, index) => {
          return (
            <div key={index}>
              <FetchedData data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurStock;
