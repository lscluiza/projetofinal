function validationForm() {
    let validationCode = document.forms['register']['code'].value;
    let validationTitle = document.forms['register']['title'].value;
    let validationDirector = document.forms['register']['director'].value;
    let validationDate = document.forms['register']['date'].value;
    let validationAct = document.forms['register']['actlead'].value;
    let validationRating = document.forms['register']['rating'].value;
    let validationRadio = document.forms['register']['radio'].value;

    if(validationCode == "") {
        alert("O campo código deve ser preenchido");
        return false;
    }
    if(validationTitle == "") {
        alert("O título deve ser preenchido")
        return false;
    }
    if(validationDirector == "") {
        alert("O campo Diretor deve ser preenchido")
        return false;
    }
    if(validationDate == "") {
        alert("O campo data deve ser preenchido")
        return false;
    }
    if(validationAct == "") {
        alert("O campo ator/atriz deve ser preenchido")
        return false;
    }
    if(validationRating == "") {
        alert("O campo nota no IMDB deve ser preenchido")
        return false;
    }
    if(validationRadio == "") {
        alert("Selecione um gênero")
        return false;
    }
    alert("A validação ocorreu de forma correta");
}

function insert() {
    let code = document.forms['register']['code'].value;
    let title = document.forms['register']['title'].value;
    let director = document.forms['register']['director'].value;
    let date = document.forms['register']['date'].value;
    let actlead = document.forms['register']['actlead'].value;
    let rating = document.forms['register']['rating'].value;
    let radio = document.forms['register']['radio'].value;

    let insert = window.document.getElementById("insertRow");

    insert.innerHTML = `
    <th scope='row'>${code}</th>
    <td>${title}</td>
    <td>${director}</td>
    <td>${date}</td>
    <td>${actlead}</td>
    <td>${rating}</td>
    <td>${radio}</td>
    `;
}