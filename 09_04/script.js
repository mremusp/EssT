/**
 * # Use an event listener and CSS either inline or through an added 
 * class to draw a highlight around the entire grid when you hover over it with your mouse.
 * # Add an event listener to each grid cell to highlight that cell when 
 * you hover your mouse over it.
 * # Add an event listener to each grid cell to change its background color when it is clicked.
 * # Add an event listener to a specific key on the keyboard to change the background color 
 * of the whole page - from dark to light and back again.
 */

const container = document.querySelector(".container");
const grid = container.querySelector(".grid");
const cells = grid.querySelectorAll(".cell");
const colors = ["#FF5733", "#FFBD33", "#DBFF33", "#75FF33", "#A633FF", "#9EFF33", "#FA33FF", "#4F33FF", "#3380FF" , "#33FFB9"]
const body = document.querySelector("body");

const setRandomBg = (event) => {
  const clickedCell = event.target;
  const randomColor = Math.floor(Math.random() * colors.length);
  clickedCell.style.backgroundColor =  colors[randomColor]
}

const colorChange = (event) => {
  if (event.key == 's') {
    body.classList.toggle("dark");
  }
}

grid.addEventListener("mouseenter", () => {
  grid.classList.add("grid-highlight")
})

grid.addEventListener("mouseleave", () => {
  grid.classList.remove("grid-highlight")
})

cells.forEach(cell => {
  cell.addEventListener("mouseenter", () => {
    cell.classList.add("cell-hover")
  })
  cell.addEventListener("mouseleave", () => {
    cell.classList.remove("cell-hover")
  })
  cell.addEventListener("click", setRandomBg)
})

window.addEventListener("keydown", colorChange)

