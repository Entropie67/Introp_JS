let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    let input = document.getElementById("in").value;
    let main = document.getElementById("main");
    console.log(input);
    main.innerHTML += `<p>Vous souhaitez développer : <span>${input}</span></p>`
    main.innerHTML += `<div id="reponse"> ${dev(...traitement(input))}</div>`;
});

let traitement = (chaine) => {
    console.log(`ma fonction a reçu ${chaine}`);
    // https://www.w3schools.com/jsref/jsref_split.asp
    chaine = chaine.split("+");
    let a = chaine[0].slice(1);
    chaine = chaine[1].split(")");
    let b = chaine[0];
    let n = chaine[1].slice(1);
    console.log(a,"-", b, "-", n);
    // faire des trucs
    return [a, b, n];
}

let dev = (a, b, n) => {
    console.log(a, b, n);
    let reponse = '';
    for (let i = 0; i <= n; i++){
        reponse += a +"^"+ i.toString()+b +"^"+ (n-i).toString()+" + ";
    }
    return reponse.slice(0, -3);
}