function build(title, cname, views, photo, monthsold, duration) {
    let viewstr
    if (views < 1000) {
        viewstr = views
    }
    else if (views>=1000 && views < 1000000) {
        viewstr = views / 1000 + "K"
    }
    else {
        viewstr = views / 1000000 + "M"
    }
    let html = `<div class="card">
        <div class="image">
            <img src="${photo}" alt="photo">
            <div class="time">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cname} • ${viewstr} views • ${monthsold} months ago </p>
        </div>
    </div>`
    document.querySelector(".box").innerHTML = document.querySelector(".box").innerHTML + html
}
build("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course","CodeWithHarry",35600,"photo.webp",9,"15:51")