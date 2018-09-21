/**
 * Easy http library
 * version: 3.0.0
 * Author: Mohamed mahdy
 * Date: 21-09-2018
 */

class EasyHTTP {
    // MAKE GET request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // MAKE POST request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // MAKE PUT request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // MAKE DELETE request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache",
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
        const resData = (response.ok === 'true' ? 'Resource Deleted' : 'Error: ' + response.status);
        return resData;
    }
}
