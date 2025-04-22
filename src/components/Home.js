import React from "react";

function Home() {
  const username = "Liza"; // Replace with your actual name
  const city = "New York"; // Replace with your actual city

  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
