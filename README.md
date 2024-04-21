
# Quizo

An api for creating quiz, solve quiz, and get a feedback




## Installation

Install Authentication Application with npm

1.First clone the Repository by pasting the command given below in the terminal.
```bash
  git clone https://github.com/astitva3110/Quizo.git
```
 2.Set-up mongodb in pc 

## Running Tests

1.Register (POST)

```bash
  http://localhost:8080/signup
```
```bash
  {
  "name": "abc",
  "email": "abc@gmail.com",
  "password": "123"
}

```
Output
```bash
 {
    "username": "abc",
    "email": "abc@gmail.com",
    "password": "$2b$10$nEYVtVHXY0ENzgGJKfB3q.TStkX1q0rHz6CTUq98a0Vz2IFs1dMCO",
    "quiz": [],
    "_id": "6624b4c47b3dd0f2def97d0a",
    "createdAt": "2024-04-21T06:40:04.469Z",
    "updatedAt": "2024-04-21T06:40:04.469Z",
    "__v": 0
}

```
2.Login(post)
```bash
http://localhost:8080/login
```
```bash
  {
  "email":"abc@gmail.com",
     "password": "123"
}
```
3.Create Quiz(post)
```bash
http://localhost:8080/admin/createQuiz
```
```bash
 {
    "message": {
        "quizName": "MongoDB",
        "description": "It is a basic level MongoDB Quiz",
        "admin": "6624b4c47b3dd0f2def97d0a",
        "number": 10,
        "questions": [],
        "_id": "662551f3a681f0e7bf9cb8d5",
        "__v": 0
    }
}
```

4.Adding a Question(post)
```bash
http://localhost:8080/admin/addQue/:quiz_id
```
```bash 
{
"question": "What is the purpose of the process.nextTick() function in Node.js?",
"options": [
"To execute a callback function asynchronously after the current operation completes",
"To terminate the Node.js process",
"To delay the execution of a callback function",
"To schedule a callback function to run on the next iteration of the event loop"
],
"correctOption": 0,
    "userId":"6624b4c47b3dd0f2def97d0a"
}
```
Output
```bash
 {
    {
    "message": {
        "question": "What is the purpose of the process.nextTick() function in Node.js?",
        "options": [
            "To execute a callback function asynchronously after the current operation completes",
            "To terminate the Node.js process",
            "To delay the execution of a callback function",
            "To schedule a callback function to run on the next iteration of the event loop"
        ],
        "correctOption": 0,
        "_id": "6624f55fd7db0609b67e45d5",
        "__v": 0
    }
}
}
```

5.Get all the question(get)
```bash
http://localhost:8080/user/:quiz_id/getQ
```


4.Taking a Quiz(post)
```bash
http://localhost:8080/user/:quiz_id/getQ
```
```bash 
{
  "userId": "662029b6c71e689cf46cf01f",    
  "responses": [
    {
      "question": "6624f270d7db0609b67e45b1", 
      "userAnswer": 2
    },
    {
      "question": "6624f414d7db0609b67e45b5",  
      "userAnswer": 1
    },
    {
      "question": "6624f49bd7db0609b67e45b9",  
      "userAnswer": 1
    },
    {
      "question": "6624f4bad7db0609b67e45bd",  
      "userAnswer": 1
    }

  ]
}
```
Output
```bash
{
    "messgae": {
        "responses": [
            {
                "question": "6624f270d7db0609b67e45b1",
                "userAnswer": 2,
                "_id": "66254de7a616655c79709ee6"
            },
            {
                "question": "6624f414d7db0609b67e45b5",
                "userAnswer": 1,
                "_id": "66254de7a616655c79709ee7"
            },
            {
                "question": "6624f49bd7db0609b67e45b9",
                "userAnswer": 1,
                "_id": "66254de7a616655c79709ee8"
            },
            {
                "question": "6624f4bad7db0609b67e45bd",
                "userAnswer": 1,
                "_id": "66254de7a616655c79709ee9"
            }
        ],
        "_id": "66254de7a616655c79709ee5",
        "__v": 0
    }
}
```
6.Feedback(get)

```bash
  http://localhost:8080/user/feedback/:responses_id
```

Output
```bash
{
    "message": [
        {
            "question": "What is the primary purpose of modules in Node.js?",
            "options": [
                "To define HTML templates",
                "To encapsulate related code into reusable units",
                "To handle browser events",
                "To manage database connections"
            ],
            "userResponse": 2,
            "correctOption": 1
        },
        {
            "question": "Which function in Node.js facilitates asynchronous operations by allowing a function to be executed after a task is completed?",
            "options": [
                " setTimeout()",
                "setInterval()",
                "callback()",
                "promise()"
            ],
            "userResponse": 1,
            "correctOption": 2
        },
        {
            "question": "What is the core component responsible for handling I/O operations in Node.js?",
            "options": [
                "Callback stack",
                "Event loop",
                "Promise chain",
                "Module loader"
            ],
            "userResponse": 1,
            "correctOption": 1
        },
        {
            "question": "In Node.js, what is the purpose of the event loop?",
            "options": [
                "To handle synchronous tasks",
                "To handle asynchronous tasks",
                "To load external modules",
                "To manage database connections"
            ],
            "userResponse": 1,
            "correctOption": 1
        }
    ]
}

```
7.Home that has all the Quiz (get)

```bash
  http://localhost:8080/user/home
```

## Features

- User can register and login
- The password is protected using bcrypt.
- Admin can create Quiz and add question 
- Docker containerization is implemented.
- Redis is implemented .




