"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection((err, Connection) => {
    if (err)
        throw err;
    Connection.release();
    console.log('DB is connected');
});
exports.default = pool;
