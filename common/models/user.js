'use strict';

module.exports = function(User) {
  // username and email uniqueness ARE already handled by built-in model
  // email presence IS already handled by built-in model
  User.validatesPresenceOf('username', 'password');
};
