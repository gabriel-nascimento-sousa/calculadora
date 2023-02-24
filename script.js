function insert(num){
    let numero = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML=numero+num;
}
function limpar(){
    document.getElementById('screen').innerHTML = '';
}
function calcular(){
    let screen = document.getElementById("screen").innerHTML;
    if(screen){
        document.getElementById('screen').innerHTML = eval(screen);
    }
}
function delet(){
    let screen = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = screen.substring(0, screen.length -1);
  }