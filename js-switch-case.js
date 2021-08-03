// switch is just like if else condition
// but there is few difference
// three things is needed to wirte switch'
// 1. switch 
// 2. (value)
// 3.case (value)
// 4. console.log
// 5. break

// you can also write casees togther

var color = 'white';
if (color == blue){
    console.log('it is blue color');
}
else if (color == red){
    console.log('this is red color');
}
else if (color == yellow){
    console.log('this is yellow color')
}
else if (color == green){
    console.log('color is green');
}

else if (color == white){
    console.log('color is white');
}

else if (color == sunkiss){
    console.log('color is sunkiss');
}

else if (color == sky){
    console.log('color is sky');
}
else{
    console.log('this is black');
}

// switch
var color = 'white';

switch(color){
    case 'blue':
        console.log('it is blue color');
        break;
    case 'red':
        console.log('it is red color');  
        break;
    case 'yellow':
        console.log('it is yellow color');
        break;
    case 'green':
        console.log('it is green color'); 
        break;   
    case 'white':
        console.log('it is white color');
        break;
    case 'sky':
        console.log('it is sky color');
        break;
        default:
            console.log('it is black color');
}