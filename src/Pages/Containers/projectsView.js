import { Button, Flex, Input } from "antd";
import React, { useEffect, useState } from "react";
import AddProjectEmptyContainer from "../../Components/AddProjectEmptyContainer";
import ProjectContainer from "../../Components/ProjectContainer";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../actions";
import SaveAndCancelButtonContainer from "../../Components/SaveAndCancelContainer";

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
};

const { TextArea } = Input;

const ProjectsView = () => {
  const dispatch = useDispatch();

  const initialData = useSelector(({ projects }) => projects.data);

  const [noOfProjects, setNoOfProjects] = useState(1);
  const [description, setDescription] = useState("");
  const [projectsData, setProjectsData] = useState([]);
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  useEffect(() => {
    if (
      !!initialData?.description &&
      (initialData?.projects || []).length > 0
    ) {
      setDescription(initialData?.description);
      setNoOfProjects(initialData?.projects.length);
      setProjectsData(initialData?.projects);
    }
  }, [initialData]);

  const incrementProjects = () => {
    setNoOfProjects(noOfProjects + 1);
  };

  const onCancelPress = () => {
    setNoOfProjects(1);
  };

  const onSavePress = () => {
    setIsSaveClicked(true);
    dispatch(
      setProjects({
        description,
        projects: projectsData,
      })
    );
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
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
        <h1 style={styles.heading}>Projects</h1>
        <TextArea
          placeholder="Add subtext here"
          variant="borderless"
          maxLength={256}
          value={description}
          onChange={onDescriptionChange}
          style={styles.description}
        />
        <Flex wrap="wrap" vertical={false} gap={12}>
          {Array(noOfProjects)
            .fill(1)
            .map((i, index) => (
              <ProjectContainer
                index={index}
                setProjectsData={setProjectsData}
                projectsData={projectsData}
              />
            ))}
          {!isSaveClicked && (
            <AddProjectEmptyContainer incrementProjects={incrementProjects} />
          )}
        </Flex>
      </div>
    </>
  );
};

export default ProjectsView;
