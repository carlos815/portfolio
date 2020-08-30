import wait from "./wait";

const body = document.querySelector("body");

//Initial values
document.documentElement.style.setProperty("--main-color", "#D4D4D4");
document.documentElement.style.setProperty("--secondary-color", "#1E1E1E");
document.documentElement.style.setProperty("--highlight-color", "#CE9178");
document.documentElement.style.setProperty("--comment-color", "#6A9953");
document.documentElement.style.setProperty(
  "--img-filter",
  "invert(98%) sepia(1%) saturate(2185%) hue-rotate(205deg) brightness(106%) contrast(66%)"
);

let currentTheme = "dark";

const themeToggleButton = document.querySelector(".theme-toggle");
themeToggleButton.style.opacity = "1";

//custom themes go here

themeToggleButton.onclick = async () => {
  if (currentTheme == "light") {
    changeTheme(
      "dark",
      "#D4D4D4",
      "#1E1E1E",
      `#CE9178`,
      "#6A9953",
      "invert(98%) sepia(1%) saturate(2185%) hue-rotate(205deg) brightness(106%) contrast(66%)"
    );
  } else if (currentTheme == "dark") {
    changeTheme(
      "blue",
      "#EEEDF0",
      "#012456",
      `#FFFF00`,
      "#008080",
      "invert(94%) sepia(6%) saturate(59%) hue-rotate(218deg) brightness(102%) contrast(91%)"
    );
  } else if (currentTheme == "blue") {
    changeTheme(
      "ubuntu",
      "#ffffff",
      "#2d0922",
      "#6eda34",
      "#bc8b0a",
      "invert(100%) sepia(100%) saturate(0%) hue-rotate(241deg) brightness(107%) contrast(106%)"
    );
  } else if (currentTheme == "ubuntu") {
    changeTheme(
      "light",
      "#2b2b2b",
      "#ffffff",
      "blue",
      "#008000",
      "invert(9%) sepia(0%) saturate(441%) hue-rotate(191deg) brightness(112%) contrast(83%)"
    );
  }
};

async function changeTheme(
  themeName,
  mainColor,
  secondaryColor,
  hightlight,
  comment,
  filter
) {
  const buttonSize =
    window.innerHeight > window.innerWidth
      ? window.innerHeight
      : window.innerWidth;

  currentTheme = themeName;

  themeToggleButton.style.transform = "rotate(1turn)";
  await wait(200);

  themeToggleButton.children[0].style.opacity = 0;
  themeToggleButton.style.backgroundColor = secondaryColor;

  body.style.overflow = "hidden";

  await wait(500);

  themeToggleButton.style.height = `${buttonSize * 2}px`;
  themeToggleButton.style.width = `${buttonSize * 2}px`;
  themeToggleButton.style.top = "-50%";
  themeToggleButton.style.right = "-50%";
  themeToggleButton.style.borderRadius = "50%";
  await wait(200);

  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty(
    "--secondary-color",
    secondaryColor
  );
  document.documentElement.style.setProperty("--img-filter", filter);
  document.documentElement.style.setProperty("--highlight-color", hightlight);
  document.documentElement.style.setProperty("--comment-color", comment);

  await wait(500);

  themeToggleButton.style.height = "25px";
  themeToggleButton.style.width = "25px";

  themeToggleButton.style.top = "50px";
  themeToggleButton.style.right = "50px";

  await wait(500);

  body.style.overflow = "visible";

  themeToggleButton.style.backgroundColor = "transparent";
  themeToggleButton.children[0].style.opacity = 1;
  themeToggleButton.style.transform = "rotate(-1turn)";
}

