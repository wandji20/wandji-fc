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
  const [passing, setPassing] = useState(0);
  const [goals, setGoals] = useState(0);
  const [rating, setRating] = useState(0);

  const handleFormToggle = () => {
    showForm();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = { date, content };
    addPlayer(data);
    setDate('');
    setContent('');
  };

  const handleJoinedChange = (e) => {
    setJoined(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePassingChange = (e) => {
    setPassing(e.target.value);
  };

  const handleGoalsChange = (e) => {
    setGoals(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
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
        {toggle ? 'Close' : 'Create Todo'}
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
          <label htmlFor="passing">
            Passing Accuracy
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
          <label htmlFor="goals">
            Goals
            <input
              type="number"
              className="form-control"
              id="goals"
              value={goals}
              onChange={handleGoalsChange}
            />
          </label>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="rating">
            Rating
            <input
              type="number"
              className="form-control"
              id="rating"
              value={rating}
              onChange={handleRatingChange}
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
