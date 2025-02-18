import { Update_Name, Update_Email} from "./Actions";

const initialState = {
    name: '',
    email:''
};

const userRecuder = (state=initialState, actions) => {
    switch(actions.type){
        case Update_Name: 
            return {...state, name: actions.payload};
        case Update_Email:
            return {...state, email : actions.payload};
        default:
            return state;
    }
};

export default userRecuder;