function goToDash(name) {
    window.location.href = window.location.href + 'DashBoard/index.html?name='+name;
    // console.log(window.location)
}

function tryToLogin(e){
    
    // e.preventDefault();
    const name = document.getElementById('userName').value;
    const password = document.getElementById('passWord').value
    goToDash(name);
}

function goSignUp() {
    window.location.href = window.location.href + 'signUp';
}