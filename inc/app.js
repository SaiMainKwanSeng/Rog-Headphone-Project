var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');

var headphone1 = document.getElementById('headphone1');
var headphone2 = document.getElementById('headphone2');
var headphone3 = document.getElementById('headphone3');

function item_1() {
    if (headphone1.onclick) {
        item1.style.display = 'block';
        item2.style.display = 'none';
        item3.style.display = 'none';
        headphone1.classList.add('active');
        headphone2.classList.remove('active');
        headphone3.classList.remove('active');
    }
}

function item_2() {
    if (headphone1.onclick) {
        item1.style.display = 'none';
        item2.style.display = 'block';
        item3.style.display = 'none';
        headphone1.classList.remove('active');
        headphone2.classList.add('active');
        headphone3.classList.remove('active');
    }
}

function item_3() {
    if (headphone1.onclick) {
        item1.style.display = 'none';
        item2.style.display = 'none';
        item3.style.display = 'block';
        headphone1.classList.remove('active');
        headphone2.classList.remove('active');
        headphone3.classList.add('active');
    }
}