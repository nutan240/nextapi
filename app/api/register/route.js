import { connectDB } from "@/utiles/connect";

export async function POST(req){
    try{
        await connectDB();
const { username , email , password} = await req.json();
console.log(username , email , password);
return;
    } catch(error){
        console.log(error , 'errror in register')
    }
}