import { AuthResponseData } from "./auth.response.model";

export class User {
    /**
     *
     */
    constructor(
        private email : string,
        private token : string,
        private localId : string,
        private expirationDate : Date,
        ) {
        
        
    }

  

}