 function input(char) {
    const display = document.getElementById("que");

    // Prevent multiple consecutive dots
    if (char === ".") {
        const current = display.value;
        // Prevent if last character is already a dot
        if (current.slice(-1) === ".") {
            return;
        }

        // Prevent multiple dots in the same number (e.g., "3.14.5")
        const parts = current.split(/[\+\-\*\/]/); // split by operators
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes(".")) {
            return;
        }
    }

    if (char === "=") {
        try {
            const result = eval(display.value);
            display.value = result;
        } catch (e) {
            display.value = "Error";
        }
    } else {
        display.value += char;
    }
}

function cancel(){
    const display=document.getElementById("que");
    display.value="";
}