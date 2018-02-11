const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByClassName("button")[0];
const output = document.getElementsByTagName("p")[0];

let status, headers, body;

button.addEventListener("click", () => {
  // replace spaces with plus signs
  console.log(input);

  fetch(`https://fierce-citadel-20064.herokuapp.com/${input.value}`).then(
    response => {
      console.log(response.body);
      output.innerHTML = response.body;
    }
  );
});
