import React, { Component } from "react";
import { Link } from "react-router-dom";
import mac from './mac.png'

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
};

class Login extends Component {
  state = initialState;

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
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
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
                <li class="nav-item active">
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
        <div className = "container h-100">
        <div class="row align-items-center h-100">
          <div className ="col-6 mx-auto">
    <h5 class="mb-4 card-header info-color white-text text-center py-4">
        <strong>Login</strong>
    </h5>
          <form onSubmit ={this.handleSubmit} class="form-horizontal padding" >
            <div class="form-group">
              <label class="label col-sm-2" for="email">
                Email:
              </label>
              <div class="col-sm-10">
                <input
                 name ="email"
                  type="email"
                  // class="form-control"
                  // id="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <div style = {{fontSize: "12px",color: "red"}}>{this.state.emailError}</div>
              </div>
            </div>
            <div class="form-group">
              <label class="label col-sm-2" for="pwd">
                Password:
              </label>
              <div class="col-sm-10">
                <input onChange ={this.handleChange}
                name ="password"
                  type="password"
                  // class="form-control"
                  // id="pwd"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <div style = {{fontSize: "12px",color: "red"}}>{this.state.passwordError}</div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
        </div>
        </div>

    );
  }
}

export default Login;
