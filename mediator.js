/**
 * User type
 * @param string name
 */
const User = function(name) {
    this.name = name;
    this.chatroom = null;
};
User.prototype.send = function(message, to) {
    this.chatroom.send(message, this, to);
};
User.prototype.recieve = function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
};
// =====================================
const Chatroom = function() {
    let users = {};

    function register(user) {
        users[user.name] = user;
        user.chatroom = this;
    }

    function send(message, from, to) {
        if (to) {
            // single user message
            to.recieve(message, from.name);
        } else {
            // mass message
            for (var key in users) {
                if (users[key] !== from) {
                    users[key].recieve(message, from);
                }
            }
        }
    }
    return {
        register: register,
        send: send,
    };
};
// =====================================
const brad = new User('Brad');
const john = new User('John');
const sara = new User('Sara');
const chatroom = new Chatroom();
// ==============================
chatroom.register(brad);
chatroom.register(john);
chatroom.register(sara);
// ==============================
brad.send('Hello John', john);
john.send('Hello Brad', brad);
sara.send('Hello Everyone!!!');
