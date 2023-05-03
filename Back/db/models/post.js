import { Schema , model } from "mongoose";

const postSchema = new Schema ({
    title: {
        type : String,
        required : true
    },
    author: {
        type : String,
        required : true
    },
    content: {
        type : String,
        required : true
    },
    createDate: {
        type : Date,
        default : Date.now
    },
    updateDate: {
        type : Date,
        default : Date.now
    },
})

const Post = model("post" , postSchema)
export default Post