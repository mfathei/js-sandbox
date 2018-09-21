const http = new EasyHTTP();

// Get posts
http.get('http://localhost:4500/groups')
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Get single post
http.get('http://localhost:4500/groups/6')
    .then(data => console.log(data))
    .catch(err => console.log(err));


// Create a post data
const data = {
    id: null,
    name: "Ibrahim Abdeen team",
    user_id: 17
};
// Create post
http.post('http://localhost:4500/groups', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Update post
http.put('http://localhost:4500/groups/6', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Delete post
http.delete('http://localhost:4500/groups/18')
    .then(data => console.log(data))
    .catch(err => console.log(err));
