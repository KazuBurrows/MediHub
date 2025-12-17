import React from "react";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // full viewport height
        backgroundColor: "#f9f9f9", // optional subtle background
      }}
    >
      <h1
        style={{
          fontSize: "5rem", // large letters
          fontWeight: "bold",
          color: "#2c3e50", // dark slate color
          margin: 0,
        }}
      >
        MediHub
      </h1>
    </div>
  );
};

export default Home;