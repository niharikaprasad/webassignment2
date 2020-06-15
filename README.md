# Assignment 2 – CSCI 5709 Advance Web Development

Quizapp is a learnimg management tool
Following pages have been developed
Home page : An overview and features of the web app
Login : Frontend of Login feature with email validation for '@' and password validation for blank field
Classroom : Classroom has information of the registered classes and courses in cards. Thre is information of upcoming quizzes as well. On clicking the 'Go to Quiz' button Quiz page is opened
Quiz : A interactive quiz with 5 questions. At the end the result is displayed and correct answers as well

- Date Created: 09 Jun 2020
- Last Modification Date: 14 Jun 2020

## Author

- Niharika Prasad B00835801 nh692090@dal.ca

### Deployment

- The web app is deployed in Heroku by following the tutorial 2.
- Pushed the code to GitHub Repository.
- I have deployed with Heroku CLI using the Heroku Buildpack for create-react-app
  Link: https://github.com/mars/create-react-app-buildpack

---

FOLLOWING IS THE WEBSITE HEROKU LINK

https://fathomless-reaches-62959.herokuapp.com/

---

### Heroku links

Home : https://fathomless-reaches-62959.herokuapp.com/
Login : https://fathomless-reaches-62959.herokuapp.com/login
Classrooms : https://fathomless-reaches-62959.herokuapp.com/classroom
Quiz : https://fathomless-reaches-62959.herokuapp.com/classroom

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# GIT Repository Link

https://github.com/niharikaprasad/webassignment2

## Libraries Used
*[Bootsrap] (https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css)- For resposnsiveness, Carousel, Navigation Bars, Font-Awesomeness, Cards, Login form UI and Fa-Fa Icons.
*[node.js] (https://nodejs.org/en/download/)- Create react app installed from npm (node package manager)
[react-router-dom] : For routing within the app
[Heroku]  CLI for deployment
[jquery] For navbar collpase functionality


# Typography

Font Monteserrat is used for overall application 
https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gTD_u50.woff2

# Colour Palette 

#106eb4 Color Hex
https://www.color-hex.com/color/106eb4


# Acknowledgements

Logo generated from https://www.wix.com/logo/maker/

 The code of Header and Footer is using Bootstrap [3] and referred from the link "https://getbootstrap.com/docs/4.0/components/navbar/".


 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

The code of Carousel caption in Home page is using Bootstrap [3] and referred from the link https://getbootstrap.com/docs/4.0/components/carousel/


<div class="carousel-item">
  <img src="..." alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div>

The grid structure in Home page is made with help of https://www.youtube.com/watch?v=9cKsq14Kfsw

I have added own images, icons , styling and content

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


Cards structure in Classroom page is made from  https://getbootstrap.com/docs/4.0/components/card/
Have addded own images, content and more interactive

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

For validation : 
Ben Awad, Form Validation in React.js - Part 11, Sep 21, 2018. Accessed on: June. 13, 2020. [Video file]. Available: https://www.youtube.com/watch?v=FM2RN8rHCTE

I have changed the behaviour of the app from the source and made more interactive, also used difffernt fields

 validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!this.state.password) {
      passwordError = "Password cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };
  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState({
        loginsuccess: true,
      });
    }
  };




For Quiz Component [4] I followed the following video: https://www.youtube.com/watch?v=ETNv7en7DBU


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


Following Social media footer following [4] Drew Ryan, Responsive Bootstrap Website Start To Finish with Bootstrap 4, HTML5 & CSS3, Apr 3, 2020. Accessed on: June. 13, 2020. [Video file]. Available: https://www.youtube.com/watch?v=9cKsq14Kfsw 

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



# Images:
https://www.flaticon.com/
https://www.dporganizer.com/education/education-background/
https://fontawesome.com/
https://media.oneman.gr/onm-images/language.jpg
https://images.techhive.com/images/article/2015/09/statistics-stats-big-data-analytics-100613892-large.jpg


# References

[1] Ben Awad, Form Validation in React.js - Part 11, Sep 21, 2018. Accessed on: June. 13, 2020. [Video file]. Available: https://www.youtube.com/watch?v=FM2RN8rHCTE
[2]Codito, React responsive navbar with React router part1, Oct 12, 2019. Accessed on: June. 13, 2020. [Video file]. Available: https://www.youtube.com/watch?v=mUEQfWT3-k0
[3]Kindson The Tech Pro, Step by Step Guide to Build a Quiz App in ReactJS (Fun Project for React Beginners), Apr 3, 2020. Accessed on: June. 13, 2020. [Video file]. Available: https://www.youtube.com/watch?v=ETNv7en7DBU
[4]Drew Ryan, Responsive Bootstrap Website Start To Finish with Bootstrap 4, HTML5 & CSS3, Apr 3, 2020. Accessed on: June. 13, 2020. [Video file]. Available: https://www.youtube.com/watch?v=9cKsq14Kfsw
