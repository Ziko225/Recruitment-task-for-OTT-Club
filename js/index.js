{
    document.getElementById("channal").onclick = () => {
        document.querySelector(".tvCards__cards").classList.toggle("show");
    };

    document.querySelectorAll(".question__button",).forEach((e) => {
        e.onclick = () => {
            document.getElementById(`a${e.id}`).classList.toggle("invisible");
        };
    });
}