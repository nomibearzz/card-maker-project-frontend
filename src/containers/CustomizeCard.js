import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import { connect } from 'react-redux';
import { getDesignInfo } from "../thunks/designThunk";


class CustomizeCard extends Component {
  constructor(props) {
    super(props)

    console.log(props);
    
    this.props.getDesignInfo(this.props.selectedDesign.id)

    this.state = {
      name: "",
      host: "",
      date: new Date(),
      time: new Date(),
      phone_number: "",
      location: "",
      address: "",
      message: "",
      user_id: this.props.currentUser.id,
      design_id: this.props.selectedDesignInfo.id,
      event_id: this.props.selectedDesignInfo.event.category
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  dateChangeHandler = (date) => {
    this.setState({date})
  }

  timeChangeHandler = (time) => {
    this.setState({time})
  }

  render() {
    console.log(this.state);
  
    return (
      <div className="customize-card-container">

        <div className="customize-card-form">
          <img src={this.props.selectedDesignInfo.image} alt="some design"/>
          <form className="invite-form" onSubmit={this.submitHandler}>
            <label>Name of the Event</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.name}
              onChange={this.changeHandler}/>

            <label>Your Host</label>
            <input 
              type="text" 
              name="host" 
              value={this.state.host}
              onChange={this.changeHandler}/>
            
            <label>Date of the Event</label>
           <DatePicker 
            name="date"
            value={this.state.date}
            minDate={new Date()}
            clearIcon= {null}
            onChange={this.dateChangeHandler}/>

           <label>Time of the Event</label>
           <TimePicker 
            name="time"
            value={this.state.time}
            clearIcon= {null}
            onChange={this.timeChangeHandler}/>
        

            <label>Phone Number</label>
            <input 
              type="text" 
              name="phone_number" 
              value={this.state.phone_number}
              onChange={this.changeHandler}/>

            <label>Name of the Venue or Location</label>
            <input 
              type="text" 
              name="location" 
              value={this.state.location}
              onChange={this.changeHandler}/>

            <label>Address</label>
            <input 
              type="text" 
              name="address" 
              value={this.state.address}
              onChange={this.changeHandler}/>

            <label>Message</label>
            <textarea
              name="message" 
              value={this.state.message}
              onChange={this.changeHandler}/>

            <button>Create Invite</button>
          </form>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    selectedDesign: state.designInfo.selectedDesign,
    currentUser: state.userInfo.currentUser.user,
    selectedDesignInfo: state.designInfo.selectedDesignInfo
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getDesignInfo: (id) => dispatch(getDesignInfo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeCard);