let valor = 0;

function mais() {
    valor++
    mostrador()
}

function menos() {
    valor--
    mostrador()
}

function atual() {
    mostrador()
    alert("hoje é dia: " + hoje);
    console.log("easter egg")
    console.log("<3")
}

function mostrador() {
    const p = document.querySelector("#wlw")
            p.innerText = valor

}


mostrador()

const data = new Date()

const dia = String(data.getDate()).padStart(2, '0')
const mes = String(data.getMonth() + 1).padStart(2,'0')
const ano = data.getFullYear()

const hoje = `${dia}/${mes}/${ano}`

console.log(hoje)

