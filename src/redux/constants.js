const SHOW_FORM = 'SHOW_FORM';
const ADD_PLAYER = 'ADD_PLAYER';
const REMOVE_PLAYER = 'REMOVE_PLAYER';
const players = [
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
const initialState = { players, toggle: false };

export {
  SHOW_FORM, ADD_PLAYER, REMOVE_PLAYER, initialState,
};
