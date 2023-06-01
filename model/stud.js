import mongoose from 'mongoose';

const stud = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 60 },
    city: { type: String, required: true, trim: true },
})

const model = mongoose.model("student", stud)
export default model