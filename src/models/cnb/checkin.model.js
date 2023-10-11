import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const CheckinSchema = new mongoose.Schema({
  employee: {
    type: String,
    required: true,
  },
  checkin: {
    type: Date,
    required: true,
  },
  paidDayoff: {
    type: Number,
    default: 0,
  },
  notPaidDayoff: {
    type: Number,
    default: 0,
  },
  bonus: {
    type: Number,
    default: 0,
  },
  info: {
    type: String,
  },
});

CheckinSchema.add(BaseSchema);

const Checkin = mongoose.model("Checkin", CheckinSchema);

export default Checkin;
