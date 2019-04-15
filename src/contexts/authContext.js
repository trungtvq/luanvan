import React from "react";
const authContext = React.createContext({
	token:null,
	signInEmail: null,
	login: (token,signInEmail)=>{},
	logout: ()=>{}
});
export default authContext;
