const characters = [
    { name: "Ayam Superhero", dialog: "Tenang, bro! Gue di sini buat selamatin lo dari makanan cepat saji!" },
    { name: "Cermin Bicara", dialog: "Eh, lo pasti bingung, kan? Gue juga bingung!" },
    { name: "Raja Sayuran", dialog: "Sayur itu penting, bro! Tapi senyummu lebih penting!" },
    { name: "Kucing Ninja", dialog: "Gak usah takut, gue cuma mau main, bukan nyuri ikan!" },
    { name: "Bebek Gokil", dialog: "Duh, kenapa lo kayak bebek nyasar gitu?!" },
    { name: "Tukang Pipa", dialog: "Masalah lo kayak pipa bocor, bro! Ayo kita benahi!" },
    { name: "Gurita Pinter", dialog: "Gue bisa ngelakuin 8 hal sekaligus! Lo bisa?" },
    { name: "Ninja Makan", dialog: "Misi gue: Ninjaku di restoran! Makan sampe kenyang!" },
    { name: "Panda Ngantuk", dialog: "Gue pengen tidur, tapi dulu, kita harus ngobrol!" },
    { name: "Kucing Pemalas", dialog: "Ayo, kita santai-santai aja, bro. Hidup itu indah!" },
];

let playerName = "";
let currentScene = 0;

function startGame() {
    playerName = document.getElementById("playerName").value.trim();
    if (!playerName) {
        alert("Masukkan nama dulu, bro!");
        return;
    }

    document.getElementById("dialog").innerHTML = ""; // Clear previous dialog
    document.getElementById("choices").style.display = "none";
    document.getElementById("ending").style.display = "none";
    document.getElementById("playerName").value = ""; // Clear input

    showDialog();
}

function showDialog() {
    const dialogElement = document.getElementById("dialog");
    dialogElement.innerHTML = ""; // Clear previous dialog

    // Menampilkan dialog berdasarkan scene
    switch (currentScene) {
        case 0:
            dialogElement.innerHTML = `<strong>${characters[0].name}:</strong> ${characters[0].dialog}<br> "Ayo kita mulai petualangan ini!"`;
            addChoices(["Ayo, lanjut!", "Gue mau pulang!"], [1, 2]);
            break;
        case 1:
            dialogElement.innerHTML = `<strong>${characters[1].name}:</strong> ${characters[1].dialog}<br> "Lo siap untuk ngebahas hal-hal aneh?"`;
            addChoices(["Nanya lagi dong!", "Gue mau main!"], [3, 4]);
            break;
        case 2:
            dialogElement.innerHTML = `<strong>${characters[2].name}:</strong> ${characters[2].dialog}<br> "Ingat, sayur itu penting!"`;
            addChoices(["Gue mau tahu lebih banyak!", "Males ah!"], [5, 6]);
            break;
        case 3:
            dialogElement.innerHTML = `<strong>${characters[3].name}:</strong> "Eh, lo denger suara aneh ga?"<br> "Mungkin ada monster!"`;
            addChoices(["Iya, mau cek!", "Gak peduli!"], [7, 8]);
            break;
        case 4:
            dialogElement.innerHTML = `<strong>${characters[4].name}:</strong> "Gue punya rahasia, mau denger?"<br> "Gak banyak yang tau!"`;
            addChoices(["Gue mau!", "Gak mau deh!"], [9, 10]);
            break;
        case 5:
            dialogElement.innerHTML = `<strong>${characters[5].name}:</strong> "Pipa bocor itu kayak masalah hidup, bro!"<br> "Lo pernah ngalamin?"`;
            addChoices(["Pernah, susah banget!", "Enggak sih, lo doang!"], [11, 12]);
            break;
        case 6:
            dialogElement.innerHTML = `<strong>${characters[6].name}:</strong> "Gue bisa bikin lo ngakak, tapi ada syaratnya!"<br> "Apa syaratnya?"`;
            addChoices(["Coba aja!", "Gak mau, males!"], [13, 14]);
            break;
        case 7:
            endGame("SELAMAT KAMU ADALAH RAJA KETIDAKPASTIAN!!!");
            break;
        case 8:
            endGame("KAMU DEWA KON....(maaf kuota anda habis)");
            break;
        case 9:
            endGame("RAHASIA TERBESAR: LO ADALAH PANGKALAN SAYUR!!!");
            break;
        case 10:
            endGame("KAMU ADALAH DEWA CEMILAN!!!");
            break;
        case 11:
            endGame("Hidup ini kayak pipa, kadang bocor, kadang lancar!");
            break;
        case 12:
            endGame("Enggak ada masalah yang enggak bisa diselesaikan, bro!");
            break;
        case 13:
            endGame("Coba tebak, berapa banyak kucing yang butuh tidur? Jawabnya, banyak banget!");
            break;
        case 14:
            endGame("Lo pasti udah tahu, kucing itu bos di rumah!");
            break;
        // Akhiri permainan jika sudah tidak ada scene
        default:
            endGame("KAMU YANG PALING HEBAT!");
            break;
    }
}

function addChoices(choices, scenes) {
    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = ""; // Clear previous choices
    choicesElement.style.display = "block"; // Show choices

    choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.className = "button";
        button.innerHTML = choice;
        button.onclick = () => {
            currentScene = scenes[index];
            showDialog();
        };
        choicesElement.appendChild(button);
    });
}

function endGame(endingMessage) {
    const endingElement = document.getElementById("ending");
    let finalMessage;

    // Pengecualian untuk julukan
    const exceptions = ["rifal", "rival", "rifaldi", "rivaldi", "val", "fal"];
    if (exceptions.includes(playerName.toLowerCase())) {
        finalMessage = "KAMU ADAALAH DEWA KON....(maaf kuota anda habis)";
    } else {
        finalMessage = endingMessage;
    }

    endingElement.innerHTML = finalMessage;
    endingElement.style.display = "block";
    document.getElementById("dialog").innerHTML = ""; // Clear dialog
    document.getElementById("choices").style.display = "none"; // Hide choices
}
