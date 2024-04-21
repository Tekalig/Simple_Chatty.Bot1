let input = document.querySelector(".display");
document.querySelectorAll(".number").forEach((num) => {
  num.onclick = () => {
    input.textContent += num.textContent.trim();
    console.log(input.textContent.trim());
  };
});
