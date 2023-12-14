let rangeInput = document.querySelector("#history");

let spanDate = document.querySelector(".date");

rangeInput.addEventListener("input", (event) => {
    let mountains = ["Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", "Январь", "Февраль", "Март", "Апрель"]
    let years = ["1941", "1942", "1943", "1944", "1945"]
    console.log(parseInt(parseInt(event.target.value) + 50))
    spanDate.innerHTML = (mountains[parseInt((event.target.value / 10) % 12)] + years[parseInt(parseInt(parseInt(event.target.value) + 40) / 120)])
});

