const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb+srv://bookdirectorydb:bookdirectorydb123@cluster0.vfwhg.mongodb.net/BookDirectory', {
        useNewUrlParser: true
    })
        .then(() => console.log(`dbconnected`))
        .catch((err) => console.log(err));

};
module.exports = dbConnect;