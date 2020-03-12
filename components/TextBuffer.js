import { UnControlled as CodeMirror } from "react-codemirror2";
import dynamic from "next/dynamic";

// Modes used by known REPLs

if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  import("codemirror/mode/javascript/javascript");
  import("codemirror/mode/python/python");
  import("codemirror/mode/haskell/haskell");
  import("codemirror/mode/smalltalk/smalltalk");
}

class TextBuffer extends React.Component {
  state = {
    value: ""
  };

  render() {
    const { mode } = this.props;
    const { value } = this.state;
    const options = {
      mode,
      theme: "material-darker",
      lineNumbers: false
    };

    return (
      <React.Fragment>
        <CodeMirror className="buffer" value={value} options={options} />
        <style jsx global>{`
          .CodeMirror {
            font-family: Monaco, monospace;
            font-size: 14px;
            height: 100vh;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default TextBuffer;
