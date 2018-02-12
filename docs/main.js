const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByClassName("button")[0];
const output = document.getElementsByTagName("p")[0];
const spinner = document.getElementsByClassName("spinner")[0];

spinner.classList.add("hidden");
button.addEventListener("click", () => {
  // show spinner
  spinner.classList.remove("hidden");
  output.innerText = "";
  // replace spaces with plus signs

  fetch(`https://fierce-citadel-20064.herokuapp.com/${input.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      spinner.classList.add("hidden");
      output.innerText =
        data.charAt(0) === "<" ? "ooops. Back later today, you may come" : data;
    });
});
