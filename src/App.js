import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import './fonts.css';



function App() {
  return (

    <div className="App">
      <nav class = "navbar navbar-expand-md navbar-light bg-light sticky-top" >
	<div class="container-fluid">
		<a class="navbar-brand" href = "#"><img src = "img/logo.png"/></a>
		<button class="navbar-toggler" type ="button" data-toggler = "collapse"
		data-target = "#navbarResponsive">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class ="collapse navbar-collapse" id ="navbarResponsive">
		<ul class="navbar-nav ml-auto">
			<li class = "nav-item active">
				<a class ="nav-link" href ="#"> Home</a>
			</li>
			<li class = "nav-item">
				<a class ="nav-link" href ="#"> Login</a>
			</li>
			<li class = "nav-item">
				<a class ="nav-link" href ="#"> Quiz</a>
			</li>
			<li class = "nav-item">
				<a class ="nav-link" href ="#"> About us</a>
			</li>
		</ul>
	</div>
	</div>
	
</nav>


<div>
	<div class = "carousel-item active">
		<img src = "img/back1.jpg"/> 
		<div class="carousel-caption">
			<h1 class= "display-2">Quizapp</h1>
			<h3>Best E-Learning tool</h3>
			<button type ="button" class="btn btn-outline-light btn-lg">Login</button>
		</div>
	</div>
</div>

<div class ="container-fluid row jumbotron" >
<p class ="lead text-center padding" >Welcome to Quizapp, QuizApp is a collaborative learning management tool whose primary purpose is for instructors and teachers to create quizzes. Students can take quizzes to earn grades and accreditation.</p>
</div>

<div class ="container-fluid padding">
	<div class="row text-center padding">
		<div class = "col-xs-12 col-sm-6 col-md-4">
			<img src ="img/classroom.png" />
			<h3>Create classrooms</h3>
			<p>Create a classroom for students who take the course and enroll multiple students in the class.</p>
		</div>
		<div class = "col-xs-12 col-sm-6 col-md-4">
			<img src ="img/quiz.png"/>
			<h3>Publish quizes</h3>
			<p>Create interactive and customised quizes. Autograding is here to save your time</p>
		</div>
		<div class = "col-xs-12 col-md-4">
			<img src ="img/certificate.png"/>
			<h3>Earn accreditation</h3>
			<p>Quiz takers can receive certificates with the course name, score and grade via email or download</p>
		</div>
	</div>
</div>


<hr class = "my-4"/>
<figure>
	<div class ="fixed-wrap">
		<div id = "fixed">
			<img src = "img/mac.png"/>
		</div>
	</div>
</figure>


<div class = "contianer-fluid padding">
<div class = "row text-center padding">
	<div class="col-12">
		<h2> Connect with us</h2>
	</div>
	<div class= "col-12 social padding">
		<a href="#"><i class ="fab fa-facebook"></i></a>
		<a href="#"><i class ="fab fa-twitter"></i></a>
		<a href="#"><i class ="fab fa-linkedin"></i></a>
		<a href="#"><i class ="fab fa-youtube"></i></a>

	</div>
</div>
</div>

<div class="row mb-5">
	<div class="col-12 text-center">
		<h3 class="footer-heading mb-4">Contact Info</h3>
		<ul class="list-unstyled">
		  <li class="address">6050 University Ave, Halifax, NS B3H 4R2, Canada</li>
		  <li class="email">info@quizapp.com</li>
		  <a href="https://fb.me/droptheshop" class="text-center"><span class="icon-facebook"></span></a>
		</ul>
	  </div>
	</div>
</div>
  );
   
  }

export default App;
