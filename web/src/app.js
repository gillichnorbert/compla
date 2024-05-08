/*
* File: app.js
* Author: Gillich Norbert
* Copyright: 2024, Gillich Norbert
* Group: Szoft I-2-N
* Date: 2024-05-08
* Github: https://github.com/gillichnorbert/
* Licenc: GNU GPL
*/

const complainBody = document.getElementById("complainBody");

const state = {
    host:  'http://localhost:8000',
    endpoint: "complains",
    id: 0,
    description: "",
    complainant: "",
    products: "",
    type: "",
    mode: "get"
}

function getComplains() {
    let url =state.host+"/"+state.endpoint
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        state.complaints = result;
        complainBody.textContent = "";
        renderComplains(result);
    })
}

function renderComplains(compList) {
    compList.forEach(comp => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${comp.id}</td>
        <td>${comp.description}</td>
        <td>${comp.complainant}</td>
        <td>${comp.products}</td>
        <td>${comp.type}</td>
        `
        complainBody.appendChild(tr)
    });

}

getComplains();