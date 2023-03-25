import React from 'react'
import dynamic from "next/dynamic";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const Body = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isDraft, setIsDraft] = useState(true);
    const [isPublished, setIsPublished] = useState(false);

    function handleTitleChange(event) {
      event.preventDefault();
      setTitle(event.target.value);
    }


  return (
    <div className='p-4 m-4'>
      <form>
        <label htmlFor="title" className='font-bold p-2'>Title:</label>
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Enter a title"
          onChange={handleTitleChange}
          required
        />
        <QuillNoSSRWrapper
          modules={modules}
          onChange={setContent}
          theme="snow"
        />
        
       
      </form>
    </div>
  );
}

export default Body