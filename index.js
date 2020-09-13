const express = require('express');
const {app, BrowserWindow} = require('electron');
const expressApp = express();
const path = require('path');
const router = express.Router();
function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  win.loadFile('views/index.html');
}

expressApp.use(express.static(path.join(__dirname, 'public')));

expressApp.get('/',function(req,res) {
    console.log("sup.")
    res.sendFile('C:/Users/Romy/Desktop/suprem map generator/views/index.html');
  });
expressApp.listen(8080, '127.0.0.1')
app.whenReady().then(createWindow);