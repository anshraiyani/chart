import React from "react";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import ReactLoading from "react-loading";

function News() {
  const [data, setData] = useState();

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:5000/api/getNews");
  //     fetchJSON()
  //   } catch (error) {
  //     console.error("Error sending data:", error);
  //   }
  // };

  const fetchJSON = () => {
    fetch("news.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        console.log("data set");
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  };

  useEffect(() => {
    // fetchData();
    setData(null)
    fetchJSON();
  }, []);
  return (
    <div className="news-container">
      <h2 className="news-header">Stock News</h2>
      <div
        style={{
          width: "100%",
          height: "94%",
          overflow: "auto",
          scrollbarWidth: "thin",
        }}
      >
        <div style={{ width: "100%", height: "500px", display:"flex",flexDirection:'column',alignItems:'center' }}>
          {data ? (
            data.map((el) => <NewsCard title={el.text} link={el.link} />)
          ) : (
            <ReactLoading type={"spin"} color={"blue"} height={80} width={80} />
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
