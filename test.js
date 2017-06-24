
function Calc(value) {
    var res;
    var prom;
    var i = 0;
    var left, right
    console.log(value);


    if (value.indexOf('*') >= 0) {
        var replaceRes
        left = parseInt(value.split('*')[0]);
        right = parseInt(value.split('*')[2]);
        res = left * right;
        prom = value.split('*')[0] + '*' + value.split('*')[1];
        console.log('value.split ', value.split('*'));
        console.log('value.split 1:', value.split('*')[0]);
        console.log('value.split 2:', value.split('*')[1]);
        replaceRes = value.replace(prom, res);
        console.log('/');
        console.log('res ', res);
        console.log('left ', left);
        console.log('right ', right);
        console.log('prom ', prom);
        console.log('replaceRes', replaceRes);
        console.log('value', value);
        console.log('/');

        //   return Calc(replaceRes);

    }

    if (value.indexOf('/') >= 0)
        res = parseInt(value.split('/')[0]) / parseInt(value.split('/')[1]);

    if (value.indexOf('+') >= 0)
        res = parseInt(value.split('+')[0]) + parseInt(value.split('+')[1]);

    if (value.indexOf('-') >= 0)
        res = parseInt(value.split('-')[0]) - parseInt(value.split('-')[1]);



    return value;
}

Calc('2*4+4*3')
