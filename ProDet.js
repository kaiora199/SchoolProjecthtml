const buttons = document.getElementsByClassName("size");

var but0 = buttons[0]

but0.addEventListener('click', function() {
    if (but0.className != 'size sizeOn') {
        but0.classList.toggle('sizeOn');
        but1.classList.remove('sizeOn');
        but2.classList.remove('sizeOn');
        but3.classList.remove('sizeOn');
        but4.classList.remove('sizeOn');
    } else { 
        but0.classList.remove('sizeOn');
    }
}
);

var but1 = buttons[1]

but1.addEventListener('click', function() {
if (but1.className != 'size sizeOn') {
    but0.classList.remove('sizeOn');
    but1.classList.toggle('sizeOn');
    but2.classList.remove('sizeOn');
    but3.classList.remove('sizeOn');
    but4.classList.remove('sizeOn');
} else { 
    but1.classList.remove('sizeOn');
}
}
);

var but2 = buttons[2]

but2.addEventListener('click', function() {
    if (but2.className != 'size sizeOn') {
        but0.classList.remove('sizeOn');
        but1.classList.remove('sizeOn');
        but2.classList.toggle('sizeOn');
        but3.classList.remove('sizeOn');
        but4.classList.remove('sizeOn');
    } else { 
        but2.classList.remove('sizeOn');
    }
    }
    );

var but3 = buttons[3]

but3.addEventListener('click', function() {
    if (but3.className != 'size sizeOn') {
        but0.classList.remove('sizeOn');
        but1.classList.remove('sizeOn');
        but2.classList.remove('sizeOn');
        but3.classList.toggle('sizeOn');
        but4.classList.remove('sizeOn');
    } else { 
        but3.classList.remove('sizeOn');
    }
    }
    );

var but4 = buttons[4]

but4.addEventListener('click', function() {
    if (but4.className != 'size sizeOn') {
        but0.classList.remove('sizeOn');
        but1.classList.remove('sizeOn');
        but2.classList.remove('sizeOn');
        but3.classList.remove('sizeOn');
        but4.classList.toggle('sizeOn');
    } else { 
        but4.classList.remove('sizeOn');
    }
    }
    );