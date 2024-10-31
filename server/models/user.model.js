import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email : {
        type : String,
        required: true,
        unique: true,
        lowercase : true,
        trim : true,
    },
    fullName : {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    password : {
        type: String,
        required: [true, 'password is required'],
        minLength: 6
    },
    followers : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: [],
        }
    ],
    following : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User",
            default : []
        }
    ],
    profileImg: {
        type: String,
        default: "",
    },
    coverImg: {
        type: String,
        default: "",
    },
    bio: {
        type: String,
        default: "",
    },

    link: {
        type: String,
        default: "",
    },
    likedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: [],
        },
    ],
}, {timestamps: true})

const User = mongoose.model("User", userSchema);

export default User;