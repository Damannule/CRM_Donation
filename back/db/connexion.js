const mongoose = require('mongoose');

// MONGOOSE
mongoose
    .connect(
        `mongodb://${process.env.DB_LOCALHOST}/${process.env.DB_NAME}`,
        { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection;

module.exports = db;