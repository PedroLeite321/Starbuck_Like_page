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

        if(bg == "green")   {

            greenCircle.style.background = "linear-gradient(to right, #003300 0%, #00cc66 100%)";
            sBtext.style.color = "rgb(55, 100, 55)"
            greenCupImg.style.display = "flex";
            pinkCupImg.style.display = "none";
            strawCupImg.style.display = "none";

        }
        else if(bg == "pink")   {

            greenCircle.style.background = "linear-gradient(to right, #cc66ff 5%, #ff99cc 85%)";
            sBtext.style.color = "rgb(175, 44, 92) ";
            pinkCupImg.style.display = "flex";
            greenCupImg.style.display = "none";
            strawCupImg.style.display = "none";

        }
        else if(bg == "strawberry") {

            greenCircle.style.background = "linear-gradient(to left, #ffccff 5%, #ff66ff 85%)";
            sBtext.style.color = "rgb(254, 144, 212)";
            strawCupImg.style.display = "flex";
            pinkCupImg.style.display = "none";
            greenCupImg.style.display = "none";
            
        }
    }
}
getDifferentCup()