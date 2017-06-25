
function Calc(value) {
    var res;
    var prom;

    var left, right
    console.log(value);


    if (value.indexOf('*') > 0) {
        var substr0 = value.split('*', 2);
        var replaceRes

        left = substr0[0].split('+', 2);
        right = substr0[1].split('+', 2)[0];
        var substr = value.substr(value.indexOf('*') - left[0].length, 2 + left[0].length + right.length);
        res = parseInt(left) * parseInt(right);
        replaceRes = value.replace(substr, res);

        /*
        console.log('substr ', substr);
        console.log('substr0 ', substr0);
        console.log('value.split ', value.split('*'));
        console.log('value.split 1:', value.split('*')[0]);
        console.log('value.split 2:', value.split('*')[1]);
        console.log('/');
        console.log('res ', res);
        console.log('left ', left[0]);
        console.log('right ', right);
        console.log('left len ', left[0].length);
        console.log('right len', right.length);
        console.log('prom ', prom);
        console.log('replaceRes', replaceRes);
        console.log('value', value);
        console.log('/');
        */
        return Calc(replaceRes);

    }

    if (value.indexOf('/') >= 0)
        res = parseInt(value.split('/')[0]) / parseInt(value.split('/')[1]);

    if (value.indexOf('+') >= 0) {
        var substr0 = value.split('+', 2);
        var replaceRes
        left = substr0[0].split('+', 2);
        right = substr0[1].split('+', 2)[0];
        var substr = value.substr(value.indexOf('+') - left[0].length, 2 + left[0].length + right.length);
        res = parseInt(left) + parseInt(right);
        replaceRes = value.replace(substr, res);
        console.log('substr ', substr);
        console.log('substr0 ', substr0);
        console.log('value.split ', value.split('*'));
        console.log('value.split 1:', value.split('*')[0]);
        console.log('value.split 2:', value.split('*')[1]);
        console.log('/');
        console.log('res ', res);
        console.log('left ', left[0]);
        console.log('right ', right);
        console.log('left len ', left[0].length);
        console.log('right len', right.length);
        console.log('prom ', prom);
        console.log('replaceRes', replaceRes);
        console.log('value', value);
        console.log('/');
        return Calc(replaceRes);

    }


    if (value.indexOf('-') >= 0)
        res = parseInt(value.split('-')[0]) - parseInt(value.split('-')[1]);



    return value;
}

Calc('2*4+130+2222')

