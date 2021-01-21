import { CREATE_OBEKTIVKA, EDIT_OBEKTIVKA } from "../type";



const initialState = {
    obektiv: {
        fullName:"",
        isWorking: false,
        currentFromDate:"",
        currentCompany:"",
        currentPosition:"",
        birthDate:"",
        birthRegion:"", 
        birthCityOrDistrict:"",
        nationality:"",
        party_membership:"",
        degree:"",
        graduated_when:"",
        graduated_where:"",
        graduation_shift:"",
        diploma_speciality:"",
        academic_degree:"",
        academic_title:"",
        languages:[],
        military_title:"",
        state_awards:[
            {awardYear:"", 
            awardName:""
            }
        ],
        mp:[
            {mpStart:"", mpEnd:"", mpPosition:""}
        ],
        experience:[
            {fromDate:"", 
            toDate:"", 
            companyName:"", 
            positionName:""
            }
        ],
        relationship:[
            {relative:"", 
            relativeName:"", 
            relBirthDate:"", 
            relBirthPlaceState:"", 
            relBirthPlaceCity:"", 
            relBirthPlaceDistrict:"", 
            relJob:"", 
            relJobPlace:"",
            isRetierd:false, 
            relResidenceRegion:"", 
            relResidenceCity:"", 
            relResidenceDistrict:"", 
            relResidenceStreet:""
            }
        ]

    }
}

export const obektivkaReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_OBEKTIVKA:
            return {...state, ...{obektiv: action.payload}}
        case EDIT_OBEKTIVKA:
            return {...state, obektiv: action.payload}
    
        default:return state;
    }
}