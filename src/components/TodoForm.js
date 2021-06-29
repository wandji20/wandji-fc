import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const todoForm = (props) => {
  console.log(props);
  return (
    <div className="container my-5 w-50">
      <form>
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

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(todoForm);
