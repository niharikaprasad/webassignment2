import React, { Component } from "react";
import { Link } from "react-router-dom";
import { QuizData } from "./QuizData";
import "./quiz.css";

class Quiz extends Component {
  state = {
    userAnswer: null, 
    currentIndex: 0,
    options: [], 
    quizEnd: false, 
    marks: 0,
    disabled: true,
  };

  loadQuiz = () => {
    const { currentIndex } = this.state;
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
              <Link class="navbar-brand" to= "/">
                <img src={require("./logo.png")} />
              </Link>
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
            <div className="col-4 mx-auto">
                <h1>Quiz completed</h1>
                <div class="row">
                  <div class="card">
                    {/* <img
                      class="card-img-top"
                      src={require("./datacard.jpg")}
                    /> */}
                    <div class="card-body">
                      <h5 class="card-title">CSCI48 Data Analytics</h5>
                      <p class="card-text">
                      <h2>Final marks : {this.state.marks}</h2>
                      </p>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Grade : A</li>
                        <li class="list-group-item">Time taken : 15:20</li>
                      </ul>
                      <Link class="btn btn-outline-primary active" to="/">
                  Back to Home
                </Link>
                    </div>
                  </div>
                </div>

                
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
          <Link class="navbar-brand" to= "/">
                <img src={require("./logo.png")} />
              </Link>
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
                option
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
