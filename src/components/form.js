import React from "react";
import {MDBRow, MDBBtn,  MDBInput } from "mdbreact";
class Form extends React.Component {
  render() {
    return(
    <form onSubmit={this.props.weatherMetod}>
        <div className="col-md-6 col-lg-4 col-xs-8">
      <MDBInput type="text" name="city" hint="Город" />
</div>
      <div className="btn1">
      <MDBBtn type="submit" color="danger">Узнать погоду</MDBBtn>
      </div>

    </form>
    );
  }
}

export default Form;
