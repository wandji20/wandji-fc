/* eslint-disable */
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import showForm from '../redux/actions/showForm';

const todoForm = (props) => {
  const handleFormToggle = () => {
    props.showForm();
  }
  const {showForm, toggle} = props
  console.log(props);
  return (
    <div className={"container my-5 w-50 d-flex flex-column"}>
      <button
        onClick = {handleFormToggle}
        type="button" 
        className={
           toggle ? 'w-25 btn btn-danger align-self-end' 
            : 'btn btn-success w-25 align-self-end'
        }
      >
        {toggle ? 'Close' : 'Create Todo'}
      </button>
      <form className={toggle ? '' : 'd-none'}>
        <div className="form-group">
          <label htmlFor="date">
            Date
            <input type="date" className="form-control" id="date" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="content">
            Content
            <input type="text" className="form-control" id="content" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {toggle:state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    showForm: ()=> {
      dispatch(showForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoForm);
