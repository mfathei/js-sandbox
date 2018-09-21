/**
 * Easy http library
 */
function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// MAKE GET request
easyHTTP.prototype.get = function (url, callback) {
    const self = this;

    self.http.open('GET', url, true);
    self.http.setRequestHeader('Content-Type', 'application/json');
    self.http.setRequestHeader('Accept', 'application/json');

    self.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status, null);
        }
    }

    self.http.send();
}

// MAKE POST request
easyHTTP.prototype.post = function (url, data, callback) {
    const self = this;

    self.http.open('POST', url, true);
    self.http.setRequestHeader('Content-Type', 'application/json');
    self.http.setRequestHeader('Accept', 'application/json');

    self.http.onload = function () {
        callback(null, self.http.responseText);
    }

    self.http.send(JSON.stringify(data));
}

// MAKE PUT request
easyHTTP.prototype.put = function (url, data, callback) {
    const self = this;

    self.http.open('PUT', url, true);
    self.http.setRequestHeader('Content-Type', 'application/json');
    self.http.setRequestHeader('Accept', 'application/json');

    self.http.onload = function () {
        callback(null, self.http.responseText);
    }

    self.http.send(JSON.stringify(data));
}

// MAKE DELETE request
easyHTTP.prototype.delete = function (url, callback) {
    const self = this;

    self.http.open('DELETE', url, true);
    self.http.setRequestHeader('Content-Type', 'application/json');
    self.http.setRequestHeader('Accept', 'application/json');

    self.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status, null);
        }
    }

    self.http.send();
}