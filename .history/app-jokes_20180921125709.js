document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    e.preventDefault();
    console.log('hdfsgfbh');
    const xhr = new XMLHttpRequest();

    const count = document.getElementById('count').value;

    xhr.open('GET', `http://api.icndb.com/jokes/random/${count}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            let output = '';
            const response = this.responseText;
            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    output += `
                    <ul>
                        <li>${joke.joke}</li>
                    </ul>
                    `;
                });

            }

            document.querySelector('.jokes-output').innerHTML = output;
        }
    }

    xhr.send();
}
