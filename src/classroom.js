import React, { Component } from "react";
import { Link } from "react-router-dom";
import mac from "./mac.png";

class Classroom extends Component {
  render() {
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
                <li class="nav-item ">
                  <Link class="nav-link" to="/login">
                    {" "}
                    Login
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/classroom">
                    {" "}
                    Classroom
                  </Link>
                </li>
                <li class="nav-item">
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
            <div className="col-12 mx-auto">
              <h1>My Classrooms</h1>
              <div class="row">
                <div class="col-sm-4">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={require("./datacard.jpg")}
                    />
                    <div class="card-body">
                      <h5 class="card-title">CSCI48 Data Analytics</h5>
                      <p class="card-text">
                        Data analysis is a process of inspecting, cleansing and
                        modeling data to discover information
                      </p>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Instructor : John Doe</li>
                      </ul>
                      <a href="#" class="btn btn-primary">
                        Go to course
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={require("./webcard.jpg")}
                    />
                    <div class="card-body">
                      <h5 class="card-title">CSCI88 Web development</h5>
                      <p class="card-text">
                        Web development is the work involved in developing a
                        website for the Internet or an intranet.
                      </p>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Instructor : Jane Doe</li>
                      </ul>
                      <a href="#" class="btn btn-primary">
                        Go to course
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <h1>Upcoming Quizzes</h1>
              <div class="row">
                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Quiz 2</h5>
                      <p class="card-text">
                        The quiz is random
                      </p>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Due : 20/05/2020</li>
                        <li class="list-group-item">Weightage : 10%</li>
                        <li class="list-group-item">Time : 30 mins</li>
                      </ul>
                      <Link to="/quiz" class="btn btn-primary">
                        Go to Quiz
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Quiz 3</h5>
                      <p class="card-text">
                        Mid term
                      </p>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Due : 31/05/2020</li>
                        <li class="list-group-item">Weightage : 5%</li>
                        <li class="list-group-item">Time : 30 mins</li>
                      </ul>
                      <Link to="/quiz" class="btn btn-primary">
                        Go to Quiz
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Classroom;
