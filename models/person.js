const {Schema} = require('mongoose')
import mongoose from 'mongoose';



const PersonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Person should have a name']
    },
    age: Number,
    favoriteFoods: [String]
})





mongoose.model('Person', PersonSchema)