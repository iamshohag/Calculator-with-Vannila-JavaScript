var power = -1;
// 1 is power on -1 is power off. start from power off.
function off() {
    power = -power;
    if (power == -1) {
        document.getElementById("display").value = "";
    } else {
        welcome();
    }

};

function Erase() {
    if (power == -1) {
        document.getElementById("display").value = "";
    } else {
        document.getElementById("display").value = "";
        document.getElementById("display").focus();
    }
};

function welcome() {
    document.getElementById("display").value = "Codded By Sajjad Alam Shohag";
    setTimeout(welcome_end, 2000);
};

function welcome_end() {
    document.getElementById("display").value = "";
    document.getElementById("display").focus();
};


function get(value) {
    if (power == 1) {
        document.getElementById("display").value += value;
    } else {
        document.getElementById("display").value = "";
    }


};

function Result() {
    if (power == 1) {
        var result = 0;
        result = document.getElementById("display").value;
        document.getElementById("display").value = "";
        document.getElementById("display").value = eval(result);
    } else {
        document.getElementById("display").value = "";
    }
};
