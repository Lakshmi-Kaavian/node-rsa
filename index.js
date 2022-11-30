const rsa = require('node-rsa');
const fs = require('fs');
const path = require('path');
function keys(){
const publickey= new rsa();
const privatekey =new rsa();
const public=fs.readFileSync("./keys/publickey.pem","utf8");
const private=fs.readFileSync("./keys/private.pem","utf8");
publickey.importKey(public);
privatekey.importKey(private);
return (publickey,privatekey);
}
function encryption(str){
    const public_key=keys();
    console.log(public_key);
    const a = public_key.encrypt(str,'base64');
    return a;
}
function decryption(str){
    const private_key= keys()
    const b = private_key.decrypt(str,'utf8');
    return b;
}
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
    encryption,decryption,generatekey
}



