const http = new easyHTTP();
const http1 = new easyHTTP();

// Get posts
// http.get('http://localhost:4500/groups',
//     function (error, data) {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log(data);
//         }
//     });

// Get single post
// http.get('http://localhost:4500/groups/3',
//     function (error, data) {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log(data);
//         }
//     });

// Create a post
const data = {
    "name": "Ibrahim Abdeen team",
    "user_id": 13
};

// Create a single post
// http.post('http://localhost:4500/groups', data,
//     function (error, data) {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log(data);
//         }
//     });

// Update a single post
// http.put('http://localhost:4500/groups/6', data,
//     function (error, data) {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log(data);
//         }
//     });

// Delete single post
http.delete('http://localhost:4500/groups/3',
    function (error, data) {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    });