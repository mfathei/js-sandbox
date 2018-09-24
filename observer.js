/**
 * EventObserver
 */
function EventObserver() {
    this.observers = [];
}
EventObserver.prototype.subscribe = function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
};
EventObserver.prototype.unsubscribe = function(fn) {
    this.observers = this.observers.filter(function(item) {
        if (item !== fn) {
            return item;
        }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  };
EventObserver.prototype.fire = function() {
    this.observers.forEach(function(callback) {
        callback.call();
    });
};
// =============================================
const click = new EventObserver();
// Event listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurrMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurrMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurrSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurrSeconds);
});
document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});
// Click handler
function getCurrMilliseconds() {
    console.log(`CurrMilliseconds: ${new Date().getMilliseconds()}`);
}

function getCurrSeconds() {
    console.log(`CurrSeconds: ${new Date().getSeconds()}`);
}
