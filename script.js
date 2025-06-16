let username = document.getElementById('username');
let cfrating = document.getElementById('cfsubmit');
let ratingDiv = document.getElementById('ratingDiv');

cfrating.addEventListener('click', function(event) {
    let input = username.value;
    if (ValidateInput(input)) {
        let profileURL = GetURL(input, 'Codeforces');
        if (profileURL) {
            console.log(profileURL);
            fetch(profileURL)
            .then(resp => {
                if (resp.status === 400) {
                    alert('User not found');
                    return null;
                }
                return resp.json();
            })
            .then(json => {
                let result = json.result.at(-1);
                // console.log(result);
                ratingDiv.innerHTML = `Current Codeforces Rating <strong>${result.newRating}</strong>`;
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            alert('URL is not formed well');
        }
    }
})

function ValidateInput(input) {
    if (input === '') {
        alert('Enter non-empty username.');
    }
    return input !== '';
}

function GetURL(username, platform) {
    if (platform == 'Codeforces') {
        return `https://codeforces.com/api/user.rating?handle=${username}`;
    }
    return '';
}