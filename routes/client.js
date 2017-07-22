'use strict';

const passport = require('passport');

module.exports.info = [
  passport.authenticate('bearer', {session: false}),
  (req, res) => {
    console.log('Client Info');
    res.json({
      client_id: req.user.id,
      name: req.user.name,
      scope: req.authInfo.scope
    });
  }
];