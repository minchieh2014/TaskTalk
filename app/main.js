const {app, BrowserWindow} = require('electron')

let win

function createWindow () {
 
  win = new BrowserWindow({width: 800, height: 600})

  win.loadURL(`file://${__dirname}/index.html`)

  win.webContents.openDevTools()

  // 处理窗口关闭
  win.on('closed', () => {
    win = null
  })
}

// Electron初始化完成
app.on('ready', createWindow)

// 处理退出
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