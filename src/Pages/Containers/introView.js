import React, { useEffect, useRef, useState } from "react";
import { Flex, Image, Input } from "antd";
import { RiGalleryLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setIntroDetails } from "../../actions";

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

const LeftSection = ({
  smallInputFile,
  bigInputFile,
  smallImage = "",
  bigImage = "",
  siteTitle = "",
  name = "",
  email = "",
  handleChange = () => {},
  onButtonClick = () => {},
  onSiteTitleChange = () => {},
  onNameChange = () => {},
  onEmailChange = () => {},
}) => {
  return (
    <div style={{ minWidth: "35%" }}>
      <Flex
        vertical={false}
        gap={12}
        align="center"
        style={{ marginTop: "12px" }}
      >
        <input
          type="file"
          id="small-image"
          ref={smallInputFile}
          onChange={(e) => handleChange(e, true)}
          style={{ display: "none" }}
        />
        {smallImage ? (
          <Image
            src={smallImage}
            width={"24px"}
            height={"24px"}
            style={{
              ...styles.gallerySmallIconContainer,
              ...{ padding: "0px", border: "0px" },
            }}
          />
        ) : (
          <button
            onClick={() => onButtonClick(false)}
            style={styles.gallerySmallIconContainer}
          >
            <RiGalleryLine size={16} />
          </button>
        )}

        <Input
          placeholder="Enter site title"
          variant="borderless"
          value={siteTitle}
          onChange={onSiteTitleChange}
          maxLength={256}
          style={styles.titleInput}
        />
      </Flex>
      <Flex
        vertical={false}
        gap={108}
        align="center"
        style={{ marginTop: window.innerHeight / 12 }}
      >
        <div>
          <input
            type="file"
            id="small-image"
            ref={bigInputFile}
            onChange={(e) => handleChange(e, false)}
            style={{ display: "none" }}
          />
          {bigImage ? (
            <Image
              src={bigImage}
              width={window.innerHeight / 2}
              height={window.innerHeight / 2}
              style={{
                ...styles.galleryBigIconContainer,
                ...{ padding: "0px", border: "0px" },
              }}
            />
          ) : (
            <button
              onClick={() => onButtonClick(true)}
              style={styles.galleryBigIconContainer}
            >
              <RiGalleryLine size={window.innerHeight / 3.5} />
            </button>
          )}
        </div>
      </Flex>
      <Flex vertical gap={12} style={{ marginTop: "40px" }}>
        <Input
          placeholder="Your name here"
          variant="borderless"
          value={name}
          onChange={onNameChange}
          maxLength={256}
          style={styles.nameInput}
        />
        <Input
          placeholder="Enter email"
          variant="borderless"
          value={email}
          onChange={onEmailChange}
          maxLength={256}
          style={styles.emailInput}
        />
      </Flex>
    </div>
  );
};

const RightSection = ({
  title = "",
  subTitle = "",
  onTitleChange = () => {},
  onSubTitleChange = () => {},
}) => {
  return (
    <>
      <Flex vertical gap={12}>
        <TextArea
          placeholder="Click to add title"
          variant="borderless"
          value={title}
          onChange={onTitleChange}
          maxLength={256}
          style={styles.centerTitleInput}
        />
        <TextArea
          placeholder="Click to add subtitle"
          variant="borderless"
          value={subTitle}
          onChange={onSubTitleChange}
          maxLength={256}
          style={styles.subTitleInput}
        />
      </Flex>
    </>
  );
};

const IntroView = ({ isAppPublished = false }) => {
  const dispatch = useDispatch();

  const initialData = useSelector(({ intro }) => intro.data);

  const smallInputFile = useRef(null);
  const bigInputFile = useRef(null);

  const [smallImage, setSmallImage] = useState("");
  const [bigImage, setBigImage] = useState("");
  const [siteTitle, setSiteTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    if (isAppPublished) {
      dispatch(
        setIntroDetails({
          smallImage: smallImage,
          bigImage: bigImage,
          siteTitle: siteTitle,
          name: name,
          email: email,
          title: title,
          subTitle: subTitle,
        })
      );
    }
    // eslint-disable-next-line
  }, [isAppPublished]);

  useEffect(() => {
    if (Object.keys(initialData?.data || []).length > 0) {
      setSmallImage(initialData?.data?.smallImage);
      setBigImage(initialData?.data?.bigImage);
      setSiteTitle(initialData?.data?.siteTitle);
      setName(initialData?.data?.name);
      setEmail(initialData?.data?.email);
      setTitle(initialData?.data?.title);
      setSubTitle(initialData?.data?.subTitle);
    }
  }, [initialData]);

  const handleChange = (e, isSmall = false) => {
    if (isSmall) {
      setSmallImage(URL.createObjectURL(e.target.files[0]));
    } else {
      setBigImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onButtonClick = (isBigImage = false) => {
    // `current` points to the mounted file input element
    if (isBigImage) {
      bigInputFile.current.click();
    } else {
      smallInputFile.current.click();
    }
  };

  const onSiteTitleChange = (e) => {
    setSiteTitle(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubTitleChange = (e) => {
    setSubTitle(e.target.value);
  };

  return (
    <Flex
      vertical={false}
      gap={12}
      align="center"
      style={styles.parentContainer}
    >
      <LeftSection
        smallInputFile={smallInputFile}
        bigInputFile={bigInputFile}
        smallImage={smallImage}
        bigImage={bigImage}
        siteTitle={siteTitle}
        name={name}
        email={email}
        handleChange={handleChange}
        onButtonClick={onButtonClick}
        onSiteTitleChange={onSiteTitleChange}
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
      />
      <RightSection
        title={title}
        subTitle={subTitle}
        onTitleChange={onTitleChange}
        onSubTitleChange={onSubTitleChange}
      />
    </Flex>
  );
};

export default IntroView;
