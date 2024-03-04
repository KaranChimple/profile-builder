import { Button, Flex, Input } from "antd";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { RiGalleryLine } from "react-icons/ri";

const styles = {
  heading: { padding: "8px 0 8px 16px" },
  description: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
    resize: "none",
    overflow: "hidden",
    minHeight: window.innerHeight / 13,
  },
  titleInput: { fontWeight: "500", fontSize: "16px", lineHeight: "28px" },
  descriptionInput: {
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "28px",
    marginBottom: "16px",
    maxHeight: "55px",
  },
  otherDetailsInput: {
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "24px",
    marginBottom: "16px",
    maxHeight: "55px",
    minWidth: "20%",
    maxWidth: "42%",
  },
  gallerySmallIconContainer: {
    margin: "16px",
    padding: "12px",
    border: "1px dashed #AEAEAE",
    borderRadius: "5px",
    backgroundColor: "#EFEFEF",
    height: "30%",
  },
  projectContainer: {
    backgroundColor: "#ffffff",
    border: "1px solid #DADADA",
    borderRadius: "25px",
    margin: "16px",
  },
  addSkillsSection: {
    border: "1px solid #DADADA",
    backgroundColor: "#EEEEEE",
    margin: "16px",
    borderRadius: "15px",
  },
  buttonContent: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#000",
  },
  addCardButton: { height: "100%", width: "100%", borderRadius: "15px" },
};

const { TextArea } = Input;

const ExperienceView = () => {
  const [noOfExperiences, setNoOfExperiences] = useState(1);

  const incrementExperiences = () => {
    setNoOfExperiences(noOfExperiences + 1);
  };

  const AddProjectEmptyContainer = () => {
    return (
      <Flex
        className="editor-container"
        align="center"
        justify="center"
        style={styles.addSkillsSection}
      >
        <Button
          type="text"
          style={styles.addCardButton}
          onClick={incrementExperiences}
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

  return (
    <div className="editor-container" style={{ marginLeft: "37%" }}>
      <h1 style={styles.heading}>Experience</h1>
      <TextArea
        placeholder="Add subtext here"
        variant="borderless"
        maxLength={256}
        style={styles.description}
      />
      <Flex wrap="wrap" vertical gap={12}>
        {Array(noOfExperiences)
          .fill(1)
          .map((i) => (
            <div style={styles.projectContainer}>
              <Flex vertical={false}>
                <Flex style={styles.gallerySmallIconContainer}>
                  <RiGalleryLine size={16} />
                </Flex>

                <div>
                  <Input
                    placeholder="Enter Company title"
                    variant="borderless"
                    maxLength={256}
                    style={styles.titleInput}
                  />
                  <Input
                    placeholder="Enter Designation"
                    variant="borderless"
                    maxLength={256}
                    style={styles.descriptionInput}
                  />
                </div>
              </Flex>

              <Flex vertical={false}>
                <Input
                  placeholder="+ Add location"
                  variant="borderless"
                  maxLength={256}
                  style={styles.otherDetailsInput}
                />
                <Input
                  placeholder="+ Add timeline"
                  variant="borderless"
                  maxLength={256}
                  style={styles.otherDetailsInput}
                />
              </Flex>

              <TextArea
                placeholder="Add Description"
                variant="borderless"
                maxLength={256}
                style={styles.descriptionInput}
              />
            </div>
          ))}
        <AddProjectEmptyContainer />
      </Flex>
    </div>
  );
};

export default ExperienceView;
