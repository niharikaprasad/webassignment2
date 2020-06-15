import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'; 
import "bootstrap/js/src/collapse.js";


class Home extends Component {
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
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
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

        <div>
          <div class="carousel-item active">
            <img src={require("./back1.jpg")} />
            <div class="carousel-caption">
              <h1 class="display-2">Quizapp</h1>
              <h3>Best E-Learning tool</h3>
              <Link class="btn btn-outline-light btn-lg" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
        {/* Author Drew Ryan, Responsive Bootstrap Website Start To Finish with Bootstrap 4, HTML5 & CSS3, Apr 3, 2020. Accessed on: June. 13, 2020. [Video file]. Available: https://www.youtube.com/watch?v=9cKsq14Kfsw */}
        <div class="container-fluid row jumbotron">
          <p class="lead text-center padding">
            Welcome to Quizapp, QuizApp is a collaborative learning management
            tool whose primary purpose is for instructors and teachers to create
            quizzes. Students can take quizzes to earn grades and accreditation.
          </p>
        </div>

        <div class="container-fluid padding">
          <div class="row text-center padding">
            <div class="col-xs-12 col-sm-6 col-md-4">
              <img src={require("./classroom.png")} />
              <h3>Create classrooms</h3>
              <p>
                Create a classroom for students who take the course and enroll
                multiple students in the class.
              </p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <img src={require("./quiz.png")} />
              <h3>Publish quizes</h3>
              <p>
                Create interactive and customised quizes. Autograding is here to
                save your time
              </p>
            </div>
            <div class="col-xs-12 col-md-4">
              <img src={require("./certificate.png")} />
              <h3>Earn accreditation</h3>
              <p>
                Quiz takers can receive certificates with the course name, score
                and grade via email or download
              </p>
            </div>
          </div>
        </div>

        <hr class="my-4" />
        <figure>
          <div class="fixed-wrap">
            <div id="fixed">
              <img src="img/mac.png" />
            </div>
          </div>
        </figure>

{/* Drew Ryan, Responsive Bootstrap Website Start To Finish with Bootstrap 4, HTML5 & CSS3, Apr 3, 2020. Accessed on: June. 13, 2020. [Video file]. Available: https://www.youtube.com/watch?v=9cKsq14Kfsw */}
        <div class="contianer-fluid padding">
          <div class="row text-center padding">
            <div class="col-12">
              <h2> Connect with us</h2>
            </div>
            <div class="col-12 social padding">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-12 text-center">
            <h3 class="footer-heading mb-4">Contact Info</h3>
            <ul class="list-unstyled">
              <li class="address">
                6050 University Ave, Halifax, NS B3H 4R2, Canada
              </li>
              <li class="email">info@quizapp.com</li>
              <a href="#" class="text-center">
                <span class="icon-facebook"></span>
              </a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
