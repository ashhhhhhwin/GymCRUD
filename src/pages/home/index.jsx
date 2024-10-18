import React from "react";
import Header from "../../components/common/Header";
import bgImg from "../../assets/home-cover.jpeg";
import cnc from "../../assets/Cnclogo.png";
import Typography from "@mui/material/Typography";
import Button from "../../components/common/Button";

const Home = () => {
  return (
    <>
      <Header isLoggedIn={false}></Header>
      <div className="h-[40rem] " style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="float-right mt-96 mr-16 ">
          <Typography variant="h3" color="#eab308" gutterBottom>
            Your Limit is only YOU!
          </Typography>
          <Typography variant="h6" color="white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography variant="h6" color="white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <div className="float-left mt-2">
            <Button type={"primary"} label={"Get Started"}></Button>
          </div>
        </div>
      </div>
      <div className="programs bg-black">PROGRAMS</div>
    </>
  );
};

export default Home;
