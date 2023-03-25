import React from "react";
import Result from "../components/MrmDocument/Result";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const createdocument = () => {
  function getPDF() {
    const input = document.getElementById("pdf");
    // get the height and width of the div having id = 'pdf'
    var HTML_Width = input.offsetWidth;
    var HTML_Height = input.offsetHeight;
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + top_left_margin * 2;
    var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas(input, { allowTaint: true }).then(function (canvas) {
      canvas.getContext("2d");

      console.log(canvas.height + "  " + canvas.width);

      let imgData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      );

      console.log(totalPDFPages);
      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage();
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          -(PDF_Height * i) + top_left_margin * 4,
          canvas_image_width,
          canvas_image_height
        );
      }

      pdf.save("HTML-Document.pdf");
    });
  }
  return (
    <div>
      createdocument
      <Result />
      {/* Download as a pdf  */}
      <div className="fixed bottom-10 right-5 ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getPDF}
        >
          Download as a pdf
        </button>
      </div>
    </div>
  );
};

export default createdocument;
