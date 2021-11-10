function prevent(e){
    e.preventDefault();
    document.getElementById('final').style.visibility = 'visible';
}
function ok(){
    
    document.getElementById('final').style.visibility = 'hidden';
}