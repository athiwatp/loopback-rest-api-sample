'use strict';

module.exports = function(Cat) {
  Cat.validatesLengthOf('name', {
    min: 8,
    max: 20,
    message: {
      min: 'Name is too short, minimum 8 characters',
      max: 'Name is too long, maximum 20 characters',
    },
  });
  Cat.validatesNumericalityOf('radius', {int: true});
  Cat.validatesNumericalityOf('duration', {int: true});
};
