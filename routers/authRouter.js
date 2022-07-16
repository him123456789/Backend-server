import express from "express"
import { User } from "../models/users.js"
const authRouter=express.Router();

authRouter
.route("/")
.get(getUser)


async function getUser(req,res){
    let user=await User.find();

    res.json({
        message:"all users data "
    })
}

export default authRouter;