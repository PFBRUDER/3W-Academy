document.addEventListener('DOMContentLoaded', function() {
    const event = window.setTimeout(function() {
        alert('Je suis Jonathan')
    }, 5000)
    console.log(event)

    document.getElementById('stop').addEventListener('click', function() {
        clearTimeout(event)
    })

})