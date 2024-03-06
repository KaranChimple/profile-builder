import { Image, Input } from "antd";
import React, { useRef, useState } from "react";
import { IoIosLink } from "react-icons/io";
import { RiGalleryLine } from "react-icons/ri";

const styles = {
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
  titleInput: { fontWeight: "500", fontSize: "16px", lineHeight: "28px" },
  imageView: { padding: "0px", border: "0px", width: "36px", height: "36px" },
};

const BlogsContainer = ({
  index = 0,
  blogsData = [],
  setBlogsData = () => {},
}) => {
  const imageFile = useRef(null);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const onChange = (e, fieldName) => {
    const userBlogs = blogsData;
    switch (fieldName) {
      case "title":
        setTitle(e.target.value);
        if (userBlogs.length > 0) {
          userBlogs[index] = {
            ...userBlogs[index],
            title: e.target.value,
          };
        } else {
          userBlogs.push({
            title: e.target.value,
          });
        }
        break;
      case "link":
        setLink(e.target.value);
        if (userBlogs.length > 0) {
          userBlogs[index] = {
            ...userBlogs[index],
            link: e.target.value,
          };
        } else {
          userBlogs.push({
            link: e.target.value,
          });
        }
        break;
      case "image":
        setImage(URL.createObjectURL(e.target.files[0]));
        if (userBlogs.length > 0) {
          userBlogs[index] = {
            ...userBlogs[index],
            image: e.target.files[0],
          };
        } else {
          userBlogs.push({
            image: e.target.files[0],
          });
        }
        break;
      default:
        console.log("Incorrect field pressed");
    }
    setBlogsData([...userBlogs]);
  };

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    imageFile.current.click();
  };

  return (
    <div style={styles.projectContainer}>
      <input
        type="file"
        id={`blogs-image-${index}`}
        ref={imageFile}
        onChange={(e) => onChange(e, "image")}
        style={{ display: "none" }}
      />
      {image ? (
        <Image
          src={image}
          preview={false}
          style={{
            ...styles.gallerySmallIconContainer,
            ...styles.imageView,
          }}
        />
      ) : (
        <button
          onClick={onButtonClick}
          style={styles.gallerySmallIconContainer}
        >
          <RiGalleryLine size={16} />
        </button>
      )}
      <Input
        placeholder="Enter title here..."
        variant="borderless"
        value={title}
        onChange={(e) => onChange(e, "title")}
        maxLength={256}
        style={styles.titleInput}
      />
      <div style={{ marginBottom: "36px" }}>
        <Input
          placeholder="Add Link"
          variant="borderless"
          value={link}
          onChange={(e) => onChange(e, "link")}
          maxLength={128}
          prefix={
            <IoIosLink
              size={"10px"}
              color="#0085FF"
              style={{ marginRight: "4px" }}
            />
          }
        />
      </div>
    </div>
  );
};

export default BlogsContainer;
