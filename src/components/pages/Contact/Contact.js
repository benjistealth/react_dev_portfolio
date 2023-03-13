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
    alert(`Submitted with your message -  ${this.state.firstName} ${this.state.lastName} ${this.state.email}\n\n ${this.state.message} `);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message:"",
    });
  };

  render() {
    // each input has a `value`, `name`, and `onChange` prop
    return (
      <>
      <h2 className="contact-title">Contact Me</h2>
      <div className="container contact-page-container">

        <iframe className="resume" title="resume.pdf" src="https://drive.google.com/file/d/13X3w4Ghvo7Uhl937sM9zvuPEk9OnyFKW/preview?usp=share_link"></iframe>
      
      <div className="container form-container">
        
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
          <textarea className="message"
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Message"
          />
          <button className="submit" onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <div className="contact d-none d-lg-block" id="contact">
            <h3>Contact Details</h3>
            <p>Any contact relating to individual repositories 
              should be made via Github issues on a per repo basis for tracking purposes.</p>
            <p>
              LinkdIn - nouser@linkdin.com I dont have a real Linkdin account yet</p>
             <p> Github - <a className="github-user" href="https://github.com/benjistealth/" target="blank">BenjiStealth</a></p>
            <p> EmailAddress - <a href="mailto:bstealth45@gmail.com">Send me an email</a></p>
              <p>PhoneNumber - +447974 112 925</p>            
          </div>
          
          </div>

      </div>
      </>
    );
  }
}

export default Form;
