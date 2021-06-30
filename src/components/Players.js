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
        dribble: "080",
        id: '1625093886400',
        joined: "18/01/2021",
        name: "Dave",
        overall: '73',
        pace: '80',
        passing: '65',
        speed: '69',
        position: '75'
      }, 
      {
        dribble: '080',
        id: '1625093886200',
        joined: "08/10/2020",
        name: "Luke",
        overall: '69',
        pace: '70',
        passing: '65',
        speed: '60',
        position: '73'
      }
  ]
  console.log(players)
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
