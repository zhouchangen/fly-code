import CryptoJS from "crypto-js";
import Cookie from "js-cookie";
// aes加密：theKey密钥  pass密码(原文)
export const encrypt = (theKey, pass) => {
    var key = CryptoJS.enc.Utf8.parse(theKey);
    var srcs = CryptoJS.enc.Utf8.parse(pass);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.toString();
};

// aes解密：theKey密钥  pass密码(密文)
export const decrypt = (theKey, pass) => {
    var key = CryptoJS.enc.Utf8.parse(theKey);
    var decrypt = CryptoJS.AES.decrypt(pass, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
};

// 生成密钥：n 生成多少位的密钥(默认8位)
export const getKey = (n) => {
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (n == null || n == undefined) {
        n = 8;
    }
    var res = "";
    for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * 35);
        res += chars[id];
    }
    return res;
};

export const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  }

export const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
//生成uuid
export const getUuid = () => {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
 
    let uuid = s.join("");
    return uuid
}

//说明：javascript的除法结果会有误差，在两个浮点数运算的时候会比较明显。 
//调用：accAdd(arg1,arg2)     
//返回值：arg1加上arg2的精确结果      
export const accAdd = (arg1, arg2) => {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
  }
  //调用：accSub(arg1,arg2)     
  //返回值：arg1减上arg2的精确结果     
export const accSub = (arg1, arg2) => {
    return accAdd(arg1, -arg2);
  }

//调用：accMul(arg1,arg2)     
//返回值：arg1乘以arg2的精确结果     
export const accMul = (arg1, arg2) => {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { if(e){
        console.log('')
    } }
    try { m += s2.split(".")[1].length } catch (e) { if(e){
        console.log('')
    }}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
  }
  //调用：accDiv(arg1,arg2)     
  //返回值：arg1除以arg2的精确结果     
// export const accDiv = (arg1, arg2) => {
//     var t1 = 0, t2 = 0, r1, r2;
//     try { t1 = arg1.toString().split(".")[1].length } catch (e) { console.log(e) }
//     try { t2 = arg2.toString().split(".")[1].length } catch (e) { console.log(e) }
//     //with(Math){
//     r1 = Math.Number(arg1.toString().replace(".", ""))
//     r2 = Math.Number(arg2.toString().replace(".", ""))
//     return (r1 / r2) * pow(10, t2 - t1);
//     //}
//   } 

// 获取全局后台配置
export const _getConfigBase = () => {
    let configBase = null;
    if(sessionStorage.getItem('_configBase')){
        configBase = JSON.parse(sessionStorage.getItem('_configBase'))
    }
    return configBase
}
export const formatEmail = (val) => {
    let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return reg.test(val)
}
  