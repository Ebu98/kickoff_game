import React from "react";
import Card from "../card/card";
import SOLARFOOTBALL from "../../assets/svg/solar_football-line-duotone.svg";
import ActionTROPHY from "../../assets/svg/octicon_trophy-24.svg";
import VECTOR from "../../assets/svg/Vector.svg";
import VADIN from "../../assets/svg/vaadin_globe.svg";
import ICONAMOON from "../../assets/svg/iconamoon_history-duotone.svg";
import FLAG from "../../assets/svg/typcn_flag-outline.svg";
import "./category.css";

const Category = () => {

  const arr = ['wear', 'wear', 'hand', 'hand', 'leg', 'mouth',[1,2],[3,4],[5,6]]
  const Arr =[1,2,3,4,5,6];
  const array = arr.shift([0])
  arr.push("God is able")
  arr.unshift("Wear me cloth")
  arr.reverse()
  delete arr[0]
  // console.log(Arr)
  // console.log({arr})
  const numbers = [45, 4, 9, 16, 25,25,45];
  numbers.forEach(element => {
    // console.log(element)
  });

  let x;
  const todo = new Object();
  todo.id = 1
  todo.name = "Ebuka King"
  todo.hasOwnProperty = true
  x = todo;

  // console.log({x})
  function Test(){
    // const num = n1 * n2
    const min = Math.min()
    const max = Math.max()
    return min, 
    max
  }
  const y =  Test([2, 3, 4,6,1,0])
  console.log({y})


  function duplicate(arr){
    // return arr.filter((item, index) => arr.indexOf(item) === index);
    const array2  = [...new Set(numbers)]
    
    console.log({array2})
  }

  duplicate(arr)

  
  return (
    <div style={{ marginTop: "-8em" }}>
      <div className="title-nav">
        <h3  className="title-nav-h6-category">Hey Stella.</h3>
        <span  className="title-nav-span-category ">what game would you like to play today?</span>
      </div>
      <div className="general-card-wrapper">
        <Card>
          <div className="general-card">
            <div className="general">
              <img src={SOLARFOOTBALL} alt="" className="general-img" />
              <h2 className="general-text">General Football Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="trophy-card">
            <div className="general">
              <img src={ActionTROPHY} alt="" className="general-img" />
              <h2 className="general-text-trophy">
                Championships and Tournaments
              </h2>
            </div>
          </div>
        </Card>

        <Card>
          <div className="vector-card">
            <div className="general">
              <img src={VECTOR} alt="" className="general-img" />
              <h2 className="general-text">League Specific Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="vaadin-card">
            <div className="general">
              <img src={VADIN} alt="" className="general-img" />
              <h2 className="general-text-vadin">World Cup Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="iconamoon-card">
            <div className="general">
              <img src={ICONAMOON} alt="" className="general-img" />
              <h2 className="general-text">Historical Moments</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flag-card">
            <div className="general">
              <img src={FLAG} alt="" className="general-img" />
              <h2 className="general-text-flag">Team Specific Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="trophy-card">
            <div className="general">
              <img src={ActionTROPHY} alt="" className="general-img" />
              <h2 className="general-text-trophy">
                Championships and Tournaments
              </h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="vector-card">
            <div className="general">
              <img src={VECTOR} alt="" className="general-img" />
              <h2 className="general-text">League Specific Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="vaadin-card">
            <div className="general">
              <img src={VADIN} alt="" className="general-img" />
              <h2 className="general-text-vadin">World Cup Trivia</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="iconamoon-card">
            <div className="general">
              <img src={ICONAMOON} alt="" className="general-img" />
              <h2 className="general-text">Historical Moments</h2>
            </div>
          </div>
        </Card>
      </div>
      <div className="image-background">
        <h3 className="image-background-h3-tag">Gear up for game day! </h3>
        <p className="image-background-ptag">
          Dress like a champion and represent your team! Explore the ultimate
          football fan gear at FanZone. From iconic jerseys to stylish
          accessories, we have everything you need to show your team pride.
          Don't wait, shop now and score big savings
        </p>
        <button className="image-background-btn">Shop now</button>
      </div>
    </div>
  );
};

export default Category;
