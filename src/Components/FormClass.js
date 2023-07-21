import React, { Component } from "react";
import DisplayFrom from "./DisplayForm";

export default class FormClass extends Component {
  constructor() {
    super();
    this.state = {
      Name : "",
      Dept : "",
      Rating : "",
      clicked: true,
      EmpData: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleFunction = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleClick = () => {
    
    const empObj = {
     Name : this.state.Name,
     Dept : this.state.Dept,
     Rating : this.state.Rating
    //   EmpData: this.state.EmpData,
    };

    this.state.EmpData.push(empObj);
    this.setState({
      EmpData: this.state.EmpData,
      Name : "",
      Dept : "",
      Rating : "",
      clicked : false
    });
    // console.log(this.state.EmpData);
  };

  render() {
    return (
      <div className="Main_Container">


        {this.state.clicked ? 

          <form action="#">
            <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>
            <br />
            <br />

            <label htmlFor="name">Name :</label>
            <input type="text"  name="Name" value={this.state.Name} onChange={this.handleChange} />

            <br />
            <br />
            <br />

            <label htmlFor="Dept">Department : </label>
            <input type="text" name="Dept" id="Dept" value={this.state.Dept} onChange={this.handleChange}/>

            <br />
            <br />
            <br />

            <label htmlFor="Rating">Rating</label>
            <input type="text" name="Rating" id="Rating" value={this.state.Rating} onChange={this.handleChange}/>

            <br />
            <br />
            <br />

            <button type="button" onClick={this.handleClick}>Submit</button>
          </form>
         : (<DisplayFrom value={this.state.EmpData} toggleFunc={this.toggleFunction}/>)}
      </div>
    );
  }
}
