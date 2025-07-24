import express from 'express'
import { addUser, editUser, getAllUsers } from '../controllers/user.controller.js'
const userRoute = express.Router()

userRoute.post("/add-user", addUser)
userRoute.get("/get", getAllUsers)
userRoute.put('/edit/:id', editUser)
userRoute.get("/hello", (req, res) => res.send("Hello"))
export default userRoute;