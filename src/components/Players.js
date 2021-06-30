/* eslint-disable */
import React from 'react';
import Player from './Player';
import {connect} from 'react-redux';
import addPlayer from '../redux/actions/addPlayer';

const Players = (props) => {
  const players = props.players || []
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
