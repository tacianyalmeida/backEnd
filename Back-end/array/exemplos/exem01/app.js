 const listaPacientes = []
 //entrada de dados 

const idPaciente = document.getElementById('idPaciente')

const adicionar = () =>{
    const paciente  = idPaciente.value
    if(paciente === ''){
        alert ('Preencha os dados corretamente')
        return
    }
};
listaPacientes.push(idPaciente)
btnAdicionar.addEventListener('click' , adicionar)


//ações
const btnAdicionar = document.getElementById('btnAdicionar ')
const btnUrgencia = document.getElementById('btnUrgencia ')
const btnAtender = document.getElementById('btnAtender')

//saida de dados 
const outAtendimento = document.getElementById('outAtendimento ')
const outLista = document.getElementById('outLista')