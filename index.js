
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res =>res.json())
.then(data => {
    document.body.style.bacground = `url(${data.urls.regular})`
    document.gelElementById("author").textContent = data.user.name
})


