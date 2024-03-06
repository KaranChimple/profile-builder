import { Flex, Image, Input } from "antd";
import React, { useRef, useState } from "react";
import { RiGalleryLine } from "react-icons/ri";

const styles = {
  titleInput: { fontWeight: "500", fontSize: "16px", lineHeight: "28px" },
  descriptionInput: {
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "28px",
    marginBottom: "16px",
    maxHeight: "55px",
    resize: "none",
    overflow: "hidden",
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
  imageView: { padding: "0px", border: "0px", width: "36px", height: "36px" },
};

const ExperienceContainer = ({
  index = 0,
  setExperienceData = () => {},
  experienceData = [],
  areInputsDisabled = false,
}) => {
  const imageFile = useRef(null);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");

  const onChange = (e, fieldName) => {
    const userExperiences = experienceData;
    switch (fieldName) {
      case "title":
        setTitle(e.target.value);
        if (userExperiences.length > 0) {
          userExperiences[index] = {
            ...userExperiences[index],
            title: e.target.value,
          };
        } else {
          userExperiences.push({
            title: e.target.value,
          });
        }
        break;
      case "designation":
        setDesignation(e.target.value);
        if (userExperiences.length > 0) {
          userExperiences[index] = {
            ...userExperiences[index],
            designation: e.target.value,
          };
        } else {
          userExperiences.push({
            designation: e.target.value,
          });
        }
        break;
      case "timeline":
        setTimeline(e.target.value);
        if (userExperiences.length > 0) {
          userExperiences[index] = {
            ...userExperiences[index],
            timeline: e.target.value,
          };
        } else {
          userExperiences.push({
            timeline: e.target.value,
          });
        }
        break;
      case "description":
        setDescription(e.target.value);
        if (userExperiences.length > 0) {
          userExperiences[index] = {
            ...userExperiences[index],
            description: e.target.value,
          };
        } else {
          userExperiences.push({
            description: e.target.value,
          });
        }
        break;
      case "location":
        setLocation(e.target.value);
        if (userExperiences.length > 0) {
          userExperiences[index] = {
            ...userExperiences[index],
            location: e.target.value,
          };
        } else {
          userExperiences.push({
            location: e.target.value,
          });
        }
        break;
      case "image":
        setImage(URL.createObjectURL(e.target.files[0]));
        if (userExperiences.length > 0) {
          userExperiences[index] = {
            ...userExperiences[index],
            image: e.target.files[0],
          };
        } else {
          userExperiences.push({
            image: e.target.files[0],
          });
        }
        break;
      default:
        console.log("Incorrect field pressed");
    }
    setExperienceData([...userExperiences]);
  };

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    imageFile.current.click();
  };

  return (
    <div style={styles.projectContainer}>
      <Flex vertical={false}>
        <input
          type="file"
          id={`experience-image-${index}`}
          ref={imageFile}
          onChange={(e) => onChange(e, "image")}
          style={{ display: "none" }}
        />
        {image ? (
          <Image
            src={image}
            preview={false}
            style={{
              ...styles.gallerySmallIconContainer,
              ...styles.imageView,
            }}
          />
        ) : (
          <button
            disabled={areInputsDisabled}
            onClick={onButtonClick}
            style={styles.gallerySmallIconContainer}
          >
            <RiGalleryLine size={16} />
          </button>
        )}

        <div>
          <Input
            placeholder="Enter Company title"
            variant="borderless"
            disabled={areInputsDisabled}
            value={title}
            onChange={(e) => onChange(e, "title")}
            maxLength={256}
            style={styles.titleInput}
          />
          <Input
            placeholder="Enter Designation"
            variant="borderless"
            disabled={areInputsDisabled}
            value={designation}
            onChange={(e) => onChange(e, "designation")}
            maxLength={256}
            style={styles.descriptionInput}
          />
        </div>
      </Flex>

      <Flex vertical={false}>
        <Input
          placeholder="+ Add location"
          variant="borderless"
          disabled={areInputsDisabled}
          value={location}
          onChange={(e) => onChange(e, "location")}
          maxLength={256}
          style={styles.otherDetailsInput}
        />
        <Input
          placeholder="+ Add timeline"
          variant="borderless"
          disabled={areInputsDisabled}
          value={timeline}
          onChange={(e) => onChange(e, "timeline")}
          maxLength={256}
          style={styles.otherDetailsInput}
        />
      </Flex>

      <Input.TextArea
        placeholder="Add Description"
        variant="borderless"
        disabled={areInputsDisabled}
        value={description}
        onChange={(e) => onChange(e, "description")}
        maxLength={256}
        style={styles.descriptionInput}
      />
    </div>
  );
};

export default ExperienceContainer;
