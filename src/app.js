const express = require('express');
const app = express();
const fakeUsers = require('./fakeData/users.json');
const port = 3000;

app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json(fakeUsers);
});

app.post('/users', (req, res) => {
  const newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  };
  res.status(201).json(newUser);
});

app.get('/users/:userId', (req, res) => {
  res.status(200).json({
    id: 1,
    first_name: 'Tandi',
    last_name: 'Milsap',
    email: 'tmilsap0@pbs.org',
  });
});

app.delete('/users/:userId', (req, res) => {
  res.status(200).json({
    message: `user ${req.params.userId} deleted`,
  });
});

app.patch('/users/:userId', (req, res) => {
  const userUpdatedDetail = {
    id: 999,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  };
  res.status(200).json(userUpdatedDetail);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
