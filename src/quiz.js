import React, { Component } from "react";
import { Link } from "react-router-dom";
import { QuizData } from "./QuizData";
import "./quiz.css";

class Quiz extends Component {
  state = {
    userAnswer: null, //current users answer
    currentIndex: 0, //current questions index
    options: [], //the four options
    quizEnd: false, //True if it's the last question
    marks: 0, //the Score
    disabled: true,
  };

  loadQuiz = () => {
    const { currentIndex } = this.state; //get the current index
    this.setState(() => {
      return {
        question: QuizData[currentIndex].question,
        options: QuizData[currentIndex].options,
        answer: QuizData[currentIndex].answer,
      };
    });
  };

  nextQuestionHander = () => {
    const { userAnswer, answer, marks } = this.state;
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });

    //Check for correct answer and increment score
    if (userAnswer === answer) {
      this.setState({
        marks: marks + 1,
      });
    }
  };

  componentDidMount() {
    this.loadQuiz();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          disabled: true,
          question: QuizData[currentIndex].question,
          options: QuizData[currentIndex].options,
          answer: QuizData[currentIndex].answer,
        };
      });
    }
  }

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  finishHandler = () => {
    if (this.state.currentIndex === QuizData.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };
  render() {
    const { question, options, currentIndex, userAnswer, quizEnd } = this.state; //get the current state
    if (quizEnd) {
      return (
        <div className="home">
          <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src={require("./logo.png")} />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggler="collapse"
                data-target="#navbarNav"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item ">
                    <Link class="nav-link" to="/">
                      {" "}
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">
                      {" "}
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link" to="/classroom">
                    {" "}
                    Classroom
                  </Link>
                </li>
                <li class="nav-item active">
                <Link class="nav-link" to="/quiz">
                    {" "}
                    Quiz
                    </Link>
                </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container h-100">
            <div class="row align-items-center h-100">
              <div className="col-6 mx-auto">
                <h1>Quiz attempted</h1>
                <h2>Final marks : {this.state.marks}</h2>
                <p>The correct Answers for the quiz are</p>
                <ul>
                  {QuizData.map((item, index) => (
                    <li className="options" key={index}>
                      {item.answer}
                    </li>
                  ))}
                </ul>
                <Link class="btn btn-outline-primary active" to="/">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="home">
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={require("./logo.png")} />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggler="collapse"
              data-target="#navbarNav"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                  <Link class="nav-link" to="/">
                    {" "}
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    {" "}
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/classroom">
                    {" "}
                    Classroom
                  </Link>
                </li>
                <li class="nav-item active">
                <Link class="nav-link" to="/quiz">
                    {" "}
                    Quiz
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container h-100">
          <div class="row align-items-center h-100">
            <div className="col-6 mx-auto">
              {" "}
              <hr class="my-4" />
              <h2>{question}</h2>
              <span>{`Question ${currentIndex + 1} of ${
                QuizData.length
              }`}</span>
              {options.map((
                option //for each option, new paragraph
              ) => (
                <p
                  key={option.id}
                  className={`options ${
                    userAnswer === option ? "selected" : null
                  }`}
                  onClick={() => this.checkAnswer(option)}
                >
                  {option}
                </p>
              ))}
              {currentIndex < QuizData.length - 1 && (
                // Next button only displays if the above is true
                <button
                  className=" btn btn-outline-primary active"
                  disabled={this.state.disabled}
                  onClick={this.nextQuestionHander}
                >
                  Next Question
                </button>
              )}
              {currentIndex === QuizData.length - 1 && (
                <button
                  className=" btn btn-outline-primary"
                  disabled
                  disabled={this.state.disabled}
                  onClick={this.finishHandler}
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
