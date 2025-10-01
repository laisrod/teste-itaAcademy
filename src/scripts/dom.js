/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 

let history = [];

export function showResult (result){
    document.querySelector('#result p').textContent = result;

}

