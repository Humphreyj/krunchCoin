var beanCoinPrice = (Math.random() * Math.floor(500)).toFixed(2);

var CraigCoinPrice = (Math.random() * Math.floor(50)).toFixed(2);

var FatCoinPrice = (Math.random() * Math.floor(25)).toFixed(2);

var BuffCoinPrice = (Math.random() * Math.floor(25)).toFixed(2);

var PfCoinPrice = (Math.random() * Math.floor(10)).toFixed(2);

var SproutCoinPrice = (Math.random() * Math.floor(5)).toFixed(2);


document.getElementById("bcPrice").innerHTML = beanCoinPrice;

document.getElementById("CcPrice").innerHTML = CraigCoinPrice;

document.getElementById("FcPrice").innerHTML = FatCoinPrice;

document.getElementById("BxPrice").innerHTML = BuffCoinPrice;

document.getElementById("PfPrice").innerHTML = PfCoinPrice;

document.getElementById("ScPrice").innerHTML = SproutCoinPrice;


function getRandomInt (min, max)
 {
 	return Math.random() * (max-min)  +min;
 }

var beanCoinChange = getRandomInt(-5.5, 5.5).toFixed(2);

var CraigCoinChange = getRandomInt(-5.5, 5.5).toFixed(2);

var FatCoinChange = getRandomInt(-5.5, 5.5).toFixed(2);

var BuffCoinChange = getRandomInt(-5.5, 5.5).toFixed(2);

var PfCoinChange = getRandomInt(-5.5, 5.5).toFixed(2);

var SproutCoinChange = getRandomInt(-5.5, 5.5).toFixed(2);


document.getElementById("bcChange").innerHTML = beanCoinChange;

document.getElementById("CcChange").innerHTML = CraigCoinChange;

document.getElementById("FcChange").innerHTML = FatCoinChange;

document.getElementById("BxChange").innerHTML = BuffCoinChange;

document.getElementById("PfChange").innerHTML = PfCoinChange;

document.getElementById("ScChange").innerHTML = SproutCoinChange;






 if(beanCoinChange > 0 ) {
 	document.getElementById("bcChange").style.color = 'green';
 	document.getElementById('bcChange').innerHTML= "+ " + beanCoinChange;
 }else if(beanCoinChange < 0) {
 	document.getElementById("bcChange").style.color = 'red';
 }

 if(CraigCoinChange > 0 ) {
 	document.getElementById("CcChange").style.color = 'green';
 	document.getElementById('CcChange').innerHTML= "+ " + CraigCoinChange;
 }else if(CraigCoinChange < 0) {
 	document.getElementById("CcChange").style.color = 'red';
 }

 if(FatCoinChange > 0 ) {
 	document.getElementById("FcChange").style.color = 'green';
 	document.getElementById('FcChange').innerHTML= "+ " + FatCoinChange;
 }else if(FatCoinChange < 0) {
 	document.getElementById("FcChange").style.color = 'red';
 }


if(BuffCoinChange > 0 ) {
 	document.getElementById("BxChange").style.color = 'green';
 	document.getElementById('BxChange').innerHTML= "+ " + BuffCoinChange;
 }else if(BuffCoinChange < 0) {
 	document.getElementById("BxChange").style.color = 'red';
 }

 if(PfCoinChange > 0 ) {
 	document.getElementById("PfChange").style.color = 'green';
 	document.getElementById('PfChange').innerHTML= "+ " + PfCoinChange;
 }else if(PfCoinChange < 0) {
 	document.getElementById("PfChange").style.color = 'red';
 }

 if(SproutCoinChange > 0 ) {
 	document.getElementById("ScChange").style.color = 'green';
 	document.getElementById('ScChange').innerHTML= "+ " + SproutCoinChange;
 }else if(SproutCoinChange < 0) {
 	document.getElementById("ScChange").style.color = 'red';
 }


var changeValues = [beanCoinChange,CraigCoinChange,FatCoinChange,BuffCoinChange,PfCoinChange,SproutCoinChange];
console.log(changeValues);

changeValues.map((element) => {
	if(change > 1.1) {
		

	}
})


