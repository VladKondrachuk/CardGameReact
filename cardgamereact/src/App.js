import React, {
  Component
} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"

//image imports
import erdogan from "./images/erdogan.gif"
import kimjongun from "./images/kimjongun.gif"
import macron from "./images/macron.gif"
import maduro from "./images/maduro.gif"
import merkel from "./images/merkel.gif"
import obama from "./images/obama.gif"
import putin from "./images/putin.gif"
import salvini from "./images/salvini.gif"
import shinzoabe from "./images/shinzoabe.gif"
import teresamay from "./images/teresamay.gif"
import trump from "./images/trump.gif"
import xijinping from "./images/xijinping.gif"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  //Shuffle Array
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;

    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!"
      })
      this.shuffleArray();
    } else {
      this.setState({
        message: "Already Selected Game Over, Replay?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "erdogan":
        return `${erdogan}`
      case "kimjongun":
        return `${kimjongun}`
      case "macron":
        return `${macron}`
      case "maduro":
        return `${maduro}`
      case "merkel":
        return `${merkel}`
      case "obama":
        return `${obama}`
      case "putin":
        return `${putin}`
      case "salvini":
        return `${salvini}`
      case "shinzoabe":
        return `${shinzoabe}`
      case "teresamay":
        return `${teresamay}`
      case "trump":
        return `${trump}`
      case "xijinping":
        return `${xijinping}`
      default:
        return `${obama}`
    }
  }

  render() {
    return ( <
      div >
      <
      Navbar correct = {
        this.state.correct
      }
      topscore = {
        this.state.topscore
      }
      message = {
        this.state.message
      }
      /> <
      Header / >
      <
      Main > {
        this.shuffleArray(Img).map(image => ( <
          Image src = {
            this.imgSwitch(image.name)
          }
          name = {
            image.name
          }
          key = {
            image.name
          }
          pickImg = {
            this.pickImg
          }
          />
        ))
      } <
      /Main> <
      Footer / >
      <
      /div>
    );
  }
}

export default App;