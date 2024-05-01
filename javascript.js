// alert('ufufiu');
const button = document.querySelector('form');
console.log (button)

button.addEventListener("submit", function(ev){
    ev.preventDefault()
    console.log(ev)
    const nomeproprietario=document.querySelector('#nomeproprietario').value;
    const numeroapartamento=document.querySelector('#numeroapartamento').value;
    const blocoapartamento=document.querySelector('#blocoapartamento').value;
    const modeloveiculo=document.querySelector('#modeloveiculo').value;
    const corveiculo=document.querySelector('#corveiculo').value;
    const numerovaga=document.querySelector('#numerovaga').value;
    console.log({nomeproprietario, numeroapartamento, blocoapartamento, modeloveiculo, corveiculo})

});

const form = document.addEventListener("submit", function(ev){
    ev.preventDefault()
    exibirPopup();
});

function exibirPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');
  
    const mensagem = document.createElement('p');
    mensagem.textContent = 'Cadastro realizado com sucesso!';
  
    const botaoFechar = document.createElement('button');
    botaoFechar.textContent = 'Fechar';
    botaoFechar.addEventListener('click', function() {
      popup.remove();
    });
  
    popup.appendChild(mensagem);
    popup.appendChild(botaoFechar);
  
    document.body.appendChild(popup);
  }
