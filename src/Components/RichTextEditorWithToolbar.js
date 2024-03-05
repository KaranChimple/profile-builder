import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import ToolbarPlugin from "../Plugins/ToolbarPlugin";
import LexicalTheme from "../utils/lexicalTheme";

const styles = {
  aboutMeHeader: { padding: "8px 0 8px 16px" },
};

const RichTextEditorWithToolbar = ({
  aboutMeJsonData = {},
  isSaveClicked = false,
  setAboutMeJsonData = () => {},
}) => {
  const CustomPlaceholder = () => {
    return <div className="editor-placeholder">Start writing...</div>;
  };

  const editorConfig = {
    // The editor theme
    theme: LexicalTheme,
    // set the initial content
    editorState: aboutMeJsonData,
    // Handling of errors during update
    onError(error) {
      throw error;
    },
    // Any custom nodes go here
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
    ],
  };

  function onChange(editorState) {
    editorState.read(() => {
      const json = editorState.toJSON();
      setAboutMeJsonData(json);
    });
  }

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div
        className="editor-container"
        style={{
          marginLeft: "37%",
          border: isSaveClicked ? "0px" : "1.2px solid #828282",
        }}
      >
        <h1 style={styles.aboutMeHeader}>About Me</h1>
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="editor-input"
                style={{ maxHeight: "38vh", overflow: "hidden" }}
              />
            }
            placeholder={<CustomPlaceholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <ListPlugin />
          <OnChangePlugin onChange={onChange} />
        </div>
      </div>
    </LexicalComposer>
  );
};

export default RichTextEditorWithToolbar;
