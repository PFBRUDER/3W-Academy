const bar = document.getElementById("bar_orange")

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("play").addEventListener("click", function() {
        console.log('test')
        for (let index = 0; index <= 100; index++) {
            bar.style.height = index + "%"
        }
    })
})