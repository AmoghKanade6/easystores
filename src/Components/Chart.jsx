import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import styled from "styled-components";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
const Option = styled.option``;
const Select = styled.select`
  margin-left: 20px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  margin-bottom: 30px;
`;

const Chart = () => {
  const [productData, setProductsData] = useState(null);
  const [range, setRange] = useState("top3");

  useEffect(() => {
    axios
      .get("http://localhost:4000/products?_sort=viewCount&_order=desc")
      .then((resp) => {
        setProductsData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTopProducts = (e) => {
    setRange(e.target.value);
  };

  var data = {
    labels: productData?.slice(0, 3).map((v) => v.title),
    datasets: [
      {
        label: "Product Viewed",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(50, 34, 132, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: productData?.slice(0, 3).map((v) => v.viewCount),
      },
    ],
  };

  var data1 = {
    labels: productData?.slice(0, 5).map((v) => v.title),
    datasets: [
      {
        label: "Product Viewed",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(50, 34, 132, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: productData?.slice(0, 5).map((v) => v.viewCount),
      },
    ],
  };

  var data2 = {
    labels: productData?.slice(0, 7).map((v) => v.title),
    datasets: [
      {
        label: "Product Viewed",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(50, 34, 132, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: productData?.slice(0, 7).map((v) => v.viewCount),
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <Container>
        <h3 className=" fw-bold">Most Viewed Products</h3>
        <Select onChange={handleTopProducts}>
          <Option value="top3">Top 3</Option>
          <Option value="top5">Top 5</Option>
          <Option value="top7">Top 7</Option>
        </Select>
      </Container>
      <div className="chart-container mb-5">
        <Bar
          options={options}
          data={
            range === "top3"
              ? data
              : "" || range === "top7"
              ? data2
              : "" || range === "top5"
              ? data1
              : ""
          }
        />
      </div>
    </>
  );
};

export default Chart;
