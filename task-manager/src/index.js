const express = require('express');
require('./db/mongoose.js');
const userRouter = require('./router/user');
const taskRouter = require('./router/task');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.status(503).json('Under Maintenance');
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up and running ' + port);
});

const jwt = require('jsonwebtoken');

const myFunction = async () => {
  const token = jwt.sign({ _id: 'gajds' }, 'thisismynewcourse');
  console.log(token);
  const data = jwt.verify(token, 'thisismynewcourse');
  console.log(data);
};

myFunction();
