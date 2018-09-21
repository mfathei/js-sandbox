document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

function getText(e) {
    e.preventDefault();

    fetch('data.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        });
}

function getJson(e) {
    e.preventDefault();

    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(group => output += `<li>${group.name}</li>`);
            document.getElementById('output').innerHTML = output;
        });
}

function getExternal(e) {
    e.preventDefault();

    fetch('http://localhost:4500/groups')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(group => output += `<li>${group.name}</li>`);
            document.getElementById('output').innerHTML = output;
        });
}
