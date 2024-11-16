let alphabets = {};
    let s = "!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U62";
    let k = 62;
    let res = '';

    
    k = k % 26;
    
    for (let i = 97; i <= 122; i++) {
    let temp = i;

    if (temp + k > 122) {
        temp = temp - 26;
    }

    temp += k;
    alphabets[String.fromCharCode(i)] = String.fromCharCode(temp);
    }

    for (let i = 0; i < s.length; i++) {
        let temp = s.charCodeAt(i);
        if (temp >= 65 && temp <= 90) {
            temp = temp + 32;
            temp = String.fromCharCode(temp);
            
            if (alphabets[temp]) {
                res += alphabets[temp].toUpperCase();
            }
        } else if (alphabets[s[i]]) {
            res += alphabets[s[i]];
        } else {
            res += s[i];
        }
    }

    console.log(s);
    console.log(res);