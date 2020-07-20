window.addEventListener("load", () => {

  let answers = {
    one: 0,
    two: 0
  };

  let uncheckedImgs = document.getElementsByClassName('unchecked');
  let checkedImgs = document.getElementsByClassName('checked');
  console.log(uncheckedImgs[0]);

  uncheckedImgs[0].addEventListener("click", event => {
    uncheckedImgs[0].classList.add("displayNone");
    checkedImgs[0].classList.remove("displayNone");
  });

  checkedImgs[0].addEventListener("click", event => {
    checkedImgs[0].classList.add("displayNone");
    uncheckedImgs[0].classList.remove("displayNone");
  });

  console.log(answers);
})
