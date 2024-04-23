import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          consequuntur dolorum totam iste nemo, quisquam voluptate rerum eum
          animi error incidunt, perferendis repellendus sed itaque temporibus
          iure obcaecati. Molestias, expedita. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maiores, consequuntur dolorum totam iste
          nemo, quisquam voluptate rerum eum animi error incidunt, perferendis
          repellendus sed itaque temporibus iure obcaecati. Molestias, expedita.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          consequuntur dolorum totam iste nemo, quisquam voluptate rerum eum
          animi error incidunt, perferendis repellendus sed itaque temporibus
          iure obcaecati. Molestias, expedita.
        </p>
      </div>
    </div>
  );
}

export default About;
