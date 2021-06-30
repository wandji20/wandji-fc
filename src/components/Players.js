/* eslint-disable */
import React from 'react';
import Player from './Player';

const Players = () => {
  const players = [{id:1}]
  return (
    <section className="player container mx-auto mt-4 d-flex flex-column border-0">
      {
        players.map((player)=> {
          return <Player player={player} key={player.id}/>
        })
      }
    </section>
  );
};

export default Players;
