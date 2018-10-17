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
import contra from "./images/contra.gif"
import dance from "./images/dance.gif"
import donkeykong from "./images/donkeykong.gif"
import duckhunt from "./images/duckhunt.gif"
import kirby from "./images/kirby.gif"
import kirbystarhighfive from "./images/kirbystarhighfive.gif"
import marioextraspin from "./images/marioextraspin.gif"
import marioworld from "./images/marioworld.gif"
import toad from "./images/toad.gif"
import waluigi from "./images/waluigi.gif"
import zelda from "./images/zelda.gif"
import koopa from "./images/koopa.gif"

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
      case "contra":
        return `${contra}`
      case "dance":
        return `${dance}`
      case "donkeykong":
        return `${donkeykong}`
      case "duckhunt":
        return `${duckhunt}`
      case "kirby":
        return `${kirby}`
      case "kirbystarhighfive":
        return `${kirbystarhighfive}`
      case "marioextraspin":
        return `${marioextraspin}`
      case "marioworld":
        return `${marioworld}`
      case "toad":
        return `${toad}`
      case "waluigi":
        return `${waluigi}`
      case "zelda":
        return `${zelda}`
      case "koopa":
        return `${koopa}`
      default:
        return `${koopa}`
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