import React from 'react';
import './App.css';
import Home from './components/Home';
import PracticeQuiz from './components/PracticeQuiz';
import TimedQuiz from './components/TimedQuiz';

class App extends React.Component{
  state = {
    screen: 'home',
    people: {},
    questionOptions: {},
    answer: '',
  }

  goHome = () => {
    this.setState({ screen : 'home' })
  };
  practiceQuiz = () => {
    this.setState({ screen : 'practice' })
  };

  deletePerson = key => {
    // 1. take a copy of state
    const people = { ...this.state.people };
    // 2. update the state
    people[key] = null;
    // 3.  update state
    this.setState({ people });
  };

  randomSix = () => {
    // 1. take a copy of state
    const people = this.state.people;

    // 2. Convert Object to Array
    const peopleArray = Object.keys(people).map((key) => people[key])

    // 3. Shuffle Array
    const shuffled = peopleArray.sort(() => 0.5 - Math.random());

    // 4. Get Top 6
    const sliced = shuffled.slice(0, 6);

    // 5. Get Answer
    const answer = sliced.slice(0, 1);

    // 6. Set State with Answer and Question Options
    this.setState({answer: answer[0]['id'],  questionOptions: sliced})
  }

  practiceClick = () => {
    this.randomSix();
    this.practiceQuiz();
  }

  getPeople = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    var result = fetch("https://namegame.willowtreeapps.com/api/v1.0/profiles", requestOptions)
      .then(response => response.text())
      .then(result =>  {
      var people = {};
       var parsedResult = JSON.parse(result);
       parsedResult.forEach( function(p) {
         people[p.id] = p;
       })

       this.setState({ people : people });
      })
      .catch(error => console.log('error', error));
  }

  componentDidMount() {
    this.getPeople()
  }

  renderContent() {
    if(this.state.screen === 'timed') {
      return (
        <TimedQuiz screen={this.state.screen} goHome={this.goHome}/>
      );
    }
    if(this.state.screen === 'practice') {
      return (
        <PracticeQuiz questionOptions={this.state.questionOptions} screen={this.state.screen} goHome={this.goHome} randomSix={this.randomSix}/>
      );
    }
    return (
      <Home/>
    );
  }

  render(){
  return (
    <div className="App">
    <button onClick={this.randomSix}>Random Six</button>
    <button onClick={this.practiceClick}>Practice Quiz</button>

    {this.renderContent()}
    </div>
  );
}
}

export default App;
