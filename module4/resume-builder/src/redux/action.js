export const setSkinCreator = (value) => {
    return {
        type: "SET_SKIN",
        document: value
    }
}

export const addContactCreator = (value) => {
    return {
        type: "ADD_CONTACT",
        contact: value
    }
}

export const addEducationCreator = (value) => {
    return {
        type: "ADD_EDUCATION",
        education: value
    }
}


export const addSkillCreator = (value) => {
    return {
        type: "ADD_SKILL",
        skill: value
    }
}

export const logoutCreator = ()=>{
    return{
        type:"LOGOUT"
    }
}