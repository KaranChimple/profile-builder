import { Image, Input } from "antd";
import React, { useRef, useState } from "react";
import { IoIosLink } from "react-icons/io";
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
  gallerySmallIconContainer: {
    margin: "16px",
    padding: "12px 8px",
    border: "1px dashed #AEAEAE",
    borderRadius: "5px",
    backgroundColor: "#EFEFEF",
    width: "20%",
  },
  projectContainer: {
    width: "45%",
    backgroundColor: "#ffffff",
    border: "1px solid #DADADA",
    borderRadius: "25px",
    margin: "16px 0 16px 16px",
  },
  imageView: { padding: "0px", border: "0px", width: "36px", height: "36px" },
};

const { TextArea } = Input;

const ProjectContainer = ({
  index = 0,
  projectsData = [],
  setProjectsData = () => {},
}) => {
  const imageFile = useRef(null);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    const userProjects = projectsData;
    if (userProjects.length > 0) {
      userProjects[index] = {
        ...userProjects[index],
        image: e.target.files[0],
      };
    } else {
      userProjects.push({
        image: e.target.files[0],
      });
    }
    setProjectsData([...userProjects]);
  };

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    imageFile.current.click();
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    const userProjects = projectsData;
    if (userProjects.length > 0) {
      userProjects[index] = {
        ...userProjects[index],
        title: e.target.value,
      };
    } else {
      userProjects.push({
        title: e.target.value,
      });
    }
    setProjectsData([...userProjects]);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
    const userProjects = projectsData;
    if (userProjects.length > 0) {
      userProjects[index] = {
        ...userProjects[index],
        description: e.target.value,
      };
    } else {
      userProjects.push({
        description: e.target.value,
      });
    }
    setProjectsData([...userProjects]);
  };

  const onLinkChange = (e) => {
    setLink(e.target.value);
    const userProjects = projectsData;
    if (userProjects.length > 0) {
      userProjects[index] = {
        ...userProjects[index],
        link: e.target.value,
      };
    } else {
      userProjects.push({
        link: e.target.value,
      });
    }
    setProjectsData([...userProjects]);
  };

  return (
    <div style={styles.projectContainer}>
      <input
        type="file"
        id={`project-image-${index}`}
        ref={imageFile}
        onChange={handleChange}
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
          onClick={onButtonClick}
          style={styles.gallerySmallIconContainer}
        >
          <RiGalleryLine size={16} />
        </button>
      )}
      <Input
        placeholder="Enter Project title"
        variant="borderless"
        value={title}
        onChange={onTitleChange}
        maxLength={256}
        style={styles.titleInput}
      />
      <Input
        placeholder="Add Link"
        variant="borderless"
        value={link}
        onChange={onLinkChange}
        maxLength={128}
        prefix={
          <IoIosLink
            size={"10px"}
            color="#0085FF"
            style={{ marginRight: "4px" }}
          />
        }
      />
      <TextArea
        placeholder="Add Description"
        variant="borderless"
        value={description}
        onChange={onDescriptionChange}
        maxLength={256}
        style={styles.descriptionInput}
      />
    </div>
  );
};

export default ProjectContainer;
