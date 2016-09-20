define(function(require) {
    'use strict';

    return {
        init: function() {
            var Strategy = require('strategy/strategy'),
                telValidator = require('strategy/telValidator'),
                emailValidator = require('strategy/emailValidator'),
                validator;

            validator = new Strategy();

            console.log(validator.selectValidator(telValidator).validate(12345678912));
            console.log(validator.selectValidator(emailValidator).validate('test@gmail.com'));
        }
    };
});