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
import { useDispatch, useSelector } from "react-redux";

const Result = () => {

  const dispatch = useDispatch();

  const csvData = useSelector((state) => state.CsvDataSlice);


  return (
    <>
    <div className="w-screen flex flex-column justify-center ">
      <div id="pdf">
        {/* Page 1 */}
        <Intro title={csvData.title} subTitle={csvData?.subTitle} />
        {/* page2 */}
        <VersionControl />
        <Content />
        <ModelRisk/>
        <Overview/>
        <Performance/>
        <CreateChart/>
      </div>
      </div>

      
    </>
  );
};

export default Result;
