const Nodersa= require('node-rsa');
const fs= require('fs');
const path = require('path');

function generatekey(){
    const key = new Nodersa().generateKeyPair();
    const public_key=key.exportKey('public');
    const private_key=key.exportKey('private');
    fs.openSync(path.join(__dirname +"/keys/publickey.pem","w"));
    fs.writeFileSync(path.join(__dirname +"/keys/publickey.pem",public_key,'utf8'));
    fs.openSync(path.join(__dirname + "/keys/private.pem"),"w");
    fs.writeFileSync("./keys/private.pem",private_key,'utf8');
    
}
module.exports={
    generatekey
}