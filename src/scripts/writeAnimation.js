import wait from "./wait";

async function writeAnimation(DOMElement) {
  //'selected' elements get that blinking underscore at the end with CSS
  DOMElement.classList.add("selected");

  DOMElement.textContent = "";
  DOMElement.style.opacity = 1;
  await wait(500);

  let i = 0;

  //animation loop.
  while (DOMElement.textContent != DOMElement.finalText) {
    //in case something goes wrong, this will prevent an infinite loop (the while loop is dangerous like that)
    if (
      DOMElement.finalText[i] == undefined ||
      DOMElement.hasBeenAnimated == true
    ) {
      //you can skip the animation by setting hasBeenAnimated to true. THe skipAnimation funciton does this.

      DOMElement.textContent = DOMElement.finalText;
      DOMElement.classList.remove("selected");
      break;
    }

    DOMElement.textContent += DOMElement.finalText[i];
    i++;

    //how much to wait between key presses
    let ms = 40;

    if (DOMElement.finalText[i] == ",") ms = 200;

    //Sometimes there are some mistakes when you are writing
    if (Math.random() < 0.007) {
      //add two random letters
      DOMElement.textContent += randomLetter();
      await wait(200);
      DOMElement.textContent += randomLetter();
      await wait(100);

      //erase them
      DOMElement.textContent = DOMElement.textContent.substring(
        0,
        DOMElement.textContent.length - 1
      );
      await wait(200);
      DOMElement.textContent = DOMElement.textContent.substring(
        0,
        DOMElement.textContent.length - 1
      );
      await wait(200);
    }
    await wait(ms);
  }
  DOMElement.innerHTML = DOMElement.finalINNERHTML;
  DOMElement.classList.remove("selected");
}

function randomLetter() {
  let letters = "abcdefgaweqwrcschijklmnñopiop-iñk..l,mqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
}

export default writeAnimation;
