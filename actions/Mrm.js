import axios from "axios";

// get MRM by USer ID :-  http://localhost:8000/api/getMrmByUser/${id}

export const getMrmByUser = async (id) => {
  try {
    const res = await axios.get(
      `https://mongo.firstinbiology.com/api/getMrmByUser/${id}`
    );
    if (res) {
      return {
        data: res.data,
        status: res.status,
        error: false,
        message: "Data updated successfully",
      };
    }
  } catch (error) {
    console.log(error, " error hai");
    return {
      data: null,
      status: 500,
      error: true,
      message: error.Error,
    };
  }
};

// Add MRM :-  http://localhost:8000/api/addMrm

export const addMrm = async (data) => {
  try {
    const res = await axios.post(
      "https://mongo.firstinbiology.com/api/addMrm",
      data
    );
    if (res) {
      return {
        data: res.data,
        status: res.status,
        error: false,
        message: "Data updated successfully",
      };
    }
  } catch (error) {
    console.log(error, " error hai");
    return {
      data: null,
      status: 500,
      error: true,
      message: error.Error,
    };
  }
};
