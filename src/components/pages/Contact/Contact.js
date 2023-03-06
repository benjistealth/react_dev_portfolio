import React, { Component } from "react";
import "./Contact.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;
    const email = event.target.email;
    const message = event.target.message;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

   
    if(!(this.state.lastName && this.state.firstName && this.state.email)) {alert("Please complete all fields!");}

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Submitted with your message -  ${this.state.firstName} ${this.state.lastName} ${this.state.email}`);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message:"",
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
        <h2 className="contact-title">Contact Me:</h2>
        <p className="hello">
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email Address"
          />
          <input className="message"
            value={this.state.email}
            name="message"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Message"
          />
          <button className="submit" onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <div className="contact d-none d-lg-block py-5 px-5" id="contact">
            <h3>Contact Details</h3>
            <p>There are no real contact details in here, because, guess what, I dont want to be contacted by anyone.
              Here are some dummy deets just for completeness.  Any actual contact should be made via Github
              issues on a per repo basis for tracking purposes.</p>
            <p>
              LinkdIn - nouser@linkdin.com I dont have a real Linkdin account yet
              Github - nouser@github.com - note that if you are a sleuth, you can find this from my repos.
              EmailAddress - nouser@email.com
              PhoneNumber - +447969 69 69 69 (yeah, I wish lol)
            </p>
          </div>
      </div>
    );
  }
}

export default Form;
