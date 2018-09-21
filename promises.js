
const posts = [
    { title: "Post One", description: "This is post one" },
    { title: "Post Two", description: "This is post two" }
];

// function createPost(post) {
//     setTimeout(function () {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title} : ${post.description}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: "Post Three", description: "This is post three"});

// getPosts();

// this is good using callbacks
function createPost(post, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);
            const error = false;
            if (error) {
                reject('Something went wrong.');
            } else {
                resolve();
            }
        }, 2000);
    });
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title} : ${post.description}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// using callback
createPost({ title: "Post Three", description: "This is post three" })
    .then(getPosts)
    .catch(function (err) {
        console.error(err);
    });
