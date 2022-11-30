const Nodersa= require('node-rsa');
const fs= require('fs');

function Generatekey(){
    const key = new Nodersa().generateKeyPair();
    const public_key=key.exportKey('public');
    const private_key=key.exportKey('private');
    fs.openSync("./keys/publickey.pem","w");
    fs.writeFileSync("./keys/publickey.pem",public_key,'utf8');
    fs.openSync("./keys/private.pem","w");
    fs.writeFileSync("./keys/private.pem",private_key,'utf8');
    
}
module.exports={
    Generatekey
}