            import { createSlice } from "@reduxjs/toolkit";

            const userSlice=createSlice(
                {
                    name:'user',
                    initialState:null,// when there is no user
                    reducers:{
                        addUser:(state,action)=> action.payload,
                        removeUser:(state,action)=> null,
                    },
                    
                }
            );
            export const  {addUser,removeUser}=userSlice.actions;

            export default userSlice.reducer;// poora switch vala function paas hoga jo action ke basis par work 
            // karega aur ye default export ho raha hai to jaha bhi ham import karenege to without curly bracket 
            // import karenge kisibhi naame se but  ek module me keval ek hi default export ho sakta hai