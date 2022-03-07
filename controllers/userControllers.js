const User = require('../models/user');

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201);
    res.send(newUser);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({uid:req.params.uid});
    res.send(user);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};

const updateUser = async (req, res) => {
  try {
    console.log('updating user with uid: ', req.params.uid)
    console.log('havent defined update logic');
    res.end();
    // const user = await User.findById(req.params.id);
    // res.send(user);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    const deleted = await User.deleteMany({});
    res.send(deleted);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  }
  catch (e) {
    res.status(500);
    console.error(e);
  }
};


module.exports = { getUser, createUser, updateUser, getAllUsers, deleteAllUsers };