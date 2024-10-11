const toggleMenu = () => {
  document.querySelector(".leftPanel").classList.toggle("open");
};
const goRed = (clicked_id) => {
  document.querySelector(`#${clicked_id}`).classList.toggle("red");
  console.log(`#${clicked_id}`);
};
