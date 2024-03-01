const mongoose=require('mongoose')
const Schema=mongoose.Schema

const EventModel=new Schema({
    eid: {
        type: String,
        unique: true,
        required: true
    },
    startDate:{
        type:Date,
    },
    endDate:{
        type:Date,
    },
    location: {
        type: String,
    },
    // inactive, active, new employee:default
    prize:{
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
}, {
    timestamps: true
});
module.exports=mongoose.model('Event',EventModel)