const rsa = require('node-rsa');
const fs = require('fs');
function keys(){
const publickey= new rsa();
const privatekey =new rsa();
const public=fs.readFileSync(path.join(__dirname +"/keys/publickey.pem","utf8"));
const private=fs.readFileSync(path.join(__dirname +"/keys/private.pem","utf8"));
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
module.exports={
    encryption,decryption
}



