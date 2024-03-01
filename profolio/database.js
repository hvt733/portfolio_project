const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Đường dẫn tới tệp cơ sở dữ liệu SQLite3
const dbPath = __dirname + "/instance/database.db"

let db = new sqlite3.Database(dbPath, error => {
    if (error) {
        console.log("Fail to connect: " + error);
    } else {
        console.log("Connect to database successfully");
    }
});

module.exports = db;