import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import PracticeQuiz from "./components/PracticeQuiz";
import TimedQuiz from "./components/TimedQuiz";

// class App extends React.Component{
//   state = {
//     screen: 'home',
//     people: {},
//     questionOptions: {},
//     answer: '',
//   }

//   goHome = () => {
//     this.setState({ screen : 'home' })
//   };
//   practiceQuiz = () => {
//     this.setState({ screen : 'practice' })
//   };

//   deletePerson = key => {
//     // 1. take a copy of state
//     const people = { ...this.state.people };
//     // 2. update the state
//     people[key] = null;
//     // 3.  update state
//     this.setState({ people });
//   };

//   practiceClick = () => {
//     this.randomSix();
//     this.practiceQuiz();
//   }

//   getPeople = () => {
//     var requestOptions = {
//       method: 'GET',
//       redirect: 'follow'
//     };

//     var result = fetch("https://namegame.willowtreeapps.com/api/v1.0/profiles", requestOptions)
//       .then(response => response.text())
//       .then(result =>  {
//       var people = {};
//        var parsedResult = JSON.parse(result);
//        parsedResult.forEach( function(p) {
//          people[p.id] = p;
//        })

//        this.setState({ people : people });
//       })
//       .catch(error => console.log('error', error));
//   }

//   componentDidMount() {
//     this.getPeople()
//   }

//   renderContent() {
//     if(this.state.screen === 'timed') {
//       return (
//         <TimedQuiz screen={this.state.screen} goHome={this.goHome}/>
//       );
//     }
//     if(this.state.screen === 'practice') {
//       return (
//         <PracticeQuiz questionOptions={this.state.questionOptions} screen={this.state.screen} goHome={this.goHome} randomSix={this.randomSix}/>
//       );
//     }
//     return (
//       <Home/>
//     );
//   }

//   render(){
//   return (
//     <div className="App">
//     <button onClick={this.randomSix}>Random Six</button>
//     <button onClick={this.practiceClick}>Practice Quiz</button>

//     {this.renderContent()}
//     </div>
//   );
// }
// }

function App(props) {
  const [screen, setScreen] = useState("home");
  const [people, setPeople] = useState({});
  const [answer, setAnswer] = useState("");
  const [options, setOptions] = useState({});

  const getPeople = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    var result = fetch(
      "https://namegame.willowtreeapps.com/api/v1.0/profiles",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        var people = {};
        var parsedResult = JSON.parse(result);
        parsedResult.forEach(function (p) {
          people[p.id] = p;
        });
        setPeople(people);
      })
      .catch((error) => console.log("error", error));
  };

  const randomSix = () => {
    // 2. Convert Object to Array
    const peopleArray = Object.keys(people).map((key) => people[key]);

    // 3. Shuffle Array
    const shuffled = peopleArray.sort(() => 0.5 - Math.random());

    // 4. Get Top 6
    const slicedOptions = shuffled.slice(0, 6);

    // 5. Get Answer
    const answer = slicedOptions[0];

    // 6. Set State with Answer and Question Options
    setOptions(slicedOptions);
    setAnswer(answer[0]["id"]);
  };

  const getPracticeQuiz = () => {
    setScreen("practice");
  };

  useEffect(() => {
    // Set all the people to state
    getPeople();
  }, []);

  return (
    <div className="App">
      {screen === "home" && <Home getPracticeQuiz={getPracticeQuiz} />}
      {screen === "time" && <TimedQuiz />}
      {screen === "practice" && (
        <PracticeQuiz randomSix={randomSix} options={options} />
      )}
    </div>
  );
}

export default App;
