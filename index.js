var counter = 0;

document.querySelector(".count").textContent = counter;

document.querySelector(".container").addEventListener("click",function(e){
    if(e.target.classList.contains("btn")){
        switch (e.target.id) {
            case "dec":
                counter--
                break;
            case "inc":
                counter ++
                break;
            case "res":
                counter = 0;
            default:
                break;
        }
        document.querySelector(".count").textContent = counter;
    }
});