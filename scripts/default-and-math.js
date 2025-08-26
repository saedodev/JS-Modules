export const title = "Belajar Default dengan perkalian dan pembagian"

export default class {
    constructor(first, second) {
        this.first  = first;
        this.second = second;
        this.kali = first * second;
        this.bagi = first / second;
    }

    hasil() {
        console.log(`Hasil dari ${this.first} dikali ${this.second} adalah ${this.kali} dan pembagiannya adalah ${this.bagi}`);
    }
}