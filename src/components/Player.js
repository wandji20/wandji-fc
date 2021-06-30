/* eslint-disable */
import React from 'react';

const Player = (props) => {
  const {
    name, tackles, passing, goals, rating,
  } = props.player;
  return (
    <article className="player d-flex flex-column border-0 my-3 bg-light">
      <h3 className="name ml-5">{name}</h3>
      <ul className="player-details d-flex list-style-none">
        <li className="d-inline-flex col-3 justify-content flex-column">
          <span className="align-self-center">Tackles</span>
          <span className="align-self-center">
            {tackles}
            %
          </span>
        </li>
        <li className="d-inline-flex col-3 justify-content flex-column">
          <span className="align-self-center">Pass Accuracy</span>
          <span className="align-self-center">
            {passing}
            %
          </span>
        </li>
        <li className="d-inline-flex col-3 justify-content flex-column">
          <span className="align-self-center">Goals</span>
          <span className="align-self-center">{goals}</span>
        </li>
        <li className="d-inline-flex col-3 justify-content flex-column">
          <span className="align-self-center">Rating</span>
          <span className="align-self-center">
            {rating}
            %
          </span>
        </li>
      </ul>
      <ul className=" mt-4 player-controls d-flex justify-content-between list-style-none w-50">
        <button type="button" className="ml-2 btn btn-info">Terminate Contract</button>
        <button type="button" className="ml-2 btn btn-info">Modify Details</button>
        <button type="button" className="ml-2 btn btn-info">See More</button>
      </ul>
    </article>
  );
};

export default Player;
