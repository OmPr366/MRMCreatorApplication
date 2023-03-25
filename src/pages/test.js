import Layout from "@/components/Layout";
import { setDoubtValues } from "@/utils/Redux/DoubtExpertSlice";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Redux = () => {
  // Get complaint data from redux store
  const dispatch = useDispatch();

  const complaintData = useSelector((state) => state.DoubtExpertSlice);

  useEffect(() => {
    console.log("Complaint data is:- ", complaintData);
  }, [complaintData]);
  return (
    <Layout title="Redux">
      <div>
        Redux
        <p>Hey this is op </p>
        {/* convert complaint data in to string and show  */}
        <p>{JSON.stringify(complaintData)}</p>
        <button
          onClick={() => {
            // dispatch action to change the data
            dispatch(
              setDoubtValues({
                name: "Om Prakash",
                examType: "Jee",
              })
            );
          }}
        >
          Change
        </button>
      </div>
    </Layout>
  );
};

export default Redux;
