import React from "react";
import {CKEditor} from "ckeditor4-react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
    // CKEditor.editorUrl =
    //   "https://cdn.ckeditor.com/4.16.0/standard-all/ckeditor.js";
  }

  onEditorChange = (e) => {
    this.setState({
      data: e.editor.getData()
    });
  };

  render() {
    return (
      <div className="App">
        <CKEditor
          data={this.state.data}
          onChange={this.onEditorChange}
          config={{
            extraPlugins: "ckeditor_wiris",
            removePlugins:
              "filetools,uploadwidget,uploadfile",
            allowedContent: true
          }}
          onBeforeLoad={(CKEDITOR) => {
            CKEDITOR.plugins.addExternal(
              "ckeditor_wiris",
              "/mathtype-ckeditor4/",
              "plugin.js"
            );
          }}
        />

        <div className="editor-preview">
          <h2>Rendered content</h2>
          <div dangerouslySetInnerHTML={{ __html: this.state.data }}></div>
        </div>
      </div>
    );
  }
}

export default App;
