/**
 * Easy http library
 * version: 2.0.0
 * Author: Mohamed mahdy
 * Date: 21-09-2018
 */

class EasyHTTP {
    // MAKE GET request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // MAKE POST request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // MAKE PUT request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // MAKE DELETE request
    delete(url) {
        return fetch(url, {
            method: 'DELETE',
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache",
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(res => res.json());
    }
}
