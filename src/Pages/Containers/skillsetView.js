import React, { useState } from "react";
import { Button, Flex } from "antd";
import { GoPlus } from "react-icons/go";
import RichTextEditor from "../../Components/RichTextEditor";
import { useDispatch, useSelector } from "react-redux";
import { setSkillsets } from "../../actions";

const styles = {
  addSkillsSection: {
    width: "15vw",
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
  skillsWrapper: {
    margin: "8px 30% 0px 37%",
    paddingLeft: "18px",
    borderRadius: "10px",
  },
  saveAndCancelButtonContainer: { marginLeft: "37%", maxWidth: "600px" },
  cancelButton: {
    fontWeight: "600",
    fontSize: "13px",
    lineHeight: "16px",
    color: "#000",
  },
  saveButton: {
    borderRadius: "50px",
    fontWeight: "700",
    fontSize: "13px",
    lineHeight: "16px",
    color: "#fff",
  },
};

const SkillsetView = () => {
  const dispatch = useDispatch();

  const initialData = useSelector(({ skillsets }) => skillsets.data);

  const [noOfSkills, setNoOfSkills] = useState(1);
  const [skillsData, setSkillsData] = useState([]);
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  const incrementSkills = () => {
    setNoOfSkills(noOfSkills + 1);
  };

  const onCancelPress = () => {
    setNoOfSkills(1);
  };

  const onSavePress = () => {
    setIsSaveClicked(true);
    dispatch(setSkillsets(skillsData));
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
    <>
      {!isSaveClicked && (
        <Flex
          vertical={false}
          justify="flex-end"
          style={styles.saveAndCancelButtonContainer}
        >
          <Button
            type="text"
            onClick={onCancelPress}
            style={styles.cancelButton}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={onSavePress}
            style={styles.saveButton}
          >
            Save
          </Button>
        </Flex>
      )}
      <Flex
        wrap="wrap"
        vertical={false}
        gap={12}
        style={{
          ...styles.skillsWrapper,
          ...{ border: isSaveClicked ? "0px" : "1.2px solid #828282" },
        }}
      >
        {Array(noOfSkills)
          .fill(1)
          .map((i, index) => (
            <div style={{ width: "15vw" }}>
              <RichTextEditor
                skillsData={skillsData}
                setSkillsData={setSkillsData}
                index={index}
              />
            </div>
          ))}
        {!isSaveClicked && <AddSkillEmptyContainer />}
      </Flex>
    </>
  );
};

export default SkillsetView;
