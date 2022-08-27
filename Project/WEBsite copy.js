document.querySelector("#submit").onclick = function () {

    let confDialog = window.confirm("Play?")
    if (confDialog)
        window.location.href = "./ProjectXO.html";
    else
        window.alert("Byе!")
}