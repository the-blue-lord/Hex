const stylesNames = [
    "board",
    "button",
    "cell",
    "column",
    "default",
    "root",
    "settings",
];

function importStyles() {
    stylesNames.forEach(stylesName => {
        const filePath = "hex_files/styles/" + stylesName + ".css";
        const linkElement = document.createElement("link");

        linkElement.rel = "stylesheet";
        linkElement.href = filePath;

        document.head.append(linkElement);
    });
}