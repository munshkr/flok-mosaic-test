import React from 'react'
import { Classes } from '@blueprintjs/core';
import classNames from 'classnames';
// import Head from 'next/head'
import { Mosaic, MosaicNode, MosaicWindow, MosaicZeroState } from 'react-mosaic-component';

// import { CloseAdditionalControlsButton } from './CloseAdditionalControlsButton';

let windowCount = 3;

const THEMES = {
  ['Blueprint']: 'mosaic-blueprint-theme',
  ['Blueprint Dark']: classNames('mosaic-blueprint-theme', Classes.DARK),
  ['None']: '',
};

// const additionalControls = React.Children.toArray([<CloseAdditionalControlsButton />]);

const EMPTY_ARRAY = [];


class Home extends React.Component {
  state = {
    currentNode: {
      direction: 'row',
      first: 1,
      second: {
        direction: 'column',
        first: 2,
        second: 3,
      },
      splitPercentage: 40,
    },
    currentTheme: 'None',
  };

  render() {
    return (
      <React.StrictMode>
        <div className="react-mosaic-example-app">
          <Mosaic
            renderTile={(count, path) => (
              <MosaicWindow
                /* additionalControls={count === 3 ? additionalControls : EMPTY_ARRAY} */
                title={`Window ${count}`}
                createNode={this.createNode}
                path={path}
                onDragStart={() => console.log('MosaicWindow.onDragStart')}
                onDragEnd={(type) => console.log('MosaicWindow.onDragEnd', type)}
                renderToolbar={count === 2 ? () => <div className="toolbar-example">Custom Toolbar</div> : null}
              >
                <div className="example-window">
                  <h1>{`Window ${count}`}</h1>
                </div>
              </MosaicWindow>
            )}
            zeroStateView={<MosaicZeroState createNode={this.createNode} />}
            value={this.state.currentNode}
            onChange={this.onChange}
            onRelease={this.onRelease}
            className={THEMES[this.state.currentTheme]}
          />
        </div>
      </React.StrictMode>
    );
  }

  onChange = (currentNode) => {
    this.setState({ currentNode });
  };

  onRelease = (currentNode) => {
    console.log('Mosaic.onRelease():', currentNode);
  };

  createNode = () => ++windowCount;
}

export default Home
