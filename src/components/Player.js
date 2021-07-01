import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Player = (props) => {
  const { player, handleRemovePlayer } = props;
  const {
    name, joined, pace, passing, speed, dribble, overall, position, id,
  } = player;
  const progressStyles = {
    width: '30%',
  };
  return (
    <article className="player d-flex flex-column border-0 my-3 bg-light">
      <div className="d-flex flex-column">
        <h3 className="name ml-5">{name}</h3>
        <p className="d-flex ml-5 joined">
          <span>Joined :</span>
          <span className="joined-date">{joined}</span>
        </p>
      </div>
      <ul className="player-details d-flex list-style-none">
        <li className="d-inline-flex col-2 justify-content-center flex-column">
          <span className="align-self-center">Pace</span>
          <span style={progressStyles} className="align-self-center">
            <CircularProgressbar value={(parseFloat(pace) / 100)} maxValue={1} text={`${parseFloat(pace)}%`} />
          </span>
        </li>
        <li className="d-inline-flex col-2 justify-content-center flex-column">
          <span className="align-self-center">Position</span>
          <span style={progressStyles} className="align-self-center">
            <CircularProgressbar value={(parseFloat(position) / 100)} maxValue={1} text={`${parseFloat(position)}%`} />
          </span>
        </li>
        <li className="d-inline-flex col-2 justify-content-center flex-column">
          <span className="align-self-center">Pass Accuracy</span>
          <span style={progressStyles} className="align-self-center">
            <CircularProgressbar value={(parseFloat(passing) / 100)} maxValue={1} text={`${parseFloat(passing)}%`} />
          </span>
        </li>
        <li className="d-inline-flex col-2 justify-content-center flex-column">
          <span className="align-self-center">Speed</span>
          <span style={progressStyles} className="align-self-center">
            <CircularProgressbar value={(parseFloat(speed) / 100)} maxValue={1} text={`${parseFloat(speed)}%`} />
          </span>
        </li>
        <li className="d-inline-flex col-2 justify-content-center flex-column">
          <span className="align-self-center">Dribble</span>
          <span style={progressStyles} className="align-self-center">
            <CircularProgressbar value={(parseFloat(dribble) / 100)} maxValue={1} text={`${parseFloat(dribble)}%`} />
          </span>
        </li>
        <li className="d-inline-flex col-2 justify-content-center flex-column">
          <span className="align-self-center">Overall</span>
          <span style={progressStyles} className="align-self-center">
            <CircularProgressbar value={(parseFloat(overall) / 100)} maxValue={1} text={`${parseFloat(overall)}%`} />
          </span>
        </li>
      </ul>
      <ul className=" my-4 player-controls d-flex justify-content-between list-style-none w-75">
        <button type="button" className="ml-2 btn btn-info">Terminate Contract</button>
        <button type="button" className="ml-2 btn btn-info">Modify Details</button>
        <button type="button" className="ml-2 btn btn-info">See More</button>
        <button onClick={() => handleRemovePlayer(id)} type="button" className="ml-2 btn btn-danger">Terminate Contract</button>
      </ul>
    </article>
  );
};

Player.propTypes = {
  player: PropTypes.objectOf(PropTypes.string),
  handleRemovePlayer: PropTypes.func.isRequired,
};

Player.defaultProps = {
  player: {},
};

export default Player;
