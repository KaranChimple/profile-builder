import { Flex, Image, Input } from "antd";
import React, { useRef } from "react";
import { RiGalleryLine } from "react-icons/ri";

const styles = {
  linksHeader: { fontWeight: "600", fontSize: "30px", lineHeight: "28px" },
  linksDescription: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "30px",
    resize: "none",
    overflow: "hidden",
    minHeight: window.innerHeight / 13,
  },
  letsConnectContainer: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "30px",
    color: "#000",
  },
  gallerySmallIconContainer: {
    margin: "16px",
    padding: "12px",
    border: "1px dashed #AEAEAE",
    borderRadius: "5px",
    backgroundColor: "#EFEFEF",
    width: "18%",
  },
  imageView: { padding: "0px", border: "0px", width: "36px", height: "36px" },
};

const ContactContainer = ({
  contactTitle = "",
  setContactTitle = () => {},
  contactDescription = "",
  setContactDescription = () => {},
  contactImage = "",
  setContactimage = () => {},
  isSaveClicked = false,
  areInputsDisabled = false,
}) => {
  const imageFile = useRef(null);

  const onChange = (e, fieldName) => {
    switch (fieldName) {
      case "title":
        setContactTitle(e.target.value);
        break;
      case "description":
        setContactDescription(e.target.value);
        break;
      case "image":
        setContactimage(URL.createObjectURL(e.target.files[0]));
        break;
      default:
        console.log("Incorrect field pressed");
    }
  };

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    imageFile.current.click();
  };

  return (
    <div
      className="editor-container"
      style={{
        marginLeft: "37%",
        marginTop: "2%",
        border: isSaveClicked ? "0px" : "1.2px solid #828282",
      }}
    >
      <Input
        placeholder="Enter title here..."
        variant="borderless"
        disabled={areInputsDisabled}
        value={contactTitle}
        onChange={(e) => onChange(e, "title")}
        maxLength={256}
        style={styles.linksHeader}
      />
      <Input.TextArea
        placeholder="Add subtext here"
        variant="borderless"
        disabled={areInputsDisabled}
        value={contactDescription}
        onChange={(e) => onChange(e, "description")}
        maxLength={256}
        style={styles.linksDescription}
      />
      <Flex
        vertical={false}
        align="center"
        gap={12}
        style={styles.letsConnectContainer}
      >
        <input
          type="file"
          id={"contact-image"}
          ref={imageFile}
          onChange={(e) => onChange(e, "image")}
          style={{ display: "none" }}
        />
        {contactImage ? (
          <Image
            src={contactImage}
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
            style={{ ...styles.gallerySmallIconContainer, ...{ width: "8%" } }}
          >
            <RiGalleryLine size={16} />
          </button>
        )}
        Let's connect
      </Flex>
    </div>
  );
};

export default ContactContainer;
