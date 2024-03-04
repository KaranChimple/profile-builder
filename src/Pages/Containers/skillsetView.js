import React, { useState } from "react";
import { Button, Flex } from "antd";
import { GoPlus } from "react-icons/go";
import RichTextEditor from "../../Components/RichTextEditor";

const styles = {
  addSkillsSection: {
    width: "25%",
    border: "1px solid #DADADA",
    backgroundColor: "#EEEEEE",
    height: "55.6vh",
  },
  buttonContent: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#000",
    height: "100%",
  },
};

const SkillsetView = () => {
  const [noOfSkills, setNoOfSkills] = useState(1);

  const incrementSkills = () => {
    setNoOfSkills(noOfSkills + 1);
  };

  const AddSkillEmptyContainer = () => {
    return (
      <Flex
        className="editor-container"
        align="center"
        justify="center"
        style={styles.addSkillsSection}
      >
        <Button type="text" style={{ height: "10%" }} onClick={incrementSkills}>
          <Flex
            vertical
            align="center"
            justify="center"
            style={styles.buttonContent}
          >
            <GoPlus size={16} color="#454545" />
            Add skill here
          </Flex>
        </Button>
      </Flex>
    );
  };

  return (
    <div style={{ margin: "84px 0px 0px 37%" }}>
      <Flex wrap="wrap" vertical={false} gap={12}>
        {Array(noOfSkills)
          .fill(1)
          .map((i) => (
            <div style={{ width: "25%" }}>
              <RichTextEditor />
            </div>
          ))}
        <AddSkillEmptyContainer />
      </Flex>
    </div>
  );
};

export default SkillsetView;
