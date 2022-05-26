import { getDefaultNormalizer } from "@testing-library/react"

const initialState = [
    {
        id: 0,
        name: 'suman shakya',
        email: 'shakya@gmail.com',
        number: 12413434
    },
    {
        id: 1,
        name: 'Krishna shakya',
        email: 'krishna@gmail.com',
        number: 345235235
    }
    
]

const contactReducer = (state=initialState, action)=>{
    switch(action.type){
        default:
            return state; 
    }

}

export default contactReducer ;