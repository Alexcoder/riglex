import {GET_1338, CREATE_1338 } from "../../constants/ActionTypes";


const initialState ={
    data : {jobType: "",
            volOfLead: "",
            volOfTail: "",
            displacement: ""
           },
    count: 0,
    activeNav: true,
    message: "welcome",
    posts : [],
}

const Data1338 =  (Data1338={initialState}, action) => {
    switch (action.type) {
        case GET_1338:
            return {...Data1338, posts:[action.payload] };
    
        case CREATE_1338 :
            return {...Data1338, posts: [action.payload, ...Data1338.posts] };
            
        default:
            return Data1338;
    }
};

export default Data1338;
