import React from "react";
import marked from "marked";

class Preview extends React.Component {

  createMarkdownText() {
    const markedText = marked(this.props.text, {sanitize: true});
    return { __html: markedText };
  }
  
  render() {
    return <div id="preview" dangerouslySetInnerHTML={this.createMarkdownText()} />;
  }
}

export default Preview;
