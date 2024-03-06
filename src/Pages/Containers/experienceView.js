import { Button, Flex, Input } from "antd";
import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { setExperience } from "../../actions";
import ExperienceContainer from "../../Components/ExperienceContainer";
import { useDispatch, useSelector } from "react-redux";
import SaveAndCancelButtonContainer from "../../Components/SaveAndCancelContainer";

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
  const dispatch = useDispatch();

  const initialData = useSelector(({ experience }) => experience.data);

  const [noOfExperiences, setNoOfExperiences] = useState(1);
  const [description, setDescription] = useState("");
  const [experienceData, setExperienceData] = useState([]);
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  useEffect(() => {
    if (
      !!initialData?.description ||
      (initialData?.experience || []).length > 0
    ) {
      setDescription(initialData?.description || "");
      setNoOfExperiences((initialData?.experience || []).length);
      setExperienceData(initialData?.experience || []);
    }
  }, [initialData]);

  const incrementExperiences = () => {
    setNoOfExperiences(noOfExperiences + 1);
  };

  const onCancelPress = () => {
    setNoOfExperiences(1);
  };

  const onSavePress = () => {
    setIsSaveClicked(true);
    dispatch(
      setExperience({
        description,
        experience: experienceData,
      })
    );
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
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
    <>
      <SaveAndCancelButtonContainer
        isSaveClicked={isSaveClicked}
        onCancelPress={onCancelPress}
        onSavePress={onSavePress}
      />
      <div
        className="editor-container"
        style={{
          marginLeft: "37%",
          border: isSaveClicked ? "0px" : "1.2px solid #828282",
        }}
      >
        <h1 style={styles.heading}>Experience</h1>
        <TextArea
          placeholder="Add subtext here"
          variant="borderless"
          value={description}
          onChange={onDescriptionChange}
          maxLength={256}
          style={styles.description}
        />
        <Flex wrap="wrap" vertical gap={12}>
          {Array(noOfExperiences)
            .fill(1)
            .map((i, index) => (
              <ExperienceContainer
                index={index}
                setExperienceData={setExperienceData}
                experienceData={experienceData}
              />
            ))}
          {!isSaveClicked && <AddProjectEmptyContainer />}
        </Flex>
      </div>
    </>
  );
};

export default ExperienceView;
