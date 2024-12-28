show db
use Zenclassprogramme(database name)

db.createCollection("users")

db.users.insertMany([
    [{
        "user_name":"Roshan",
        "date":ISODate("2020-10-16"),
        "attendance":"absent",
        "task_submission":"failed"
    },
    {
        "user_name":"Roa",
        "date":ISODate("2020-10-20"),
        "attendance":"absent",
        "task_submission":"failed"
    },
    {
        "user_name":"Riza",
        "date":ISODate("2020-10-29"),
        "attendance":"present",
        "task_submission":"passes"
    },
    {
        "user_name":"venkat",
        "date":ISODate("2020-11-01"),
        "attendance":"absent",
        "task_submission":"passed"
    },
    {
        "user_name":"Ram",
        "date":ISODate("2020-11-16"),
        "attendance":"present",
        "task_submission":"failed"
    },
    {
        "user_name":"Kishor",
        "date":ISODate("2020-11-17"),
        "attendance":"present",
        "task_submission":"passed"
    }]
])

db.createCollection("codekata")

db.codekata.insertMany([{
    "user_name": "fabian",
    "problems_solved": 88
},
{
    "user_name": "raja",
    "problems_solved": 18
},
{
    "user_name": "fernando",
    "problems_solved": 48
},
{
    "user_name": "rohit",
    "problems_solved": 58
},
{
    "user_name": "virat",
    "problems_solved": 45
},
{
    "user_name": "dhawan",
    "problems_solved": 91
},
{
    "user_name": "dhoni",
    "problems_solved": 11
}])

db.createCollection("attendance")

db.attendance.insertMany([
    { name: "Roshan", present: "50/52", absent: "2/52", attendance: "98%" },
    { name: "Roa", present: "51/52", absent: "1/52", attendance: "99%" },
    { name: "Prabha", present: "49/52", absent: "3/52", attendance: "95%" },
    { name: "Riza", present: "35/52", absent: "17/52", attendance: "75%" },
    { name: "Ram", present: "52/52", absent: "0/52", attendance: "100%" },
])

db.createCollection("topics")

db.topics.insertMany([
    { topic: "Java Script", },
    { topic: "HTML & CSS" },
    { topic: "Tailwind CSS" },
    { topic: "Advanced Java Script" },
    { topic: "React JS" },
    { topic: "MYSQL" },
    { topic: "MongoDB" },
    { topic: "JNode Js" }

])

db.createCollection("tasks")

db.tasks.insertMany([
    { topic: "Movie Searching App", score: "5/10", users: "Roshan" },
    { topic: "React Model", score: "7/10", users: "Roshan" },
    { topic: "Todo App", score: "9/10", users: "Roshan" },
    { topic: "Design DB - Zenclass", score: "8/10", users: "Roshan" },
    { topic: "SQL Task", score: "7/10", users: "Roshan" },
    { topic: "Password Reset Flow", score: "9/10", users: "Roshan" },

])

db.createCollection("company_drives")

db.company_drives.insertMany(
    [{
        "company_name":"hcl",
        "date":ISODate("2020-09-25"),
        "students_appeared":"fabian,dineshwaran,raja,antony,fernando"
    },
    {
        "company_name":"cts",
        "date":ISODate("2020-10-16"),
        "students_appeared":"anabel,sanjay,ebin,john,infant"
    },
    {
        "company_name":"tcs",
        "date":ISODate("2020-10-27"),
        "students_appeared":"virat,tammim,ashok,sri,abi"
    },
    {
        "company_name":"zoho",
        "date":ISODate("2020-11-15"),
        "students_appeared":"naveen,suvan,felix,jethro,ashwin"
    },
    {
        "company_name":"guvi",
        "date":ISODate("2020-11-25"),
        "students_appeared":"jeshwin,jack,rohit,yogesh,edwin"
    }]
    )

    db.createCollection("mentors")

    db.mentors.insertMany([{
        "mentor_name":"sanjay",
        "mentees_count":35
    },
    {
        "mentor_name":"pugazharasan",
        "mentees_count":14
    },
    {
        "mentor_name":"adhithyan",
        "mentees_count":11
    },
    {
        "mentor_name":"fernando",
        "mentees_count":9
    },
    {
        "mentor_name":"srivathsan",
        "mentees_count":44
    },
    {
        "mentor_name":"karthik",
        "mentees_count":29
    }])