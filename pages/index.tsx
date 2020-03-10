import React from "react";
import { Classes } from "@blueprintjs/core";
// import Head from 'next/head'
import classNames from "classnames";
import {
  Mosaic,
  MosaicNode,
  MosaicWindow,
  MosaicZeroState
} from "react-mosaic-component";

import { CloseAdditionalControlsButton } from "../components/CloseAdditionalControlsButton";

let windowCount = 3;

const additionalControls = React.Children.toArray([
  <CloseAdditionalControlsButton />
]);

const EMPTY_ARRAY: any[] = [];

export interface ExampleAppState {
  currentNode: MosaicNode<number> | null;
}

class Home extends React.PureComponent<{}, ExampleAppState> {
  state: ExampleAppState = {
    currentNode: {
      direction: "row",
      first: 1,
      second: {
        direction: "column",
        first: 2,
        second: 3
      },
      splitPercentage: 40
    }
  };

  render() {
    return (
      <React.StrictMode>
        <div className="react-mosaic-example-app">
          <Mosaic<number>
            renderTile={(count, path) => (
              <MosaicWindow<number>
                additionalControls={
                  count === 3 ? additionalControls : EMPTY_ARRAY
                }
                title={`Window ${count}`}
                createNode={this.createNode}
                path={path}
                onDragStart={() => console.log("MosaicWindow.onDragStart")}
                onDragEnd={type => console.log("MosaicWindow.onDragEnd", type)}
                renderToolbar={
                  count === 2
                    ? () => (
                        <div className="toolbar-example">Custom Toolbar</div>
                      )
                    : null
                }
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
            className={classNames("mosaic-blueprint-theme", Classes.DARK)}
          />
        </div>
      </React.StrictMode>
    );
  }

  private onChange = (currentNode: MosaicNode<number> | null) => {
    this.setState({ currentNode });
  };

  private onRelease = (currentNode: MosaicNode<number> | null) => {
    console.log("Mosaic.onRelease():", currentNode);
  };

  private createNode = () => ++windowCount;
}

export default Home;
