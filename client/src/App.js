import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';

import BlockchainView from './components/BlockchainView';
import WorldmapView from './components/WorldmapView';
import AdventurersView from './components/AdventurersView';

const screens = [
  {
    link: '/blockchain',
    icon: 'cube',
    name: 'Blockchain',
  },
  {
    link: '/worldmap',
    icon: 'map',
    name: 'Worldmap',
  },
  {
    link: '/adventurers',
    icon: 'users',
    name: 'Adventurers',
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      blockchain: []
    };
  }

  componentDidMount() {
    this.pollForBlockchain();
    this.pollingForBlockchain = setInterval(this.pollForBlockchain, 2000);
  }

  componentWillUnmount() {
    this.pollingForBlockchain = undefined;
  }

  pollForBlockchain = (blocks = 'http://localhost:3001/blocks') => (
    fetch(blocks)
      .then(rawData => rawData.json())
      .then(blockchain => {
        if (this.state.blockchain.length === 0) {
          return this.setState({ blockchain });
        }

        const mostRecentBlock = blockchain[blockchain.length - 1];
        const ownMostRecentBlock = this.state.blockchain[this.state.blockchain.length - 1];

        if (mostRecentBlock.hash !== ownMostRecentBlock.hash) {
          return this.setState({ blockchain });
        }
      })
      .catch(err => {
        this.pollingForBlockchain = undefined;
        this.pollForBlockchain('http://merkelle.com:3001/blocks');
        this.pollingForBlockchain = setInterval(() => this.pollForBlockchain('http://merkelle.com/blocks'), 2000);
      })
  )

  render() {
    const { blockchain } = this.state;

    return (
      <Router>
        <Container>
            <Segment>
              <Header />
              <Navbar screens={screens} />
            </Segment>
            <Segment>
              <Switch>
                <Route
                  path='/'
                  render={() => <Redirect to='/blockchain' />}
                  exact />
                <Route
                  path='/blockchain'
                  render={() => <BlockchainView blockchain={blockchain} />}  />
                <Route
                  path='/worldmap'
                  render={() => <WorldmapView blockchain={blockchain} />}  />
                <Route
                  path='/adventurers'
                  component={AdventurersView} />
                </Switch>
            </Segment>
        </Container>
      </Router>
    );
  }
}

export default App;
