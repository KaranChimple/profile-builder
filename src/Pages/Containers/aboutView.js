import React, { useEffect, useState } from "react";
import RichTextEditorWithToolbar from "../../Components/RichTextEditorWithToolbar";
import { useSelector, useDispatch } from "react-redux";
import { EMPTY_CONTENT } from "../../utils/constants";
import { setAboutMe } from "../../actions";
import SaveAndCancelButtonContainer from "../../Components/SaveAndCancelContainer";

const AboutView = ({ isAppPublished = false }) => {
  const dispatch = useDispatch();

  const initialData = useSelector(({ aboutMe }) => aboutMe.data);

  const [aboutMeJsonData, setAboutMeJsonData] = useState(EMPTY_CONTENT);
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  useEffect(() => {
    if (Object.keys(initialData).length !== 0) {
      setAboutMeJsonData(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    if (isAppPublished) {
      onSavePress();
    }
    // eslint-disable-next-line
  }, [isAppPublished]);

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
