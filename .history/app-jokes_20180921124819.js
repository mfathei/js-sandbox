document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes() {
    const xhr = new XMLHttpRequest();

    const count = document.getElementById('count').value;

    xhr.open('GET', `http://api.icndb.com/jokes/random/${count}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responsetext);
        }
    }

    xhr.send();
}
