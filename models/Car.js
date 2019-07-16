const db = require("../data/db");

module.exports = {
    get() {
        return db("cars");
    }
}