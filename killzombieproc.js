const fkill = require('fkill');

fkill('electron.exe', {force: true})
    .catch(console.error)
