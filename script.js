let kontent = document.querySelector(".kontent");
let emoji = document.querySelector(".emoji");
let emojies = document.querySelectorAll("p");
let btn = document.querySelector("button");
let blk = document.querySelectorAll(".blok")

blk.forEach(element => {
    element.addEventListener("click", () => {
        blok.forEach(e => e.classList.remove('selected'));
        element.classList.add('selected');
    });
});
btn.addEventListener("click", () => {
    let selectedEmo = document.querySelector(".blok.selected");


    if (selectedEmo) {
        if (selectedEmo.classList.contains("unhappy")) {
            kontent.style.backgroundColor = "red";
            selectedEmo.style.backgroundColor = "red";
        } else if (selectedEmo.classList.contains("neutral")) {
            kontent.style.backgroundColor = "blue";
            selectedEmo.style.backgroundColor = "blue";
        } else if (selectedEmo.classList.contains("happy")) {
            kontent.style.backgroundColor = "green";
            selectedEmo.style.backgroundColor = "green";
        }
        let selectedEmo1 = document.querySelector(".blok.selected p");
        emoji.innerHTML = selectedEmo1.innerHTML;

        blk.forEach(element => {
            if (element !== selectedEmo) {
                element.remove();
            }
        });

        btn.innerText = "Thanks for feedback";
        btn.style.fontSize = "25px";
        btn.style.backgroundColor = "gray";
        btn.style.padding = "10px";
        btn.style.borderRadius = "5px"
    }
});