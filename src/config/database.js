const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://520h0661:dbiehFbJvhsPuxPZ@cluster0.kmxppdh.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect Database success.')
    } catch (error) {
        console.log('Fail to connect Database.')
    }
};
module.exports = { connect };