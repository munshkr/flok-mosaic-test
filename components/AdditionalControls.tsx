import React from "react";
import { MosaicWindowContext } from "react-mosaic-component";

type AdditionalControlsProps = {
  knownTargets?: string[];
  target?: string;
  onTargetSelect?: Function;
};

export default class AdditionalControls extends React.PureComponent<
  AdditionalControlsProps
> {
  static contextType = MosaicWindowContext;
  context!: MosaicWindowContext;

  private handleTargetSelect = event => {
    const { onTargetSelect } = this.props;
    onTargetSelect(event.target.value);
    this.closeParent();
  };

  private closeParent = () => {
    this.context.mosaicWindowActions.setAdditionalControlsOpen(false);
  };

  render() {
    const { knownTargets, target } = this.props;

    return (
      <div>
        <select
          value={target || knownTargets[0]}
          onChange={this.handleTargetSelect}
        >
          {knownTargets.map(target => (
            <option key={target} value={target}>
              {target}
            </option>
          ))}
        </select>
        <button onClick={this.closeParent}>Close</button>
      </div>
    );
  }
}
