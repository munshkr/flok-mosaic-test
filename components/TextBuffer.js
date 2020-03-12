import { UnControlled as CodeMirror } from "react-codemirror2";

class TextBuffer extends React.Component {
  state = {
    value: ""
  };

  render() {
    const options = {
      theme: "material",
      lineNumbers: true
    };
    const { value } = this.state;

    return (
      <React.Fragment>
        <CodeMirror className="buffer" value={value} options={options} />
        <style jsx global>{`
          .CodeMirror {
            font-family: Monaco, monospace;
            font-size: 14px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default TextBuffer;
