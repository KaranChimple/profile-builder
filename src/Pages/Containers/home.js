import React, {useState} from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Button, Dropdown } from "antd";
import IntroView from "./introView";
import { SECTION_NAMES } from "../../utils/constants";
import AboutView from "./aboutView";

const styles = {
  menuContainer: {width: "20%", marginLeft: '40%'},
  addSectionsButton: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    marginTop: "64px",
    backgroundColor: "#EEEEEE",
  },
}

const Home = () => {
  const [selectedSections, setSelectedSections] = useState([]);
  const items = [
    {
      label: '📌  Add About you',
      icon: <AiOutlinePlusCircle size="21px" />,
      onClick: () => setSelectedSections([...selectedSections, SECTION_NAMES.ABOUT]),
      key: '1',
    },
    {
      label: '💡  Add Skillsets',
      icon: <AiOutlinePlusCircle size="21px" />,
      onClick: () => setSelectedSections([...selectedSections, SECTION_NAMES.SKILLSETS]),
      key: '2',
    },
    {
      label: '🛠️  Add Projects',
      icon: <AiOutlinePlusCircle size="21px" />,
      onClick: () => setSelectedSections([...selectedSections, SECTION_NAMES.PROJECTS]),
      key: '3',
    },
    {
      label: '🌐  Add Experience',
      icon: <AiOutlinePlusCircle size="21px" />,
      onClick: () => setSelectedSections([...selectedSections, SECTION_NAMES.EXPERIENCE]),
      key: '4',
    },
    {
      label: '🔗  Add CTA',
      icon: <AiOutlinePlusCircle size="21px" />,
      onClick: () => setSelectedSections([...selectedSections, SECTION_NAMES.CTA]),
      key: '5',
    },
  ];

  console.log("@@@ home", selectedSections)
  return (
    <div>
      <IntroView sections={items} />
      {selectedSections.includes(SECTION_NAMES.ABOUT) && <AboutView />}
      <Dropdown trigger={['click']} menu={{ items, style: styles.menuContainer }} placement="top">
      <Button type="dashed" block style={styles.addSectionsButton}>
        + Add sections
      </Button>
      </Dropdown>
    </div>
  );
};

export default Home;