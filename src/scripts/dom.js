/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 

let history = [];

export function showResult (result){
    document.querySelector('#result p').textContent = result;
    history.push(result);
    document.getElementById('historyList').innerHTML = history.map(item => `<div>${item}</div>`).join('');
}

export function clearInput(){
    document.getElementById('numberInput').value='';
}
