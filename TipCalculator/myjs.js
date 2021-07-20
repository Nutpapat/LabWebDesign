document.write('This is my first JAvaScript code. ');

//1. Change the background color of a first paragraph to #FCF3CF
document.getElementById('first_paragraph').style.backgroundColor = '#FCF3CF';

//2. Insert content into a second paragraph
document.getElementById('second_paragraph').innerHTML = 'This is a second paragraph. And this paragraph is inserted by Javascript.';

//3. Change the last boys name into '#2874A6' color 
var boys = document.getElementsByName('boys');
boys[boys.length-1].style.color = '#2874A6';
document.getElementsByName('boys')[2].style.color = '#2874A6';

//Calculate summalation
function calcSum(){
	var numX = parseInt(document.mainForm.textBox1.value);
	var numY = parseInt(document.mainForm.textBox2.value);
	var output = numX + numY;
	console.log(output);
	document.mainForm.textBoxSum.value = output;
}

//4. Mouse move events displayDate
function displayDate(){
	document.getElementById('date_output').innerHTML = Date();
}

//5. Mouse move events countClick
var count=0;
function countClick(){
	var tmp = document.getElementById('cButton');
	count +=1;
	tmp.innerHTML = 'Clicked = ' + count;
}

//6. Mouse move events enlargeLabel
function enlargeLabel(){
	document.getElementById('eButton').style.fontSize = '3em';
}

//7. Mouse move events resetLable
function resetLable(){
	document.getElementById('eButton').style.fontSize = '1em';
}

//8. KEYBOARD EVENT: EXERCISE
var countx=0;
var county=0;
document.onkeydown = function(){
	var char = window.event.keyCode;
	switch(char){
		case 37:
			countx -=1;
			document.getElementById('position').innerHTML = 'Current position = ' +'('+ countx +',' + county +')';
			break;
		case 38:
			county +=1;
			document.getElementById('position').innerHTML = 'Current position =  ' +'('+ countx +',' + county +')';
			break;
		case 39:
			countx +=1;
			document.getElementById('position').innerHTML = 'Current position =  ' +'('+ countx +',' + county +')'
			break;
		case 40:
			county -=1;
			document.getElementById('position').innerHTML = 'Current position =  ' +'('+ countx +',' + county +')'
			break;
	}
}