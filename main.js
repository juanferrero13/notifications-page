const markAll = document.getElementById("mark-all")
const number = document.getElementById("number")
const posts = document.querySelectorAll(".post")

posts.forEach((post) => {
    post.addEventListener("click", () => {
        post.querySelector(".not-read").classList.remove("not-read")
        post.classList.remove("back")
        updateNotificactions()
    })
})

markAll.addEventListener("click", () => {
    const notReadElements = document.querySelectorAll(".not-read")
    notReadElements.forEach((item) => {
        item.classList.remove("not-read")
        item.closest(".post").classList.remove("back")
    })
    updateNotificactions()
})

const updateNotificactions = () => {
    const notReadElementsCurrent = document.querySelectorAll(".not-read")
    number.innerHTML = notReadElementsCurrent.length
}





