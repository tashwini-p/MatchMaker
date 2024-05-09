const express = require('express');
const { verifyToken } = require('../middlewares/auth.middleware');
const { UserInfo } = require('../schemas/userInfo.schema');
const infoRouter = express.Router(); 

infoRouter.post('/add', verifyToken, async (req, res) => {
    try {
        const userData = { ...req.body, userID: req.id }; 
        const insertedUser = new UserInfo(userData);
        await insertedUser.save();

        res.status(201).json(insertedUser); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = {
    infoRouter
};