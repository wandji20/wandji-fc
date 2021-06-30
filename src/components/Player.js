import React from 'react';

const Player = () => (
  <article className="player d-flex flex-column border-0">
    <h3 className="name ml-5">Player Name</h3>
    <ul className="player-details d-flex list-style-none">
      <li className="d-inline-flex col-3 justify-content flex-column">
        <span className="align-self-center">Tackles</span>
        <span className="align-self-center">75</span>
      </li>
      <li className="d-inline-flex col-3 justify-content flex-column">
        <span className="align-self-center">Pass Accuracy</span>
        <span className="align-self-center">78%</span>
      </li>
      <li className="d-inline-flex col-3 justify-content flex-column">
        <span className="align-self-center">Goals</span>
        <span className="align-self-center">180</span>
      </li>
      <li className="d-inline-flex col-3 justify-content flex-column">
        <span className="align-self-center">Rating</span>
        <span className="align-self-center">85%</span>
      </li>
    </ul>
    <ul className=" mt-4 player-controls d-flex justify-content-between list-style-none w-50">
      <button type="button" className="ml-2 btn btn-info">Terminate Contract</button>
      <button type="button" className="ml-2 btn btn-info">Modify Details</button>
      <button type="button" className="ml-2 btn btn-info">See More</button>
    </ul>
  </article>
);

export default Player;
