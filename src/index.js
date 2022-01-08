module.exports = function toReadable (number) {

    let nums = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    let dec = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    
        if (number < 20) return nums[number];
        let dig = number%10;
        if (number < 100) return dec[~~(number/10)-2] + (dig? " " + nums[dig]: "");
        if (number < 1000) return nums[~~(number/100)] +" hundred" + (number%100 == 0? "": " " + toReadable(number%100));
    }
