import React from "react";

class Editor extends React.Component {
  render() {
    return (
      <div>
        <textarea
          name="area"
          id="editor"
          cols="30"
          rows="10"
          type="text"
          value={this.props.text}
          onChange={this.props.handleTextChange}
        ></textarea>
      </div>
    );
  }
}

export default Editor;
