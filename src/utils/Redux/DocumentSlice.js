import { createSlice } from "@reduxjs/toolkit";

const DocumentSlice =  createSlice({
    name: "Document",
    initialState: {
        graphData:[{
            chartType: "Line",
            label:"",
            dataSets:[]
        }],
        title: "",
        subTitle: "",
    },
    reducers: {
        setDocument: (state, action) => {
            return action.payload
        },
            
    }
});


export const {setDocument} = DocumentSlice.actions;

export default DocumentSlice.reducer;

