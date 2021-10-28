// This changes the text color in the Buck Mulligan text chunk.

function changeColor() {
        // buckMulliganText = document.getElementById("firstTextBlock");
        const buckMulliganText = document.querySelector(".textChunkOne");
        buckMulliganText.style.color = "red";
}

// This changes the entire page background to yellow when someone presses the "Y" key.
window.addEventListener("keydown", event => {
        if (event.key === "y") {
        document.body.style.background = "yellow";
}
});

// This changes the page background to the default when someone releases the "Y" key.
window.addEventListener("keyup", event => {
        if (event.key === "y") {
                document.body.style.background = "";
        }
});

// This changes the page background when someone checks the checkbox. When unchecked, the page background color is the default.
let checkbox = document.querySelector("#purple");
checkbox.addEventListener("change", () => {
        document.body.style.background =
            checkbox.checked ? "mediumpurple" : "";
});