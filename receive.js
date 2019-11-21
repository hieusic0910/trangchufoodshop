let data = [];
let temp = [];
let p = 0;
let localCart = localStorage.getItem('cart')
if (localCart) {
    data = JSON.parse(localCart);
}

function delivery(a) {
    let m = document.getElementsByClassName(a);
    temp = [m[1].innerText, m[2].innerText, m[0].src, 1];
    if (data.length != 0) {
        let track = 0;
        for (let i = 0; i < data.length; i++) {
            let b = data[i].pop();
            let c = temp.pop();
            if (data[i].toString() == temp.toString()) {
                b++;
                track++;
            };
            data[i].push(b);
            temp.push(c);
        }
        if (track == 0) { data.push(temp); }
    } else { data.push(temp); }
    localStorage.setItem('cart', JSON.stringify(data));
}