const getDifferentCup   = () => {
    let holdCurrentCup = "";
    const greenCup = document.getElementById("greenCup");
    const pinkCup = document.getElementById("pinkCup");
    const strawberryCup = document.getElementById("strawberryCup");
    const getBgCup = () => {
        greenCup.addEventListener("click", () => {
            holdCurrentCup = "green";
            setBg(holdCurrentCup);
        });

        pinkCup.addEventListener("click", () =>     {
            holdCurrentCup = "pink";
            setBg(holdCurrentCup);
        });

        strawberryCup.addEventListener("click", () =>   {
            holdCurrentCup = "strawberry";
            setBg(holdCurrentCup);
        });

    }
    getBgCup()
    const setBg = (bg) =>  {
        const greenCircle = document.getElementById("greenCircle");
        const sBtext = document.getElementById("Starbucks");
        const greenCupImg = document.getElementById("gC");
        const pinkCupImg = document.getElementById("pC");
        const strawCupImg = document.getElementById("sC");
        if(bg == "green"){
            greenCircle.style.backgroundColor = "rgb(55, 100, 55)";
            sBtext.style.color = "rgb(55, 100, 55)"
            greenCupImg.style.display = "flex";
            pinkCupImg.style.display = "none";
            strawCupImg.style.display = "none";
        }
        else if(bg == "pink")   {
            greenCircle.style.backgroundColor = "pink";
            sBtext.style.color = "pink";
            pinkCupImg.style.display = "flex";
            greenCupImg.style.display = "none";
            strawCupImg.style.display = "none";
        }
        else if(bg == "strawberry") {
            greenCircle.style.backgroundColor = "rgb(175, 44, 92)";
            sBtext.style.color = "rgb(175, 44, 92)";
            strawCupImg.style.display = "flex";
            pinkCupImg.style.display = "none";
            greenCupImg.style.display = "none";
        }
    }
}
getDifferentCup()