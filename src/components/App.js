/* eslint-disable */
import { Fragment } from 'react';
import NewPlayerForm from './NewPlayerForm';
import Players from './Players';
import Nav from './Nav';

function App() {
  return (
    <Fragment>
      <Nav/>
      <Players/>
      <NewPlayerForm />
    </Fragment>
  );
}

export default App;
