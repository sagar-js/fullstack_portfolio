import {catchAsyncErrors} from '../middlewares/catchAsyncErrors.js';
import ErrorHandler from '../middlewares/error.js';
import {message} from '../models/messageSchema.js';

export const sendMessage = catchAsyncErrors(async(req, res, next)=>{
    const {senderName, subject, message} = req.body;
    if(!senderName || !subject || !message ){
        return next(new ErrorHandler('Please fill full form!', 400));
    }
    const data  = await MessageChannel.create({senderName, subject, message});
    res.status(200).json({
        success:true,
        message:"Message Sent",
        data,
    });
});

