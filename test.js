
function Calc(value) {
    var res;
    var prom;

    var left, right
    console.log(value);


    if (value.indexOf('*') > 0) {
        var substr0 = value.split('*', 2);
        var replaceRes

        left = substr0[0].split('+');
        right = substr0[1].split('+', 2);
        var substr = value.substr(value.indexOf('*') - left[left.length-1].length, 1 + left[left.length-1].length + right[0].length);
        res = parseInt(left[left.length-1]) * parseInt(right[0]);
        replaceRes = value.replace(substr, res);

        
        console.log('substr ', substr);
        console.log('substr0 ', substr0);
        console.log('res ', res);
        console.log('left ', left[left.length-1]);
        console.log('right ', right[0]);
        console.log('left len ', left[0].length);
        console.log('right len', right[0].length);
        console.log('replaceRes', replaceRes);
        console.log('/');
        
        return Calc(replaceRes);

    }

    if (value.indexOf('/') >= 0)
        res = parseInt(value.split('/')[0]) / parseInt(value.split('/')[1]);

    if (value.indexOf('+') >= 0) {
        var substr0 = value.split('+', 2);
        var replaceRes
        left = substr0[0].split('+', 2);
        right = substr0[1].split('+', 2);
        var substr = value.substr(value.indexOf('+') - left[left.length-1].length, 1 + left[left.length-1].length + right[0].length);
        res = parseInt(left) + parseInt(right);
        replaceRes = value.replace(substr, res);

        console.log('substr ', substr);
        console.log('substr0 ', substr0);
        console.log('res ', res);
        console.log('left ', left[left.length-1]);
        console.log('right ', right[0]);
        console.log('left len ', left[0].length);
        console.log('right len', right[0].length);
        console.log('replaceRes', replaceRes);
        console.log('/');

        return Calc(replaceRes);

    }


    if (value.indexOf('-') >= 0)
        res = parseInt(value.split('-')[0]) - parseInt(value.split('-')[1]);



    return value;
}

Calc('12*13+2*2+3*2 +2*2')

