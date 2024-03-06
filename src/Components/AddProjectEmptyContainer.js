import { Button, Flex } from "antd";
import React from "react";
import { GoPlus } from "react-icons/go";

const styles = {
  addSkillsSection: {
    border: "1px solid #DADADA",
    backgroundColor: "#EEEEEE",
    width: "43%",
    margin: "16px",
    height: "24vh",
    borderRadius: "25px",
  },
  buttonContent: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#000",
  },
  buttonContainer: { height: "100%", width: "100%", borderRadius: "25px" },
};

const AddProjectEmptyContainer = ({ incrementProjects = () => {} }) => {
  return (
    <Flex
      className="editor-container"
      align="center"
      justify="center"
      style={styles.addSkillsSection}
    >
      <Button
        type="text"
        style={styles.buttonContainer}
        onClick={incrementProjects}
      >
        <Flex
          vertical
          align="center"
          justify="center"
          style={styles.buttonContent}
        >
          <GoPlus size={16} color="#454545" />
          Add new card
        </Flex>
      </Button>
    </Flex>
  );
};

export default AddProjectEmptyContainer;
