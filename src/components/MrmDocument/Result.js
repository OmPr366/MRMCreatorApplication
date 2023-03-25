import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import VersionControl from "./MRMPages/VersionControl";
import Intro from "./MRMPages/Intro";
import Content from "./MRMPages/Content";

const Result = () => {
  // Create a pdf file
  const downloadPdf = () => {
    const input = document.getElementById("pdf");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <>
    <div className="w-screen flex flex-column justify-center ">
      <div id="pdf">
        {/* Page 1 */}
        <Intro />
        {/* page2 */}
        <VersionControl />
        <Content />
      </div>
      </div>

      
    </>
  );
};

export default Result;
