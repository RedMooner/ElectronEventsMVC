//myEvents.js
const { ipcMain } = require('electron');//не помню как там надо импортнуть

module.exports = function (win, data) {

    //когда клиент запрашивает версию
    ipcMain.on('requestVersion', requestVersion)
    ipcMain.on(' requestActive', requestActive)
    //другие запросы тут тоже можно прописать

    function requestVersion() {
        win.webContents.send("version", data.version);
    }
    function requestActive() {
        win.webContents.send("active", data.isActive);
    }
}