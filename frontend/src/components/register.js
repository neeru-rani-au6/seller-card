import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { registerUser } from "../redux/action/user";
import { connect } from "react-redux";

class Register extends Component {
  state = {
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    isSubmitting: false,
    error: "",
  };

  handleChange = (key, value) => {
    const newState = { ...this.state };
    newState[key] = value;
    if (key === "name") {
      newState.nameError = "";
      if (!newState.name.match(/^[a-z ,.'-]{3,150}$/i)) {
        newState.nameError = "name is not valid";
      }
      if (newState.name.trim() === "") {
        newState.nameError = "name is required";
      }
    }
    if (key === "email") {
      newState.emailError = "";
      if (!newState.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        newState.emailError = "invalid email ";
      }
      if (newState.email.trim() === "") {
        newState.emailError = "email is required";
      }
    }
    if (key === "password") {
      newState.passwordError = "";
      if (newState.password.length < 5) {
        newState.passwordError = "Can not be less than 5";
      }
      if (newState.password.trim() === "") {
        newState.passwordError = "password is required";
      }
    }
    this.setState(newState);
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const newState = { ...this.state };
    if (newState.name.trim() === "" || newState.nameError) {
      newState.nameError = newState.nameError || "name is required";
      this.setState(newState);
      return;
    }
    if (newState.email.trim() === "" || newState.emailError) {
      newState.emailError = newState.emailError || "email is required";
      this.setState(newState);
      return;
    }
    if (newState.password.trim() === "" || newState.passwordError) {
      newState.passwordError = newState.passwordError || "password is required";
      this.setState(newState);
      return;
    }

    newState.isSubmitting = true;
    this.setState(newState);
    await this.props.registerUser(this.state);
    newState.error = this.props.user.error;
    newState.isSubmitting = false;
    this.setState(newState);
    if (!this.props.user.error) {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="register-paper">
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            onSubmit={this.handleSubmit}
            className="register-form"
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  value={this.state.name}
                  onChange={(e) => this.handleChange("name", e.target.value)}
                  error={!!this.state.nameError}
                  helperText={this.state.nameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={(e) => this.handleChange("email", e.target.value)}
                  error={!!this.state.emailError}
                  helperText={this.state.emailError}
                />
              </Grid>
              <Grid item xs={12} className="register-input">
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={(e) =>
                    this.handleChange("password", e.target.value)
                  }
                  error={!!this.state.passwordError}
                  helperText={this.state.passwordError}
                />
              </Grid>
              {this.state.error && (
                <Grid item xs={12}>
                  <div className="error">{this.state.error}</div>
                </Grid>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="register-submit"
              disabled={this.state.isSubmitting}
            >
              Sign Up
            </Button>
            <Grid container justify="center" className="mt-2">
              <Grid item>
                Already have an account?
                <Link href="/#/" variant="body2">
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userState,
  };
};

export default connect(mapStateToProps, { registerUser })(Register);
