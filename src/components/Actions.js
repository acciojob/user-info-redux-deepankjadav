export const Update_Name = 'Update_Name';
export const Update_Email = 'Update_Email';

export const updateName = (name) => ({
    type : Update_Name,
    payload : name
});

export const updateEmail = (email) => ({
    type : Update_Email,
    payload : email
});