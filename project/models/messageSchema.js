import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    senderName: {
        type: String,
        minLenght: [2, "String must contains atleast 2 characters!"],
    },
    subject: {
        type: String,
        minLenght: [2, "Sub must contains atleast 2 characters!"]
    },
    message: {
        type: String,
        minLenght: [2, "message must contains atleast 2 characters!"]
    },
    default: {
        type: Date,
        default: Date.now(),
    }
});

export const message = mongoose.model("message",messageSchema);

