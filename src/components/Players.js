import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Player from './Player';
import removePlayer from '../redux/actions/removePlayer';

const Players = (props) => {
  const { removePlayer, players } = props;

  const handleRemovePlayer = (id) => {
    removePlayer(id);
  };

  return (
    <section className="player container mx-auto mt-4 d-flex flex-column border-0">
      {
        players.map(
          (player) => (
            <Player
              player={player}
              handleRemovePlayer={handleRemovePlayer}
              key={player.id}
            />
          ),
        )
      }
    </section>
  );
};

const mapStateToProps = (state) => ({
  players: state.playerReducer.players,
});

const mapDispatchToProps = (dispatch) => ({
  removePlayer: (id) => {
    dispatch(removePlayer(id));
  },
});

Players.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  removePlayer: PropTypes.func.isRequired,
};

Players.defaultProps = {
  players: [],
};
PropTypes.resetWarningCache();

export default connect(mapStateToProps, mapDispatchToProps)(Players);
