import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true

    },
    avatar: {
        type: String
    }
})

const user = mongoose.model("User", userSchema)

export default user