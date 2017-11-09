"use strict";

var pool = require('./pool');
module.exports = {
    findAll: function findAll() {
        var sql = "select * from tbl_exam_subjectlevel;";
        // console.log("select * from tbl_exam_epartment")
        return pool.execute(sql);
    }
};