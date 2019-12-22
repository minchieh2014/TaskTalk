'use strict'
const version = '1.0.0'
const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const fsSetting = new FileSync('setting.json')
const dbSetting = lowdb(fsSetting)
dbSetting.set('version', version).write()

// console.log('ffffff', dbSetting)

const db = {
  version: version,
  setting: dbSetting,
  user: null,
  setId: (id) => {
    let file = id + '.json'
    const fsUser = new FileSync(file)
    db.user = lowdb(fsUser)
  }
}

// console.log('mmmmmmm', db)

export default db
