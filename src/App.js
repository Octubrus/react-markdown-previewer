import React from "react";
import "./App.css";
import Editor from "./editor.jsx";
import Preview from "./preview.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Editor
            text={this.state.text}
            handleTextChange={this.handleTextChange}
          />
          <Preview text={this.state.text} />
        </header>
      </div>
    );
  }
}

const defaultText = `# React

## Markdown
### Previewer
  
You can write code like so: \`<div></div>\`

\`\`\`
// or even multiline code...

handleTextChange(event) {
  this.setState({
    text: event.target.value
  });
}
\`\`\`
  
Text can be **bold**, _italic_ or both **_both!_**

~~nevermind that~~

[FreeCodeCamp](https://www.freecodecamp.com)
> Made me do it

Header 1 | Header 2 | Header 3
------------ | ------------- | ------------- 
I | am | Weasel
Cow | and | Chicken?

- list 1
  - list 2
     - list 3


7. a 
7. numbered
7. list

![](https://goo.gl/Umyytc)
    `;

export default App;
