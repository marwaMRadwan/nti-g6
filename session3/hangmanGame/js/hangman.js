class HangMan{
    constructor(word){
        this.word = word.toLowerCase().split('')
        console.log(this.word)
        this.remainingGuses = word.length + 3
        this.gusses = []
        this.score =0
        this.gameStatus = 'still playing'
    }
    makeGuess(c){
        let ind = this.word.findIndex(w=>{
            return w == c
        })
        if(ind==-1){this.remainingGuses-=1}
        else {
            this.word.splice(ind,1)
            this.score+=1
        }
    }
}