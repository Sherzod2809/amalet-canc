var first = document.getElementById('first');
var inp = document.getElementById('inp');

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

var rp = document.getElementById('rp');
var rp1 = document.getElementById('rp1');
var rp2 = document.getElementById('rp2');
var rp3 = document.getElementById('rp3');

var cd = document.getElementById('cd');
var cd1 = document.getElementById('cd1');
var cd2 = document.getElementById('cd2');
var cd3 = document.getElementById('cd3');

var ds = document.getElementById('ds');
var ds1 = document.getElementById('ds1');
var ds2 = document.getElementById('ds2');
var ds3 = document.getElementById('ds3');

var sd = document.getElementById('sd');
var sd1 = document.getElementById('sd1');
var sd2 = document.getElementById('sd2');
var sd3 = document.getElementById('sd3');


 first.style.border = 'solid 1px'
 first.style.borderRadius = '5%'
 first.style.width = '218px'
 first.style.height = '430px'
 first.style.background = '#000000';



inp.style.width = '205px';
inp.style.height = '150px';
inp.style.background = '#000000';
inp.style.color = '#fefefe';


btn1.style.width = '50px';
btn1.style.height ='50px';
btn1.style.background = '#00334e';
btn1.style.color = '#2dde98';
btn2.style.width = '50px';
btn2.style.height ='50px';
btn2.style.background = '#00334e';
btn2.style.color = '#2dde98';
btn3.style.width = '50px';
btn3.style.height ='50px';
btn3.style.background = '#00334e';
btn3.style.color = '#2dde98';
btn4.style.width = '50px';
btn4.style.height ='50px';
btn4.style.background = '#00334e';
btn4.style.color = '#e4002b';
rp.style.width = '50px';
rp.style.height = '50px';
rp.style.background = '#00334e';
rp.style.color = '#fefefe';
rp1.style.width = '50px'
rp1.style.height = '50px'
rp1.style.background = '#00334e'
rp1.style.color = '#fefefe'
rp2.style.width = '50px'
rp2.style.height = '50px'
rp2.style.background = '#00334e'
rp2.style.color = '#fefefe'
rp3.style.width = '50px'
rp3.style.height = '50px'
rp3.style.background = '#00334e'
rp3.style.color = '#e4002b'
cd.style.width = '50px'
cd.style.height = '50px'
cd.style.background = '#00334e'
cd.style.color = '#fefefe'
cd1.style.width = '50px'
cd1.style.height = '50px'
cd1.style.background = '#00334e'
cd1.style.color = '#fefefe'
cd2.style.width = '50px'
cd2.style.height = '50px'
cd2.style.background = '#00334e'
cd2.style.color = '#fefefe'
cd3.style.width = '50px'
cd3.style.height = '50px'
cd3.style.background = '#00334e'
cd3.style.color = '#e4002b'
ds.style.width = '50px'
ds.style.height = '50px'
ds.style.background = '#00334e'
ds.style.color = '#fefefe'
ds1.style.width = '50px'
ds1.style.height = '50px'
ds1.style.background = '#00334e'
ds1.style.color = '#fefefe'
ds2.style.width = '50px'
ds2.style.height = '50px'
ds2.style.background = '#00334e'
ds2.style.color = '#fefefe'
ds3.style.width = '50px'
ds3.style.height = '50px'
ds3.style.background = '#00334e'
ds3.style.color = '#e4002b'
sd.style.width = '50px'
sd.style.height = '50px'
sd.style.background = '#00334e'
sd.style.color = '#fefefe'
sd1.style.width = '50px'
sd1.style.height = '50px'
sd1.style.background = '#00334e'
sd1.style.color = '#fefefe'
sd2.style.width = '50px'
sd2.style.height = '50px'
sd2.style.background = '#00334e'
sd2.style.color = '#fefefe'
sd3.style.width = '50px'
sd3.style.height = '50px'
sd3.style.background = '#00334e'
sd3.style.color = '#e4002b'

btn1.addEventListener('click', e =>{
    inp.value = '0';
})


btn2.addEventListener('click', e =>{
    inp.value *= '**';
})


btn3.addEventListener('click', e =>{
    inp.value += '%';
})

btn4.addEventListener('click', e =>{
    inp.value = '/'
})


rp.addEventListener('click', e =>{
    inp.value +=  '7';
})

rp1.addEventListener('click', e =>{
    inp.value +=  '8';
})

rp2.addEventListener('click', e =>{
    inp.value +=  '9';
})

rp3.addEventListener('click', e =>{
    inp.value +=  '*'
})

cd.addEventListener('click', e =>{
    inp.value +=  '4'
})
cd1.addEventListener('click', e =>{
    inp.value += '5'  
})

cd2.addEventListener('click', e =>{
    inp.value += '6'
})

cd3.addEventListener('click', e =>{
    inp.value += '-'
})

ds.addEventListener('click', e =>{
    inp.value += '3'
})

ds1.addEventListener('click', e =>{
    inp.value += '2'
})

ds2.addEventListener('click', e =>{
    inp.value += '1'
})
ds3.addEventListener('click', e =>{
    inp.value += '+'
})

sd.addEventListener('click', e =>{
    inp.value = ''
})
sd1.addEventListener('click', e =>{
    inp.value += '0' 
})
sd2.addEventListener('click', e =>{
    inp.value += '.' 
})
sd3.addEventListener('click', e =>{
    inp.value = eval(inp.value)
})






















