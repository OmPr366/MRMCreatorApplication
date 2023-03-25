import Papa from "papaparse";
import {  useDispatch, useSelector } from "react-redux";
import { setCsvData } from "../utils/Redux/CsvDataSlice";

export default function CsvToJson() {
  const dispatch = useDispatch();
  const csvData = useSelector((state) => state.CsvDataSlice);

  return (
    <div className="App">
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
          const files = e.target.files;
          console.log(files);
          if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
              complete: function (results) {
                if (results) {
                  dispatch(setCsvData(results.data));
                }
                console.log("Finished:", results.data);
              },
            });
          }
        }}
      />
    </div>
  );
}
