const mongoose = require("mongoose");

const connectToDB = async (DB_URL) => {
    try {
        await mongoose.connect(DB_URL);
    } catch (error) {
        console.log(error.message);

    }


};

module.exports = connectToDB;
