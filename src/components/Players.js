import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Player from './Player';
// import addPlayer from '../redux/actions/addPlayer';

const Players = (props) => {
  let { players } = props;
  players = players.length > 0
    ? players
    : [
      {
        dribble: '080',
        id: '1625093886400',
        joined: '18/01/2021',
        name: 'Dave',
        overall: '73',
        pace: '80',
        passing: '65',
        speed: '69',
        position: '75',
      },
      {
        dribble: '080',
        id: '1625093886200',
        joined: '08/10/2020',
        name: 'Luke',
        overall: '69',
        pace: '70',
        passing: '65',
        speed: '60',
        position: '73',
      },
    ];
  return (
    <section className="player container mx-auto mt-4 d-flex flex-column border-0">
      {
        players.map((player) => <Player player={player} key={player.id} />)
      }
    </section>
  );
};

const mapStateToProps = (state) => ({
  players: state.addPlayer.players,
});

Players.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
};

Players.defaultProps = {
  players: [],
};
PropTypes.resetWarningCache();

export default connect(mapStateToProps)(Players);
