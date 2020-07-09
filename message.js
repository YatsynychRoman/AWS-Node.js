let msgButton = document.getElementById("msgButton");
msgButton.onclick = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let message = document.getElementById("message").value;
    fetch("http://localhost:3000/userdata", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name, surname, message})
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
};

let sbcButton = document.getElementById("sbcButton");
sbcButton.onclick = (e) => {
    let sbcMail = document.getElementById("sbcMail").value;
    fetch("http://localhost:3000/usermail", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({sbcMail})
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
};


