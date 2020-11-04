const dice = [
    "",
    "dado-1.png",
    "roll2.png",
    "three_dots.png",
    "four.png",
    "Five-Image.png",
    "dice-showing-6.png"
]

module.exports = () => {
    const index = Math.ceil(Math.random() * 6)
    return dice[index]
}
