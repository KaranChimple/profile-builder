import { Button, Flex, Input } from "antd";
import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import BlogsContainer from "../../Components/BlogsContainer";
import ContactContainer from "../../Components/ContactContainer";
import SaveAndCancelButtonContainer from "../../Components/SaveAndCancelContainer";
import { setCta } from "../../actions";

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
  descriptionInput: {
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "28px",
    marginBottom: "16px",
    maxHeight: "55px",
    resize: "none",
    overflow: "hidden",
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
};

const { TextArea } = Input;

const CtaView = ({ isAppPublished = false }) => {
  const dispatch = useDispatch();

  const initialData = useSelector(({ cta }) => cta.data);

  const [noOfBlogs, setNoOfBlogs] = useState(1);
  const [description, setDescription] = useState("");
  const [contactTitle, setContactTitle] = useState("");
  const [contactDescription, setContactDescription] = useState("");
  const [contactImage, setContactimage] = useState("");
  const [blogsData, setBlogsData] = useState([]);
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [areInputsDisabled, setAreInputsDisabled] = useState(false);

  useEffect(() => {
    if (
      !!initialData?.description ||
      (initialData?.blogs || []).length > 0 ||
      Object.keys(initialData?.contactDetails || {}).length > 0
    ) {
      setDescription(initialData?.description || "");
      setNoOfBlogs((initialData?.blogs || []).length);
      setBlogsData(initialData?.blogs || []);
      setContactTitle(initialData?.contactDetails?.title || "");
      setContactDescription(initialData?.contactDetails?.description || "");
      setContactimage(initialData?.contactDetails?.image || "");
    }
  }, [initialData]);

  useEffect(() => {
    if (isAppPublished) {
      onSavePress();
    }
    // eslint-disable-next-line
  }, [isAppPublished]);

  const incrementBlogs = () => {
    setNoOfBlogs(noOfBlogs + 1);
  };

  const onCancelPress = () => {
    setNoOfBlogs(1);
  };

  const onSavePress = () => {
    setIsSaveClicked(true);
    dispatch(
      setCta({
        description,
        blogs: blogsData,
        contactDetails: {
          image: contactImage,
          title: contactTitle,
          description: contactDescription,
        },
      })
    );
    setAreInputsDisabled(true);
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
        <h1 style={styles.heading}>Blogs & Resources</h1>
        <TextArea
          placeholder="Add subtext here"
          variant="borderless"
          disabled={areInputsDisabled}
          value={description}
          onChange={onDescriptionChange}
          maxLength={256}
          style={styles.description}
        />
        <Flex wrap="wrap" vertical={false} gap={12}>
          {Array(noOfBlogs)
            .fill(1)
            .map((i, index) => (
              <BlogsContainer
                index={index}
                blogsData={blogsData}
                setBlogsData={setBlogsData}
                areInputsDisabled={areInputsDisabled}
              />
            ))}
          {!isSaveClicked && <AddProjectEmptyContainer />}
        </Flex>
      </div>
      <ContactContainer
        contactTitle={contactTitle}
        setContactTitle={setContactTitle}
        contactDescription={contactDescription}
        setContactDescription={setContactDescription}
        contactImage={contactImage}
        setContactimage={setContactimage}
        isSaveClicked={isSaveClicked}
        areInputsDisabled={areInputsDisabled}
      />
    </>
  );
};

export default CtaView;
