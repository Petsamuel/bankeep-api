import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter Fullname"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Enter email address"],
        unique: [true, "Email address already in use"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username is taken"],
        trim: true,
    }
}, {
    timestamps: true,
});
export default mongoose.model("User", userSchema);

