//process.stdout.write("Something \n") //escrever algo de saída, é o que o console.log faz por debaixo dos panos, adicionando o \n ao final da linha

const questions = [
    "What've I learned today?",
    "What've get me angry?",
    "What should I do to become better?",
    "What've get me happy today?",
    "How much people I've helped today?",
]

const ask = function (index = 0) {
    process.stdout.write(questions[index] + '\n')
}

ask()

process.stdin.on("data", data => { //.on fica aguardando a inserção de um novo dado
    answers.push(data.toString().trim()) //toString converte o dado para String e trim() remove os espaçamentos antes ou depois da string
    if (answers.length < questions.length) {
        ask(answers.length) //cada vez que uma resposta for adicionada, é adicionado + 1 ao length, assim como ocorre em um i++, sendo assim, a próxima mensagem do questions vai ser impressa
    } else {
        process.stdout.write(answers.toString())
        process.exit() 
    }
})

const answers = []

process.on('exit', () => {
    console.log(
        `Cool!

        What you have learned today:
        ${answers[0]}

        What have bothered you:
        ${answers[1]}

        What have jollied you:
        ${answers[2]}

        What should you do to became better:
        ${answers[3]}

        You have assisted ${answers[4]} today! That's awesome!

        Comeback tomorrow for more!
    `)
})