// import classNames from "classnames";
import React from "react";

import { MosaicWindowContext } from "react-mosaic-component";

export class CloseAdditionalControlsButton extends React.PureComponent {
  static contextType = MosaicWindowContext;
  context!: MosaicWindowContext;

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.context.mosaicWindowActions.setAdditionalControlsOpen(false)
          }
        >
          Proof of Concept Button!
        </button>
      </div>
    );
  }
}
