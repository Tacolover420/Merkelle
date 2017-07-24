import React, { Component } from 'react';
import { Segment, List, Item, Button, Icon } from 'semantic-ui-react';
import Block from '../Block';

const overflowing = {
  paddingTop: '2.5rem',
  paddingBottom: '2.5rem',
  paddingLeft: '5rem',
  paddingRight: '5rem',
  overflow: 'hidden',
  overflowX: 'scroll',
  whiteSpace: 'nowrap',
};

const marginLeft = { marginLeft: '5rem' };

export default class BlockchainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialSelectionPerformed: false,
      activeBlock: this.props.blockchain.length === 0
        ? { index: 0 }
        : this.props.blockchain[this.props.blockchain.length - 1],
    };
  }

  componentDidMount() {
    const { initialSelectionPerformed } = this.state;
    
    if (!initialSelectionPerformed) {
      setTimeout(() => {
        document.getElementById('blockchain').scrollLeft = 99999999;
      }, 500);
    }
  }

  componentDidUpdate() {
    const { initialSelectionPerformed } = this.state;

    if (!initialSelectionPerformed) {
      this.setActiveBlock();
      this.setState({ initialSelectionPerformed: true });
      document.getElementById('blockchain').scrollLeft = 99999999;
    }
  }

  setActiveBlock = (index = this.props.blockchain.length - 1) => {
    this.setState({ activeBlock: this.props.blockchain[index] });
  }

  render() {
    const { activeBlock } = this.state;
    const { blockchain } = this.props;

    return (
      <div>
        <Segment
          id='blockchain'
          style={overflowing}
          raised>
          <List horizontal relaxed>
            {blockchain.map((block, i) => (
              <List.Item
                key={i}
                style={marginLeft}>
                <Block
                  active={i === activeBlock.index}
                  size={8}
                  data={block}
                  index={block.index}
                  setActiveBlock={this.setActiveBlock} />
              </List.Item>
            ))}
          </List>
        </Segment>
        {activeBlock && (
          <Segment>
            <Item.Group>
              <Item style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', paddingLeft: '5rem' }}>
                <Item.Content>
                  <Block active size={10} data={activeBlock} />
                </Item.Content>
                <Item.Content style={{ paddingLeft: '5rem' }}>
                  <Item.Header
                    className='fancy'
                    as='h2'>Block #{activeBlock.index}</Item.Header>
                  <Item.Meta>
                    <Icon name='time' /> {activeBlock.timestamp}
                  </Item.Meta>
                  <Item.Description>
                    <br />
                    <strong className='fancy'><Icon name='cube' /><Icon name='hashtag' /> Hash</strong> <br /> {activeBlock.hash} <br />
                    <br />
                    <strong className='fancy'><Icon name='reply all' /><Icon name='hashtag' /> Previous Hash</strong> <br /> {activeBlock.previousHash} <br />
                  </Item.Description>
                  <Item.Extra>
                  <Button>
                    <Icon name='map' /> View Worldmap
                  </Button>
                </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        )}
      </div>
    );
  }
}