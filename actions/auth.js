import axios from "axios";
// http://localhost:8000/api/signin

export const signin = async (data) => {
    try {
        const res = await axios.post(
        "http://localhost:8000/api/signin",
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
    }


    // Singup 
    // http://localhost:8000/api/register

export const signup = async (data) => {
    try {
        const res = await axios.post(
        "http://localhost:8000/api/register",
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
    }