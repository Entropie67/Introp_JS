let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    let input = document.getElementById("in").value;
    let main = document.getElementById("main");
    console.log(input);
    main.innerHTML += `<div id="reponse"> ${traitement(input)}</div>`;
});

let traitement = (chaine) => {
    console.log(`ma fonction a reçu ${chaine}`);
    // faire des trucs
    return "la nouvelle chaine";
}