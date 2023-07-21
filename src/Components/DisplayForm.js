import React, { Component } from "react";

class DisplayFrom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.value);
  }

  render() {
    return (
      <>
          <h1 className="heading">EMPLOYEE FEEDBACK DATA</h1>
        <div className="contanier">
            
          {this.props.value.map((item, index) => {
            return (
              <div className="contanier_item" key={index}>
                Name : {item.Name} || Department :{item.Dept} || Rating :{" "}
                {item.Rating}
              </div>
            );
          })}
        </div>


        <button onClick={this.props.toggleFunc}>Go Back</button>


      </>
    );
  }
}

export default DisplayFrom;
