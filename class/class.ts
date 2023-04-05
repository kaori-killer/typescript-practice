type Words = {
    [key:string]: string // key value
}

class Dict {

     // property를 constructor로 바로 초기화하지 않게 하기 위해서 수동으로 초기화
     private words: Words
     constructor(){
        this.words = {}
     }

     // :Word <- 클래스를 타입처럼 쓸 수 있다.
     add(word:Word){
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
     }
    def(word:Word){
        return word.def;
    }
    update(word:Word){
        if(this.words[word.term] === undefined) { return; }
        this.words[word.term] = word.def;
    }
    del(word:Word){
        if(this.words[word.term] === undefined) { return; }
        delete this.words[word.term];
    }
}

class Word {
    constructor(
        public term: string,
        public def: string,
    ) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();
dict.add(kimchi);
dict.def(kimchi);