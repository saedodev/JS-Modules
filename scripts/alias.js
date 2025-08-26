// penggunaan alias dengan menggunakan variable yang sama dengan multi-export.js
function sayMyName(namaku) {
    console.log(`Namaku adalah ${namaku}`);
}

class Act {
    constructor(henshin) {
        if (henshin) {
            this.message = "Dengan kekuatan bulan aku akan menghukummu!";
        } else {
            this.message = "aku turu";
        }
    }
}

const berubah = new Act(true);
const gagalberubah = new Act(false);

console.log(berubah.message);

export { sayMyName, Act, berubah, gagalberubah };