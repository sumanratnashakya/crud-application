
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
        case 'Add_Contact':
            state = [...state, action.payload]
            return state;
        default:
            return state; 
    }

}

export default contactReducer ;