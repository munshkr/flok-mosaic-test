import "../mosaic-base.css";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-darker.css";

import "../main.less";
import "../theme.less";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
