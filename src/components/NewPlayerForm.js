/* eslint-disable */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import showForm from '../redux/actions/showForm';
import addPlayer from '../redux/actions/addPlayer';

const NewPlayerForm = (props) => {
  const { showForm, toggle, addPlayer } = props;
  const [name, setName] = useState('');
  const [joined, setJoined] = useState('');
  const [pace, setPace] = useState(0);
  const [passing, setPassing] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [dribble, setDribble] = useState(0);
  const [position, setPosition] = useState(0);
  const [overall, setOverall] = useState(0);

  const handleFormToggle = () => {
    showForm();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = { name, joined, pace, passing, speed, dribble, position, overall };
    console.log(data)
    addPlayer(data);
    showForm()
    setName('');
    setJoined('');
    setPace(0);
    setPosition(0);
    setPassing(0);
    setSpeed(0);
    setDribble(0);
    setOverall(0);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handleJoinedChange = (e) => {
    setJoined(e.target.value);
  };
  
  const handlePaceChange = (e) => {
    setPace(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };
  
  const handlePassingChange = (e) => {
    setPassing(e.target.value);
  };

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  const handleDribbleChange = (e) => {
    setDribble(e.target.value);
  };

  const handleOverallChange = (e) => {
    setOverall(e.target.value);
  };

  return (
    <div className="container my-5 w-50 d-flex flex-column">
      <button
        onClick={handleFormToggle}
        type="button"
        className={
           toggle ? 'w-25 btn btn-danger align-self-end'
             : 'btn btn-success w-25 align-self-end'
        }
      >
        {toggle ? 'Close' : 'Add Player'}
      </button>
      <form
        className={toggle ? '' : 'd-none'}
        onSubmit={handleFormSubmit}
      >
        <div className="form-group mt-3">
          <label htmlFor="name">
            Name
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </label>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="joined">
            Joined
            <input
              type="date"
              className="form-control"
              id="joined"
              value={joined}
              onChange={handleJoinedChange}
            />
          </label>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="pace">
            Pace
            <input
              type="number"
              className="form-control"
              id="pace"
              value={pace}
              onChange={handlePaceChange}
            />
          </label>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="position">
            Position
            <input
              type="number"
              className="form-control"
              id="position"
              value={position}
              onChange={handlePositionChange}
            />
          </label>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="passing">
            Passing
            <input
              type="number"
              className="form-control"
              id="passing"
              value={passing}
              onChange={handlePassingChange}
            />
          </label>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="speed">
            Speed
            <input
              type="number"
              className="form-control"
              id="speed"
              value={speed}
              onChange={handleSpeedChange}
            />
          </label>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="dribble">
            Dribble
            <input
              type="number"
              className="form-control"
              id="dribble"
              value={dribble}
              onChange={handleDribbleChange}
            />
          </label>
        </div>     
        <div className="form-group mt-3">
          <label htmlFor="overall">
            Overall
            <input
              type="number"
              className="form-control"
              id="overall"
              value={overall}
              onChange={handleOverallChange}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ toggle: state.showForm.toggle });

const mapDispatchToProps = (dispatch) => ({
  showForm: () => {
    dispatch(showForm());
  },
  addPlayer: (data) => {
    dispatch(addPlayer(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayerForm);
