const User = require('../models/user.model');
const UserSession = require('../models/UserSession');

module.exports = app => {
    // ----- Sign up API endpoints

    app.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            password
        } = body;
        let {
            username
        } = body;

        if (!username) {
            return res.send({
                success: false,
                message: 'Error: Username cannot be blank.'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }

        username = username.trim();

        // 1. Verify Username doesn't exist
        // 2. Save
        User.find({
            username: username
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Username already exist.'
                });
            }

            // ----- Save the new user
            const newUser = new User();
            newUser.username = username;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed up'
                });
            })
        });
    });

    app.post('/api/account/signin', (req, res, next) => {
        const { body } = req;
        const {
            password
        } = body;
        let {
            username
        } = body;
        if (!username) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }
        username = username.trim();

        User.find({
            username: username
        }, (err, users) => {
            if (err) {
                console.log('err 2:', err);
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }
            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }
            // ---- Otherwise correct user
            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    console.log(err);
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id
                });
            });
        });
    });

    app.get('/api/account/logout', (req, res, next) => {
        // ---- Get the token
        const { query } = req;
        const { token } = query;
        // ---- ?token=test
        // ---- Verify the token is one of a kind and it's not deleted.
        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false
        }, {
                $set: {
                    isDeleted: true
                }
            }, null, (err, sessions) => {
                if (err) {
                    console.log(err);
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Good'
                });
            });
    });

    app.get('/api/account/verify', (req, res, next) => {
        // ---- Get the token
        const { query } = req;
        const { token } = query;

        // ---- Verify the token is one of a kind and it's not deleted.
        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            } else {
                // --- DO ACTION
                return res.send({
                    success: true,
                    message: 'Good'
                });
            }
        });
    });


};