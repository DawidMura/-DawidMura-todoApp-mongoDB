import mongoose from "mongoose";

const TodoAppSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    isUpdated: {
        type: Boolean,
        default: false
    },

    done: {
        type: Boolean,
        default: false,
    }
})


export default mongoose.model("todo", TodoAppSchema);