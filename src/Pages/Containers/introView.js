import React from "react";
import { Flex, Input, Button } from "antd";
import { RiGalleryLine } from "react-icons/ri";

const styles = {
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
    maxHeight: window.innerHeight / 3,
  },
  subTitleInput: { fontWeight: "500", fontSize: "18px", lineHeight: "28px" },
  nameInput: { fontWeight: "600", fontSize: "16px", lineHeight: "19px" },
  emailInput: { fontWeight: "400", fontSize: "14px", lineHeight: "17px" },
  addSectionsButton: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    marginTop: "216px",
    backgroundColor: "#EEEEEE",
  },
};

const { TextArea } = Input;

const IntroView = () => {
  return (
    <div style={{ minHeight: window.innerHeight, padding: "24px 32px" }}>
      <Flex vertical={false} gap={12} align="center">
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
          <RiGalleryLine size={54} />
        </div>
        <Flex vertical gap={12}>
          <TextArea
            placeholder="Click to add title"
            variant="borderless"
            maxLength={256}
            style={styles.centerTitleInput}
          />
          <Input
            placeholder="Click to add subtitle"
            variant="borderless"
            maxLength={256}
            style={styles.subTitleInput}
          />
        </Flex>
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
      <Button type="dashed" block style={styles.addSectionsButton}>
        + Add sections
      </Button>
    </div>
  );
};

export default IntroView;
