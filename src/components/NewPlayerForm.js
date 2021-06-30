/* eslint-disable */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import showForm from '../redux/actions/showForm';
import addPlayer from '../redux/actions/addPlayer';

const NewPlayerForm = (props) => {
  const { showForm, toggle, addPlayer } = props;
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

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

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
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
          <label htmlFor="date">
            Date
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={handleDateChange}
            />
          </label>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="content">
            Content
            <input
              type="text"
              className="form-control"
              id="content"
              value={content}
              onChange={handleContentChange}
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
