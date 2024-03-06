import React, { useEffect, useState } from "react";
import RichTextEditorWithToolbar from "../../Components/RichTextEditorWithToolbar";
import { Button, Flex } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { EMPTY_CONTENT } from "../../utils/constants";
import { setAboutMe } from "../../actions";
import SaveAndCancelButtonContainer from "../../Components/SaveAndCancelContainer";

const styles = {
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

const AboutView = () => {
  const dispatch = useDispatch();

  const initialData = useSelector(({ aboutMe }) => aboutMe.data);

  const [aboutMeJsonData, setAboutMeJsonData] = useState(EMPTY_CONTENT);
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  useEffect(() => {
    if (initialData != {} || Object.keys(initialData).length !== 0) {
      setAboutMeJsonData(initialData);
    }
  }, []);

  const onCancelPress = () => {
    setAboutMeJsonData(EMPTY_CONTENT);
  };

  const onSavePress = () => {
    setIsSaveClicked(true);
    dispatch(setAboutMe(aboutMeJsonData));
  };

  return (
    <>
      <SaveAndCancelButtonContainer
        isSaveClicked={isSaveClicked}
        onCancelPress={onCancelPress}
        onSavePress={onSavePress}
      />
      <RichTextEditorWithToolbar
        setAboutMeJsonData={setAboutMeJsonData}
        aboutMeJsonData={aboutMeJsonData}
        isSaveClicked={isSaveClicked}
      />
    </>
  );
};

export default AboutView;
