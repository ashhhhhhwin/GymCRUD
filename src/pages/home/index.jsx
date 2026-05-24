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
      <div className="programs bg-black h-full">
        <div className="program-title text-gray-300 flex flex-row pt-10 justify-center items-center">
          <Typography variant="h4">Programs</Typography>
        </div>
        <div className="program-title text-gray-500 flex flex-row pt-6 p-6 justify-center items-center">
          <Typography variant="h5">
            <p>
              We offer Personal Training programs for people,also you will get
              pawple
            </p>

            <p className="flex justify-center items-center">
              to give you company in your workout!
            </p>
          </Typography>
        </div>
        <div className="flex justify-center items-center pb-4">
          <Button type={"primary"} label={"Know More"}></Button>
        </div>
      </div>
      <div className="meet-our-trainers bg-black">
        
      </div>
    </>
  );
};

export default Home;
