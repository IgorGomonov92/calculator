
function Calc(value) {
    var res;
    var prom;

    var left, right
    console.log(value);


    if (value.indexOf('*') > 0) {
        var substr0 = value.split('*', 2);
        var replaceRes

        left = parseInt(substr0[0].split('+'));
        right = parseInt(substr0[1].split('+', 2)[0]);
        var substr = value.substr(value.indexOf('*') - left.toString.length, 1 + right.toString.length);
        res = left * right;
        replaceRes = value.replace(substr, res);


        console.log('substr ', substr);

        console.log('substr0 ', substr0);
        console.log('value.split ', value.split('*'));
        console.log('value.split 1:', value.split('*')[0]);
        console.log('value.split 2:', value.split('*')[1]);
        console.log('/');
        console.log('res ', res);
        console.log('left ', left);
        console.log('right ', right);
        console.log('prom ', prom);
        console.log('replaceRes', replaceRes);
        console.log('value', value);
        console.log('/');

        return Calc(replaceRes);

    }

    if (value.indexOf('/') >= 0)
        res = parseInt(value.split('/')[0]) / parseInt(value.split('/')[1]);

    if (value.indexOf('+') >= 0) {
        var replaceRes
        var substr = value.substr(value.indexOf('+') - 1, 3);
        left = parseInt(substr.split('+')[0]);
        right = parseInt(substr.split('+')[1]);
        res = left + right;
        replaceRes = value.replace(substr, res);
        return Calc(replaceRes);
    }


    if (value.indexOf('-') >= 0)
        res = parseInt(value.split('-')[0]) - parseInt(value.split('-')[1]);



    return value;
}

Calc('12*13')
