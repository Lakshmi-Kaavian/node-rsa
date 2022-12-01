const rsa = require('node-rsa');
const fs = require('fs');
const path = require('path');

function keys(x,y){
//const x = generatekey(a,b);
const publickey= new rsa();
const privatekey =new rsa();
const public=fs.readFileSync(x,"utf8");
const private=fs.readFileSync(y,"utf8");
publickey.importKey(public);
privatekey.importKey(private);
return (publickey,privatekey);
}
/**
 * 
 * @param {key} k key returned from generatekey function
 * @param {string} str value to be encrypted
 * @returns encrypted value  
 */
function encryption(k,str){
    // const public_key=keys();
    // console.log(public_key);
    const a = k.encrypt(str,'base64');
    return a;
}
/**
 * 
 * @param {key} k returned from generatekey function 
 * @param {string} str encrypted value
 * @returns decrypted value
 */
function decryption(k,str){
    // const private_key= keys()
    const b = k.decrypt(str,'utf8');
    return b;
}
/**
 * 
 * @param {string} publicpath file path to store public key
 * @param {string} privatepath file path to store private key
 * @returns {{{}}} keys {{object}}
 */
function generatekey(publicpath,privatepath){
    const key = new rsa().generateKeyPair();
    const public_key=key.exportKey('public');
    const private_key=key.exportKey('private');
    fs.openSync(publicpath,"w");
    fs.writeFileSync(publicpath,public_key,'utf8');
    fs.openSync(privatepath,"w");
    fs.writeFileSync(privatepath,private_key,'utf8');
    const m=publicpath;
    const s= privatepath;
    const f= keys(m,s);    
    return f;
}
module.exports={
    encryption,decryption,generatekey
}
