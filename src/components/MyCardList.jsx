import React from "react";
import "./style.css";
import CardItem from "./CardItem";

//制作一些假数据
const Card1 = {
  imgUrl:"pic/invincible.png",
  title: "Invincible",
  quote: "Quote:Sky,Now!",
};

const Card2 ={
  imgUrl:"pic/goggins.png",
  title: "David Goggins",
  quote: "Stay hard, it's easy to be great cause everyone is weak.",
};

const MyCardList = (props) => {
  return (
   /* <div className="container">
    <div className="card">
      <img src="ImageUrl1.imgUrl" alt="无敌少侠" />
      <h2 className="cardTitle">ImageUrl1.title</h2>
      <h3 className="cardQuote">ImageUrl1.quote</h3>
     */
   <div className="container"> 
   <CardItem imageUrl={Card1.imgUrl} title={Card1.title} quote={Card1.quote} />
   <CardItem imageUrl={Card2.imgUrl} title={Card2.title} quote={Card2.quote} />
   </div>
  );
};

export default MyCardList;



