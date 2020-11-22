function reorderString(str){

    var arrayStr = str.split('');
    arrayStr.sort();
    str = arrayStr.join('');
    console.log(str);
    return str;
}
