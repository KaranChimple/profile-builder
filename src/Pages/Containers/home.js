import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Button, Dropdown } from "antd";
import IntroView from "./introView";
import { SECTION_NAMES } from "../../utils/constants";
import AboutView from "./aboutView";
import SkillsetView from "./skillsetView";
import ProjectsView from "./projectsView";
import ExperienceView from "./experienceView";
import CtaView from "./ctaView";

const styles = {
  menuContainer: { width: "20%", marginLeft: "40%" },
  addSectionsButton: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    margin: "64px 64px 64px 0px",
    backgroundColor: "#EEEEEE",
  },
  dropdownContainer: { padding: "0 128px 0 16px", marginLeft: "37%" },
  allSectionsAddedText: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#000000",
    padding: "64px 128px 32px 16px",
    marginLeft: "37%",
  },
};

const Home = () => {
  const [selectedSections, setSelectedSections] = useState([]);
  const items = [
    {
      label: "📌  Add About you",
      icon: <AiOutlinePlusCircle size="21px" />,
      onClick: () =>
        setSelectedSections([...selectedSections, SECTION_NAMES.ABOUT]),
      key: "1",
    },
    {
      label: "💡  Add Skillsets",
      icon: <AiOutlinePlusCircle size="21px" />,
      onClick: () =>
        setSelectedSections([...selectedSections, SECTION_NAMES.SKILLSETS]),
      key: "2",
    },
    {
      label: "🛠️  Add Projects",
      icon: <AiOutlinePlusCircle size="21px" />,
      onClick: () =>
        setSelectedSections([...selectedSections, SECTION_NAMES.PROJECTS]),
      key: "3",
    },
    {
      label: "🌐  Add Experience",
      icon: <AiOutlinePlusCircle size="21px" />,
      onClick: () =>
        setSelectedSections([...selectedSections, SECTION_NAMES.EXPERIENCE]),
      key: "4",
    },
    {
      label: "🔗  Add CTA",
      icon: <AiOutlinePlusCircle size="21px" />,
      onClick: () =>
        setSelectedSections([...selectedSections, SECTION_NAMES.CTA]),
      key: "5",
    },
  ];

  console.log("@@@ home", selectedSections);
  return (
    <div>
      <IntroView sections={items} />
      {selectedSections.includes(SECTION_NAMES.ABOUT) && <AboutView />}
      {selectedSections.includes(SECTION_NAMES.SKILLSETS) && <SkillsetView />}
      {selectedSections.includes(SECTION_NAMES.PROJECTS) && <ProjectsView />}
      {selectedSections.includes(SECTION_NAMES.EXPERIENCE) && (
        <ExperienceView />
      )}
      {selectedSections.includes(SECTION_NAMES.CTA) && <CtaView />}
      {selectedSections.includes(SECTION_NAMES.ABOUT) &&
      selectedSections.includes(SECTION_NAMES.SKILLSETS) &&
      selectedSections.includes(SECTION_NAMES.PROJECTS) &&
      selectedSections.includes(SECTION_NAMES.EXPERIENCE) &&
      selectedSections.includes(SECTION_NAMES.CTA) ? (
        <div style={styles.allSectionsAddedText}>
          All sections added! Looks good.
        </div>
      ) : (
        <div style={styles.dropdownContainer}>
          <Dropdown
            trigger={["click"]}
            menu={{ items, style: styles.menuContainer }}
            placement="top"
          >
            <Button type="dashed" block style={styles.addSectionsButton}>
              + Add sections
            </Button>
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default Home;
