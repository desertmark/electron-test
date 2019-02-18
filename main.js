const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url');
// const sequelize = require('./src/db/sequelize-factory');
// const sqlite = require('sqlite3');
let win;

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})

  // load the dist folder from Angular
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/elec-test/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools optionally:
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })

  // sequelize
  //   .authenticate()
  //   .then(() => console.log('sequelized init ok.'))
  //   .catch(error => console.error('Error init sequelize.', error));
  
  ipcMain.once("mainWindowLoaded", () => {
    win.webContents.send("db", {
      tasks: [{name:'Mocked Task 1'}],
    });
  });
}

app.on('ready', createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})