var reader = require('readline-sync')

class Game {
    name: string
    genre: string
    minimalAge: number

    constructor(Gamename: string, Gamegenre: string, PlayminAge) {
        this.name = Gamename
        this.genre = Gamegenre
        this.minimalAge = PlayminAge
    }
    protected getData(): void{
        console.log(`The game ${this.name} from the game genre of ${this.genre} is a sucess, for ${this.minimalAge} years or more`)
    }
    protected setGame(): void{
        let nameUpdate = reader.question("What´s the game´s name? ")
        let genreUpdate = reader.question("what´s the game´s genre? ")
        let minAgeUpdate = reader.question("What´s the game´s minimal age restriction?")
        this.name = nameUpdate
        this.genre = genreUpdate
        this.minimalAge = minAgeUpdate
    }
}
class VideoGame extends Game {
    name: string
    genre: string
    minimalAge: number
    plataformas: string

    super(Gamename: string, Gamegenre: string, PlayminAge: number, plataformasDispo: string){
        this.name = Gamename
        this.genre = Gamegenre
        this.minimalAge = PlayminAge
        this.plataformas = plataformasDispo
    }
    protected getDataVideoGame(): void{
        console.log(`The game ${this.name} from the game genre of ${this.genre} is a sucess, can be playd into the plataforms ${this.plataformas}, omly for ${this.minimalAge} years or more`)
    }
    protected setVideoGame(): void{
        let nameUpdate = reader.question("What´s the game´s name? ")
        let genreUpdate = reader.question("what´s the game´s genre? ")
        let minAgeUpdate = reader.question("What´s the game´s minimal age restriction?")
        let plataformsUpdate = reader.question("What are the plataforms the game is playable")
        this.name = nameUpdate
        this.genre = genreUpdate
        this.minimalAge = minAgeUpdate
        this.plataformas = plataformsUpdate
    }
}
class TableGame extends Game {
    playersMax: number
    super(Gamename: string, Gamegenre: string, PlayminAge, playersMax: number) {
        this.name = Gamename
        this.genre = Gamegenre
        this.minimalAge = PlayminAge
        this.playersMax = playersMax
    }
    protected getData(): void{
        console.log(`The games ${this.name} from the game genre of ${this.genre} is a sucess, it´s table game has a max playes of 3, but much more fun, on only for ${this.minimalAge} years or more`)
    }
    protected setTableGame(): void{
        let nameUpdate = reader.question("What´s the game´s name? ")
        let genreUpdate = reader.question("what´s the game´s genre? ")
        let minAgeUpdate = reader.question("What´s the game´s minimal age restriction? ")
        let playmaxUpdate = reader.question("What is the players limit? ")
        this.name = nameUpdate
        this.genre = genreUpdate
        this.minimalAge = minAgeUpdate
        this.playersMax = playmaxUpdate
    }
}
