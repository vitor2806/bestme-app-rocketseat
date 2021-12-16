//process.stdout.write("Something \n") //escrever algo de saída, é o que o console.log faz por debaixo dos panos, adicionando o \n ao final da linha

const questions = [
    "What've I learned today?",
    "What've get me angry?",
    "What should I do to become better?",
    "What've get me happy today?",
    "How much people I've helped today?",
]

const ask = function (index = 0) {
    return process.stdout.write(questions[index] + '\n')
}

ask()

process.stdin.on("data", data => { //.on fica aguardando a inserção de um novo dado
    process.exit() //process.stdout.write(data.toString().trim()) //toString converte o dado para String e trim() remove os espaçamentos antes ou depois da string
})