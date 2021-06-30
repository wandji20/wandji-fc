/* eslint-disable */
import React from 'react';
import Player from './Player';
import {connect} from 'react-redux';
import addPlayer from '../redux/actions/addPlayer';

const Players = (props) => {
  const players = props.players.length > 0 ? 
    props.players :
    [
      {
        goals: "200",
        id: 1625076645968,
        joined: "2021-06-16",
        name: "wandji",
        passing: "75",
        rating: "91",
        tackles: "200",
      }, 
      {
        goals: "252",
        id: 1625076645948,
        joined: "2021-06-16",
        name: "wandji",
        passing: "88",
        rating: "95",
        tackles: "50",
      }
  ]
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

const mapStateToProps = (state) => {
  return {
    players: state.addPlayer.players
  }
}

export default connect(mapStateToProps)(Players);
