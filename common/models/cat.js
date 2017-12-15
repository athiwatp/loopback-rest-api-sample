'use strict';

module.exports = function(Cat) {
  // Validation
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

  // Set default limit and skip for pagination
  Cat.beforeRemote('find', function(ctx, cat, next) {
    if (!ctx.args.filter || !ctx.args.filter.limit) {
      if (!ctx.args.filter) ctx.args.filter = {};
      ctx.args.filter.limit = 10;
    }
    if (!ctx.args.filter || !ctx.args.filter.skip) {
      if (!ctx.args.filter) ctx.args.filter = {};
      ctx.args.filter.skip = 0;
    }
    next();
  });

  // Include total item information in response
  Cat.afterRemote('find', function(ctx, cat, next) {
    Cat.count(ctx.args.filter.where || {}, function(err, result) {
      if (err) return next(err);
      ctx.result = {
        total: result,
        rows: ctx.result,
      };
      next();
    });
  });
};
