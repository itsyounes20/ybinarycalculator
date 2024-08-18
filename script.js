function calcBinary(f_bin, s_bin, ch) 
{
    let d_nums = ["2", "3", "4", "5", "6", "7", "8", "9"];
    for (let x of f_bin) 
    {
        if (d_nums.includes(x)) 
        {
            return "not binary";
        }
    }
    for (let x of s_bin) 
    {
        if (d_nums.includes(x)) 
        {
            return "not binary";
        }
    }
    let f_res;
    if (ch === 1) 
    {
        f_res = bin_dec(f_bin) + bin_dec(s_bin);
    } 
    else if (ch === 2) 
    {
        f_res = bin_dec(f_bin) * bin_dec(s_bin);
    } 
    else if (ch === 3) 
    {
        f_res = bin_dec(f_bin) - bin_dec(s_bin);
    } 
    else if (ch === 4) 
    {
        f_res = Math.floor(bin_dec(f_bin) / bin_dec(s_bin));
        let s_res = bin_dec(f_bin) % bin_dec(s_bin);
        if (s_res !== 0) 
        {
            return dec_bin(f_res) + " remainder is " + dec_bin(s_res);
        }
    }   
    return dec_bin(f_res);
}
function bin_dec(bin_n) 
{
    let dec = 0;
    let bin_l = bin_n.length;
    
    for (let i = 0; i < bin_l; i++) 
    {
        dec += parseInt(bin_n[bin_l - 1 - i]) * Math.pow(2, i);
    }
    return dec;
}
function dec_bin(n) 
{
    if (n === 0) 
    {
        return "0";
    }
    let bin_r = "";
    while (n > 0) 
    {
        bin_r = (n % 2) + bin_r;
        n = Math.floor(n / 2);
    }    
    return bin_r;
}
function main(x)
{
    let a = document.getElementById("f_bin");
    let b = document.getElementById("s_bin");
    let av = a.value;
    let bv = b.value
    let r = document.getElementById("result");
    if (x === 1){r.innerHTML = "The result (Addition): " + calcBinary(av, bv, x);}
    else if (x === 2){r.innerHTML = "The result (Multiplication): " + calcBinary(av, bv, x);}
    else if (x === 3){r.innerHTML = "The result (Subtraction): " + calcBinary(av, bv, x);}
    else if (x === 4){r.innerHTML = "The result (Division): " + calcBinary(av, bv, x);}
}
