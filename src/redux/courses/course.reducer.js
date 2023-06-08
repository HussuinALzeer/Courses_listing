const INITIAL_STATE = {
    courses:[
    { name: "Intensification of money laundering prevention - privatecustomer advice", category: "Category 1",duration:'30' ,process:1,endDate:'march.14.2022' },
    { name: "IT security basics (V1.01.3)", category: "Category 2", duration:'45',process:3, endDate:'may.24.2025' },
    { name: "Basic training data protection (V2.0)", category: "Category 3",duration:'50',process:4,endDate:'march' },
    { name: "WPHG compliance basics (V1.00.3)", category: "Category 4",duration:'32',process:4,endDate:'march' },
    { name: "Basic Training - Prevention of Money Laundering andTerrorist Financing (V3.0)", category: "Category 1",duration:'59',process:5 ,endDate:'march'},
    { name: "Basic training IT security and information security (V1.0)", category: "Category 2",duration:'300',process:0,endDate:'march' },
    { name: "Basic training IT security and information security (V1.0)", category: "Category 3",duration:'120',process:1,endDate:'march' },
    { name: "Privacy Basics (V1.00.2)", category: "Category 3",duration:'120',process:1,endDate:'march' },
    { name: "In-depth training on data protection (V1.0)", category: "Category 3",duration:'120',process:3,endDate:'march' },
    { name: "In-depth WPHG - sales representative (V1.00.2)", category: "Category 4",duration:'30',process:4,endDate:'march' },
    { name: "Advanced Training - Prevention of Money Laundering andTerrorist Financing (V3.0)", category: "Category 1",duration:'30',process:0,endDate:'march' },
    { name: "Advanced Training IT Security and Information Security", category: "Category 2",duration:'30',process:2,endDate:'march' }],


    
}



const courseReducer = ( state =INITIAL_STATE ,action) => {

    switch(action.type) {

        case 'WHAT' :
            return{
                ...state,
                courses:action.payload
            }
        

        default:
            return state
    }
}


export default courseReducer