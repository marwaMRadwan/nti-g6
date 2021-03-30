getApiWord((data,err)=>{
    if(err) console.log(err)
    else{
        word = document.querySelector('#word')
        h1 = new HangMan(data)
        word.innerHTML = `<h3>word : ${data}</h3> <h4>Score: ${h1.score} - remaining guses: ${h1.remainingGuses} - game status: ${h1.gameStatus}</h4>`
        console.log(h1)
        window.addEventListener('keypress', (e)=>{
            console.log(e.key)
            h1.makeGuess(e.key)
            console.log(h1)
            word.innerHTML = `<h3>word : ${data}</h3> <h4>Score: ${h1.score} - remaining guses: ${h1.remainingGuses} - game status: ${h1.gameStatus}</h4>`

        })
}
})

