export default class {
    constructor(first, second) {
        this.first  = first;
        this.second = second;
        this.kurang = first - second;
    }

    hasil() {
        console.log(`Hasil dari ${this.first} dikurang ${this.second} adalah ${this.kurang}`);
    }
}