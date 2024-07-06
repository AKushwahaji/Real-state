import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: false,
            unique: true,
        },
        password: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

const user = mongoose.model("user" , userSchema);

export default user;
