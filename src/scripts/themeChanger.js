import wait from "./wait";
import getCookie from "./getCookie";


const themeToggleButton = document.querySelector(".theme-toggle");
themeToggleButton.style.opacity = "1";


//custom themes go here
const themes = [
  {
    themeName: "dark",
    mainColor: "#D4D4D4",
    secondaryColor: "#1E1E1E",
    hightlight: "#CE9178",
    comment: "#6A9953",
    filter:
      "invert(98%) sepia(1%) saturate(2185%) hue-rotate(205deg) brightness(106%) contrast(66%)",
  },
  {
    themeName: "blue",
    mainColor: "#EEEDF0",
    secondaryColor: "#012456",
    hightlight: "#FFFF00",
    comment: "#008080",
    filter:
      "invert(94%) sepia(6%) saturate(59%) hue-rotate(218deg) brightness(102%) contrast(91%)",
  },
  {
    themeName: "ubuntu",
    mainColor: "#ffffff",
    secondaryColor: "#2d0922",
    hightlight: "#6eda34",
    comment: "#bc8b0a",
    filter:
      "invert(100%) sepia(100%) saturate(0%) hue-rotate(241deg) brightness(107%) contrast(106%)",
  },
  {
    themeName: "light",
    mainColor: "#2b2b2b",
    secondaryColor: "#ffffff",
    hightlight: "blue",
    comment: "#008000",
    filter:
      "invert(9%) sepia(0%) saturate(441%) hue-rotate(191deg) brightness(112%) contrast(83%)",
  },
];

async function changeTheme(theme, ms = 100) {
  const {
    themeName,
    mainColor,
    secondaryColor,
    hightlight,
    comment,
    filter,
  } = theme;
  console.log('theme changed')
  //save the theme in cookies
  document.cookie = `theme=${themeName}`;
  currentTheme = themeName;
  
  themeToggleButton.style.transform = "rotate(1turn)";
  await wait(ms * 2);

  themeToggleButton.children[0].style.opacity = 0;
  themeToggleButton.style.backgroundColor = secondaryColor;

  //  body.style.overflow = "hidden";

  // await wait(500);
  //  themeToggleButton.style.position = 'absolute';
  //  themeToggleButton.style.height = `${buttonSize * 2}px`;
  //  themeToggleButton.style.width = `${buttonSize * 2}px`;
  //  themeToggleButton.style.top = "-50%";
  //  themeToggleButton.style.right = "-50%";
  // themeToggleButton.style.borderRadius = "50%";
  //  await wait(200);

  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty(
    "--secondary-color",
    secondaryColor
  );
  document.documentElement.style.setProperty("--img-filter", filter);
  document.documentElement.style.setProperty("--highlight-color", hightlight);
  document.documentElement.style.setProperty("--comment-color", comment);

  await wait(ms * 5);

  // themeToggleButton.style.height = "25px";
  // themeToggleButton.style.width = "25px";

  // themeToggleButton.style.top = "0px";
  // themeToggleButton.style.right = "50px";

  // await wait(500);

  // body.style.overflow = "visible";
  themeToggleButton.style.position = "inherit";

  themeToggleButton.style.backgroundColor = "transparent";
  themeToggleButton.children[0].style.opacity = 1;
  themeToggleButton.style.transform = "rotate(-1turn)";
}
let currentTheme = getCookie("theme");



if (getCookie("theme") == "") {
  changeTheme(themes[0], 0);
  document.cookie = `theme=${themes[0].themeName}`;
} else {
  const indexOfCurrentTheme = findIndexOfMatchingObject(
    themes,
    "themeName",
    getCookie("theme")
  );

  changeTheme(themes[indexOfCurrentTheme], 0);
}



function findIndexOfMatchingObject(array, key, valueToFind) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] == valueToFind) {
      return i;
    }
  }
}

themeToggleButton.onclick = async () => {
  const indexOfCurrentTheme = findIndexOfMatchingObject(
    themes,
    "themeName",
    currentTheme
  );
  const nextThemeIndex =
    indexOfCurrentTheme == themes.length - 1 ? 0 : indexOfCurrentTheme + 1;

  changeTheme(themes[nextThemeIndex]);
};

