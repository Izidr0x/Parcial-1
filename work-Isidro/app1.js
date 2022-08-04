var i=0;
const gusto=[];

function mostrarBtnEdit(){
    document.getElementById('btn-edit').style.display='block';
}

function addRows() {
    gusto.push(document.getElementById('gustos').value);
    const tbody = document.querySelector('tbody');
    tbody.innerHTML += '<tr id="tr'+i+'">\
                        <th scope="row" id="row'+ i+'">'+ gusto[i] +'<td>\
                            0\
                        </td>\
                        <td><a href="#" onclick="editar('+i+')">Editar</a></td>\
                      </tr>';
    i+=1;
}

function editar(i) {
    const edit=document.getElementById('tr'+i);
    edit.innerHTML = '<th scope="row"><input type="text"value="'+gusto[i]+'"><td><input type="text" value="0" id="porcentaje'+i+'"> </td><td>En edición</td>';
    mostrarBtnEdit();
}


