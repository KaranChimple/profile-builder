import { Button, Flex, Input } from "antd";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { RiGalleryLine } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";

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
  linksHeader: { fontWeight: "600", fontSize: "30px", lineHeight: "28px" },
  linksDescription: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "30px",
    resize: "none",
    overflow: "hidden",
    minHeight: window.innerHeight / 13,
  },
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
    padding: "12px",
    border: "1px dashed #AEAEAE",
    borderRadius: "5px",
    backgroundColor: "#EFEFEF",
    width: "18%",
  },
  projectContainer: {
    width: "45%",
    backgroundColor: "#ffffff",
    border: "1px solid #DADADA",
    borderRadius: "25px",
    margin: "16px 0 16px 16px",
  },
  addSkillsSection: {
    border: "1px solid #DADADA",
    backgroundColor: "#EEEEEE",
    width: "43%",
    margin: "16px",
    height: "20vh",
    borderRadius: "25px",
  },
  buttonContent: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#000",
  },
  letsConnectContainer: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "30px",
    color: "#000",
  },
};

const { TextArea } = Input;

const CtaView = () => {
  const [noOfBlogs, setNoOfBlogs] = useState(1);

  const incrementBlogs = () => {
    setNoOfBlogs(noOfBlogs + 1);
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
          style={{ height: "100%", width: "100%", borderRadius: "25px" }}
          onClick={incrementBlogs}
        >
          <Flex
            vertical
            align="center"
            justify="center"
            style={styles.buttonContent}
          >
            <GoPlus size={16} color="#454545" />
            Add next
          </Flex>
        </Button>
      </Flex>
    );
  };

  return (
    <>
      <div
        className="editor-container"
        style={{ marginLeft: "37%", marginTop: "2%" }}
      >
        <h1 style={styles.heading}>Blogs & Resources</h1>
        <TextArea
          placeholder="Add subtext here"
          variant="borderless"
          maxLength={256}
          style={styles.description}
        />
        <Flex wrap="wrap" vertical={false} gap={12}>
          {Array(noOfBlogs)
            .fill(1)
            .map((i) => (
              <div style={styles.projectContainer}>
                <Flex
                  align="center"
                  justify="center"
                  style={styles.gallerySmallIconContainer}
                >
                  <RiGalleryLine size={16} />
                </Flex>
                <Input
                  placeholder="Enter title here..."
                  variant="borderless"
                  maxLength={256}
                  style={styles.titleInput}
                />
                <Button type="link" style={{ marginBottom: "36px" }}>
                  <IoIosLink
                    size={"10px"}
                    color="#0085FF"
                    style={{ marginRight: "4px" }}
                  />
                  Add Link
                </Button>
              </div>
            ))}
          <AddProjectEmptyContainer />
        </Flex>
      </div>
      <div
        className="editor-container"
        style={{ marginLeft: "37%", marginTop: "2%" }}
      >
        <Input
          placeholder="Enter title here..."
          variant="borderless"
          maxLength={256}
          style={styles.linksHeader}
        />
        <TextArea
          placeholder="Add subtext here"
          variant="borderless"
          maxLength={256}
          style={styles.linksDescription}
        />
        <Flex
          vertical={false}
          align="center"
          gap={12}
          style={styles.letsConnectContainer}
        >
          <Flex
            align="center"
            justify="center"
            style={{ ...styles.gallerySmallIconContainer, ...{ width: "8%" } }}
          >
            <RiGalleryLine size={16} />
          </Flex>
          Let's connect
        </Flex>
      </div>
    </>
  );
};

export default CtaView;
