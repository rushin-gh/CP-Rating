let username = document.getElementById('username');
let cfrating = document.getElementById('cfsubmit');
let ratingDiv = document.getElementById('ratingDiv');
let userContestHistory = document.getElementById('contestHistory');

username.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
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
                    let result = json.result;
                    
                    let finalResult = '';
                    for (let record of result) {
                        let delta = record.newRating - record.oldRating;
                        finalResult += 
                        `<tr>
                        <td>${record.contestId}</td>
                        <td>${record.contestName}</td>
                        <td>${record.rank}</td>
                        <td>${record.oldRating}</td>
                        <td>${record.newRating}</td>
                        <td style="background-color: ${delta == 0 ? white : (delta > 0 ? '#96e693' : '#e69393')}">${delta}</td>
                        </tr>`
                    }
                    
                    userContestHistory.innerHTML = finalResult;
                })
                .catch(err => {
                    console.log(err);
                });
            } else {
                alert('URL is not formed well');
            }
        }
    }
});

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