import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { Input, Flex } from "antd";

const styles = {
  aboutMeHeader: { padding: "8px 0 8px 16px" },
  description: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
    resize: "none",
    overflow: "hidden",
    minHeight: window.innerHeight / 13,
  },
};

const { TextArea } = Input;

const RichTextEditor = () => {
  const CustomPlaceholder = () => {
    return (
      <div className="editor-placeholder-without-toolbar">Start writing...</div>
    );
  };

  const editorConfig = {
    onError(error) {
      throw error;
    },
  };

  return (
    <div className="editor-container" style={{ width: "100%" }}>
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-inner-with-header">
          <Flex vertical gap={12}>
            <Input
              placeholder="Enter site title"
              variant="borderless"
              maxLength={256}
            />
            <TextArea
              placeholder="Enter site title"
              variant="borderless"
              maxLength={256}
              style={styles.description}
            />
            <div className="editor-inner">
              <RichTextPlugin
                contentEditable={<ContentEditable className="editor-input" />}
                placeholder={<CustomPlaceholder />}
                ErrorBoundary={LexicalErrorBoundary}
              />
            </div>
          </Flex>
        </div>
      </LexicalComposer>
    </div>
  );
};

export default RichTextEditor;
