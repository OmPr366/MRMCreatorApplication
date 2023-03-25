import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import VersionControl from "./MRMPages/VersionControl";
import Intro from "./MRMPages/Intro";
import Content from "./MRMPages/Content";
import ModelRisk from "./MRMPages/ModelRisk";
import Overview from "./MRMPages/Overview";
import Performance from "./MRMPages/Performance";
import CreateChart from "./MRMPages/CreateChart";
import DataPrep from "./MRMPages/DataPrep";
import ModelSpec from "./MRMPages/ModelSpec";
import ModelMethod from "./MRMPages/ModelMethod";
import { useDispatch, useSelector } from "react-redux";

const Result = () => {

  const dispatch = useDispatch();

  const documentData = useSelector((state) => state.DocumentSlice);

  console.log("Document Data for testing:- ",documentData)

  return (
    <>
    <div className="w-screen flex flex-column justify-center ">
      <div id="pdf">
        {/* Page 1 */}
        {console.log("Title is:- ",documentData)}
        <Intro title={documentData.title} subTitle={documentData?.subTitle} />
        {/* page2 */}
        <VersionControl />
        <Content />
        <ModelRisk/>
        <Overview/>
        <Performance/>
        <DataPrep/>
        <ModelSpec/>
        <ModelMethod/>
        <CreateChart/>
      </div>
      </div>

      
    </>
  );
};

export default Result;
