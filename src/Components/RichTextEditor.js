import React, { useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { Input, Flex } from "antd";
import { EMPTY_CONTENT } from "../utils/constants";

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
  header: {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "28px",
    marginTop: "8px",
  },
};

const { TextArea } = Input;

const RichTextEditor = ({
  skillsData = [],
  setSkillsData = () => {},
  index = 0,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState(EMPTY_CONTENT);

  const CustomPlaceholder = () => {
    return (
      <div className="editor-placeholder-without-toolbar">Start writing...</div>
    );
  };

  const editorConfig = {
    // set the initial content
    editorState: summary,
    onError(error) {
      throw error;
    },
  };

  const onChange = (editorState) => {
    editorState.read(() => {
      const json = editorState.toJSON();
      setSummary(json);
      const usersSkills = skillsData;
      if (skillsData.length > 0) {
        usersSkills[index] = { ...usersSkills[index], summary: json };
      } else {
        usersSkills.push({
          summary: json,
        });
      }
      setSkillsData([...usersSkills]);
    });
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    const usersSkills = skillsData;
    if (skillsData.length > 0) {
      usersSkills[index] = { ...usersSkills[index], title: e.target.value };
    } else {
      usersSkills.push({
        title: e.target.value,
      });
    }
    setSkillsData([...usersSkills]);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
    const usersSkills = skillsData;
    if (skillsData.length > 0) {
      usersSkills[index] = {
        ...usersSkills[index],
        description: e.target.value,
      };
    } else {
      usersSkills.push({
        description: e.target.value,
      });
    }
    setSkillsData([...usersSkills]);
  };

  return (
    <div className="editor-container" style={{ width: "100%", border: "0px" }}>
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-inner-with-header">
          <Flex vertical gap={12}>
            <Input
              placeholder="Untitled"
              variant="borderless"
              value={title}
              onChange={onTitleChange}
              maxLength={256}
              style={styles.header}
            />
            <TextArea
              placeholder="Write description here..."
              variant="borderless"
              value={description}
              onChange={onDescriptionChange}
              maxLength={256}
              style={styles.description}
            />
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
              <OnChangePlugin onChange={onChange} />
            </div>
          </Flex>
        </div>
      </LexicalComposer>
    </div>
  );
};

export default RichTextEditor;
