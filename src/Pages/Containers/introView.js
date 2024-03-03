import React from "react";
import { Flex, Input } from "antd";
import { RiGalleryLine } from "react-icons/ri";

const styles = {
  parentContainer: {
    minHeight: window.innerHeight / 1.3,
    padding: "0px 32px 24px 32px",
  },
  gallerySmallIconContainer: {
    padding: "4px",
    border: "1px dashed #AEAEAE",
    borderRadius: "5px",
    backgroundColor: "#EFEFEF",
  },
  galleryBigIconContainer: {
    padding: "84px",
    border: "2px dashed #AEAEAE",
    borderRadius: "25px",
    backgroundColor: "#EFEFEF",
  },
  titleInput: { fontWeight: "500", fontSize: "16px", lineHeight: "28px" },
  centerTitleInput: {
    fontWeight: "400",
    fontSize: "70px",
    lineHeight: "84px",
    resize: "none",
    overflow: "hidden",
    maxHeight: window.innerHeight / 1.5,
    minHeight: window.innerHeight / 3.8,
  },
  subTitleInput: {
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "28px",
    resize: "none",
    overflow: "hidden",
    maxHeight: window.innerHeight / 8,
  },
  nameInput: { fontWeight: "600", fontSize: "16px", lineHeight: "19px" },
  emailInput: { fontWeight: "400", fontSize: "14px", lineHeight: "17px" },
};

const { TextArea } = Input;

const LeftSection = () => {
  return (
    <div style={{ minWidth: "35%" }}>
      <Flex
        vertical={false}
        gap={12}
        align="center"
        style={{ marginTop: "12px" }}
      >
        <div style={styles.gallerySmallIconContainer}>
          <RiGalleryLine size={16} />
        </div>
        <Input
          placeholder="Enter site title"
          variant="borderless"
          maxLength={256}
          style={styles.titleInput}
        />
      </Flex>
      <Flex
        vertical={false}
        gap={108}
        align="center"
        style={{ marginTop: window.innerHeight / 5 }}
      >
        <div style={styles.galleryBigIconContainer}>
          <RiGalleryLine size={window.innerHeight / 3.5} />
        </div>
      </Flex>
      <Flex vertical gap={12} style={{ marginTop: "40px" }}>
        <Input
          placeholder="Your name here"
          variant="borderless"
          maxLength={256}
          style={styles.nameInput}
        />
        <Input
          placeholder="Enter email"
          variant="borderless"
          maxLength={256}
          style={styles.emailInput}
        />
      </Flex>
    </div>
  );
};

const RightSection = () => {
  return (
    <>
      <Flex vertical gap={12}>
        <TextArea
          placeholder="Click to add title"
          variant="borderless"
          maxLength={256}
          style={styles.centerTitleInput}
        />
        <TextArea
          placeholder="Click to add subtitle"
          variant="borderless"
          maxLength={256}
          style={styles.subTitleInput}
        />
      </Flex>
    </>
  );
};

const IntroView = () => {
  return (
    <Flex
      vertical={false}
      gap={12}
      align="center"
      style={styles.parentContainer}
    >
      <LeftSection />
      <RightSection />
    </Flex>
  );
};

export default IntroView;
