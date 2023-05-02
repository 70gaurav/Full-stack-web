import mongoose  from "mongoose";
const connection = mongoose.connect("mongodb+srv://gk17265:Gauravmongo@cluster0.kqebdu3.mongodb.net/?retryWrites=true&w=majority" , {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

export default connection