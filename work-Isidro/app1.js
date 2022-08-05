var i=0;
const gustos=[];
const porces=[];
var gusto=0;
var proce=0;
var temp=0;

function mostrarBtnEdit(){
    document.getElementById('btn-edit').style.display='block';
}

function addRows() {
    gustos.push(document.getElementById('gustos').value);
    const tbody = document.querySelector('tbody');
    tbody.innerHTML += '<tr id="tr'+i+'">\
                        <th scope="row" id="row'+ i+'">'+ gustos[i] +'<td>\
                            0\
                        </td>\
                        <td><a href="#" onclick="editar('+i+')" style="text-decoration:none;"><b>Editar</b></a></td>\
                      </tr>';
    i+=1;
}

function editar(i) {
    const edit=document.getElementById('tr'+i);
    edit.innerHTML = '<th scope="row"><input class="form-control" id="gusto'+i+'" type="text"value="'+gustos[i]+'"><td><input class="form-control" type="text" value="0" id="porcentaje'+i+'"> </td><td>En edición</td>';
    porces.push(document.getElementById('porcentaje'+i).value);
    temp=i; 
    mostrarBtnEdit();
}



function enviar() {
    porce=document.getElementById('porcentaje'+temp).value;
    gusto=document.getElementById('gusto'+temp).value;
    window.open(`resultado.html?nombre=${document.getElementById('username').value}&email=${document.getElementById('email').value}&movil=${document.getElementById('phone').value}&gusto=${gusto}&porce=${porce}`);
}

