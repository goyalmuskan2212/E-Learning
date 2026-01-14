/*import mongoose from "mongoose";
import TryCatch from "../middlewares/TryCatch";

const schema = new mongoose.Schema({
    razorpay_order_id: {
        type: String,
        required: true,
    },
    razorpay_payment_id: {
        type: String,
        required: true,
    },
    razorpay_signature: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const paymentVerification = TryCatch(async (req, res) => {
    const {} = req.body
})
    */