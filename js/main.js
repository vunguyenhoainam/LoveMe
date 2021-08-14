
const yes = () => {
    alert("Pụng Pự cũng yêu Công chúa ❤☺");
}

let run = 1;

const no = () => {
    if (run == 1) {
        document.querySelector(".btn-no").style.left = "300px";
        run = 10;
    }
    else if (run == 10) {
        document.querySelector(".btn-no").style.left = "500px";
        document.querySelector(".btn-no").style.top = "10px";
        run = 12;
    }
    else if (run == 12) {
        document.querySelector(".btn-no").style.left = "-100px";
        document.querySelector(".btn-no").style.top = "200px";
        run = 15;
    }
    else if (run == 15) {
        document.querySelector(".btn-no").style.left = "-50px";
        document.querySelector(".btn-no").style.top = "-300px";
        run = 1;
    }
}

