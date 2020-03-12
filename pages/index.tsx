import React from "react";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import { Mosaic, MosaicNode, MosaicWindow } from "react-mosaic-component";
import { CloseAdditionalControlsButton } from "../components/CloseAdditionalControlsButton";
import TextBuffer from "../components/TextBuffer";

let windowCount = 3;

const additionalControls = React.Children.toArray([
  <CloseAdditionalControlsButton />
]);

const initialValue: MosaicNode<number> = {
  direction: "row",
  first: 1,
  second: {
    direction: "column",
    first: 2,
    second: 3
  },
  splitPercentage: 40
};

class Home extends React.PureComponent<{}, { windowCount: number }> {
  render() {
    return (
      <React.StrictMode>
        <div className="react-mosaic-example-app">
          <Mosaic<number>
            renderTile={(count, path) => (
              <MosaicWindow<number>
                additionalControls={additionalControls}
                title={`Window ${count}`}
                createNode={this.createNode}
                path={path}
                renderToolbar={
                  count === 2
                    ? () => (
                        <div className="toolbar-example">Custom Toolbar</div>
                      )
                    : null
                }
              >
                <TextBuffer editorId={`editor-${count}`} />
              </MosaicWindow>
            )}
            initialValue={initialValue}
            className={classNames("mosaic-blueprint-theme", Classes.DARK)}
          />
        </div>
      </React.StrictMode>
    );
  }

  private createNode = () => ++windowCount;
}

export default Home;
