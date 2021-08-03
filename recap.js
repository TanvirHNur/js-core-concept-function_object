

// 1. recaping arry
var book = ['enjoy your life'];
// 2. recaping arry
var booklist =['you dont konw js', 'life meaning', 'hooked', 'start using your name', 'posiitioning'];

var lifeMeaning = booklist.indexOf('lifeMeaning');

booklist[1] = 'break the circle';

booklist.push('love yourself')
booklist.pop();

// 3. condition

if (booklist[3] == 'love your self'){
    console.log('love yourself');
}
else{
    console.log('please love yourself')
}


// 4.1 while loop 
var i = 0;   //  loop vairable
while (i  <= 10){
    console.log(i);
    console.log('loveYouJS')
    i++
}
 

// 4.2 for loop 
for(var i = 0; i <15; i++){
    var book = booklist[i];
    console.log(book)
}