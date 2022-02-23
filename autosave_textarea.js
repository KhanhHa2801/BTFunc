let txtArea = document.getElementById('autosave')
console.log(txtArea)

// let cooki = document.cookie
// function setCookie(name, value, days){
//     let day = new Date()
//     day.setTime(day.getTime() + (days * 24 * 60 * 60 * 1000));
//     let expires = "expires=" + day.toUTCString();
//     document.cookie = name + "=" + value + "; " + expires;
// }

// setCookie("Khánh hi", cooki.getAttribute())

txtArea.value = localStorage.getItem('txtArea');
txtArea.oninput = () => {
      localStorage.setItem('txtArea', txtArea.value)
    };