function onError(error) {
    console.log(`Error: ${error}`);
}
const executing = browser.tabs.executeScript({
    file: "script.js",
    allFrames: true
});
executing.then(onError);