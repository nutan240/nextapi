import { Email, Password } from "@mui/icons-material";
import { Mongoose } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema= Mongoose.Schema({
    username:{
        type:String,
        required:[true,'must provider a username'],
        unique:[true,'must be unique']
    },
    email:{
        type:String,
        required:[true,'must provider a email'],
        unique:[true,'must be unique']
    },
    Password:{
        type:String ,
        require:[true ,'must provide a password'] ,
       
    }
},
{
    timestamps: true
}
)

const User = Mongoose.models.user || Mongoose.model('User' , userSchema)
export default User