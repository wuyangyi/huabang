import CryptoJS from 'crypto-js';

const key = CryptoJS.enc.Utf8.parse('s379e8b551be4ed0');
const iv = CryptoJS.enc.Utf8.parse('2002038505065588');

// aes 加密
export function encrypt(message: string) {
    let srcs = CryptoJS.enc.Utf8.parse(message);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}

// aes 解密
export function decrypt(word: string) {
    let decrypt = CryptoJS.AES.decrypt(word, key, {
        iv: iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}