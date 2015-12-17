var irc = require('twitch-irc');

var clientOptions = {
    options: {
        debug: true,
        debugIgnore: ['ping', 'chat', 'action']
    },
    identity: {
        username: 'Bot_name',
        password: ' oauth: '
    },
    channels: ['Your Channel']
}
var client = new irc.client(clientOptions);


client.connect();

client.addListener('chat', function (channel, user, message) {
    console.log(user.username + ': ' + message);
    if (message.toLowerCase() === '#hi') {
        client.say(channel, 'Hello, ' + user.username + '!');
    }
});

client.addListener('chat', function (channel, user, message) {
    if (message.toLowerCase() === '#blame') {
        client.say(channel, '#blame, ' + user.username + '!');
    }
});

client.addListener('chat', function (channel, user, message) {
    console.log(user.username + ': ' + message);
    if (message.toLowerCase() === '#hi') {
        client.say(channel, 'Slaps, ' + user.username + '!');
    }
});

client.addListener('chat', function (channel, user, message) {
    if (message.toLowerCase() === '#catch') {
        client.say(channel, 'catch me if ya can Kappa' );
    }
});

client.addListener('chat', function (channel, user, message) {
    if (message.toLowerCase() === '#commands') {
		client.say(channel, 'The Commands Are All #' );
        client.say(channel, '/me The Commands Are: #hi, #catch, #blame, #hi  #kappa  #commands <3' );
    }
});



client.addListener('chat', function (channel, user, message) {
    if (message.toLowerCase() === '#kappa') {
		client.say(channel, 'KappaPride' );
        client.say(channel, 'KappaPride Has Been Spamed KAPOW' );
    }
});


client.addListener('chat', function (channel, user, message) {
    if (message.toLowerCase() === '#blue') {
        client.say(channel, '/color blue' );
		client.say(channel, '/me My Color is Now blue' );
    }
});

client.addListener('chat', function (channel, user, message) {
    if (message.toLowerCase() === '#green') {
        client.say(channel, '/color green' );
		client.say(channel, '/me My Color is Now Green' );
    }
});

client.addListener('chat', function (channel, user, message) {
    if (message.toLowerCase() === '#red') {
        client.say(channel, '/color red' );
		client.say(channel, '/me My Color is Now red' );
    }
});

client.addListener('chat', function (channel, user, message) {
    if (message.toLowerCase() === '#yg') {
        client.say(channel, '/color yellowgreen' );
		client.say(channel, '/me My Color is Now yellowgreen' );
    }
});








