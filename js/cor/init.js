define(function(require) {
    'use strict';

    return {
        init: function() {
            var call, sms, email, handler, telepathy,
                Handler = require('cor/handler'),
                callHandler = require('cor/handlers/call');
            
            call = {
                type: 'call',
                number: '071325454234',
                ownNumber: '2319232222'
            };

            sms = {
                type: 'sms',
                number: '072193213333',
                message: 'Hey Dan'
            };

            email = {
                type: 'email',
                recipient: 'dan@dandwellman.co.kr',
                message: 'hi daan!'
            };

            telepathy = {
                type: 'esp',
                target: 'someone',
                message: 'spooky'
            };

            handler = new Handler(null, null, callHandler);
            handler.handleCommunication(email);
            handler.handleCommunication(sms);
            handler.handleCommunication(call);
            handler.handleCommunication(telepathy);
        }
    };
});