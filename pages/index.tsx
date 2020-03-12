import React from "react";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import { Mosaic, MosaicNode, MosaicWindow } from "react-mosaic-component";
import AdditionalControls from "../components/AdditionalControls";
import TextBuffer from "../components/TextBuffer";
import {
  ExpandButton,
  RemoveButton,
  SplitButton
} from "react-mosaic-component";

const knownTargets = ["default", "tidal", "foxdot", "sclang", "hydra"];
const defaultTarget = knownTargets[0];
const modesByTarget = {
  tidal: "haskell",
  foxdot: "python",
  sclang: "smalltalk",
  hydra: "javascript"
};

const toolbarControls = React.Children.toArray([
  <SplitButton />,
  <ExpandButton />,
  <RemoveButton />
]);

const initialValue: MosaicNode<number> = 1;

let windowCount = 1;

type HomeState = { targets: { [id: number]: string }; windowCount: number };

class Home extends React.PureComponent<{}, HomeState> {
  state: HomeState = {
    windowCount,
    targets: {}
  };

  render() {
    const { targets } = this.state;

    return (
      <React.StrictMode>
        <div className="react-mosaic-example-app">
          <Mosaic<number>
            renderTile={(count, path) => {
              const target = targets[count] || defaultTarget;
              return (
                <MosaicWindow<number>
                  additionalControls={
                    <AdditionalControls
                      knownTargets={knownTargets}
                      target={target}
                      onTargetSelect={(t: string) =>
                        this.handleTargetSelect(count, t)
                      }
                    />
                  }
                  additionalControlButtonText=""
                  toolbarControls={toolbarControls}
                  title={`${target} ${count}`}
                  createNode={this.createNode}
                  path={path}
                >
                  <TextBuffer mode={modesByTarget[target]} />
                </MosaicWindow>
              );
            }}
            onChange={this.handleChange}
            initialValue={initialValue}
            className={classNames("mosaic-blueprint-theme", Classes.DARK)}
          />
        </div>
      </React.StrictMode>
    );
  }

  private handleChange = (currentNode: MosaicNode<number> | null) => {
    console.log("onChange:", currentNode);
  };

  private handleTargetSelect = (count: number, target: string) => {
    console.log(`[${count}] Select target:`, target);
    this.setState(prevState => ({
      targets: { ...prevState.targets, [count]: target }
    }));
  };

  private createNode = () => ++windowCount;
}

export default Home;
