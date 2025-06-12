let username = document.getElementById('username');
let cfrating = document.getElementById('cfsubmit');
let ccrating = document.getElementById('ccsubmit');

// cf Profile API -> https://codeforces.com/api/user.rating?handle=rushin_cf
// cc Profile API -> https://codechef-api.vercel.app/handle/rushin_cc

cfrating.addEventListener('click', function(event) {
    let input = username.value;
    if (ValidateInput(input)) {
        
    }
})

ccrating.addEventListener('click', function(event) {
    let input = username.value;
    if (ValidateInput(input)) {
        
    }
})

function ValidateInput(input) {
    alert('Enter non-empty username.');
    return input !== '';
}