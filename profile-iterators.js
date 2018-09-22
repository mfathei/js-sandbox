const data = [{
    id: 1,
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
}, {
    id: 2,
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
}, {
    id: 3,
    name: 'John Doe',
    age: 33,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
}];
document.getElementById('next').addEventListener('click', nextProfile);
const profiles = profileIterator(data);
// Show first profile
nextProfile();

function nextProfile() {
    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {
        let output = `
  <ul class="list-group">
    <li class="list-group-item">ID: ${currentProfile.id}</li>
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
  </ul>
  `;
        document.getElementById('profileDataDisplay').innerHTML = output;
        document.getElementById('profileImageDisplay').innerHTML = `<img src="${currentProfile.image}" />`;
    } else {
        window.location.reload();
    }
}

function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return (nextIndex < profiles.length) ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            };
        }
    };
}
