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
        if(this.gameStatus=='still playing'){
        let l1 = this.word.length
            this.word = this.word.filter(w=>{
            return w != c
        })
        let l2 = this.word.length
        if(l1==l2){
            this.remainingGuses-=1
            if(this.remainingGuses == 0) this.gameStatus = "loser"
        }
        else {
           // this.word.splice(ind,1)
            this.score+=(l1-l2)
            if(this.word.length==0) this.gameStatus="win"
        }
    }
    }
}