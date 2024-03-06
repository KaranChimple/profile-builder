import { Button, Flex } from "antd";
import React from "react";

const styles = {
  saveAndCancelButtonContainer: {
    marginLeft: "37%",
    maxWidth: "600px",
    marginTop: "32px",
  },
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

const SaveAndCancelButtonContainer = ({
  isSaveClicked = false,
  onCancelPress = () => {},
  onSavePress = () => {},
}) => {
  if (!isSaveClicked) {
    return (
      <Flex
        vertical={false}
        justify="flex-end"
        style={styles.saveAndCancelButtonContainer}
      >
        <Button type="text" onClick={onCancelPress} style={styles.cancelButton}>
          Cancel
        </Button>
        <Button type="primary" onClick={onSavePress} style={styles.saveButton}>
          Save
        </Button>
      </Flex>
    );
  }
  return null;
};

export default SaveAndCancelButtonContainer;
