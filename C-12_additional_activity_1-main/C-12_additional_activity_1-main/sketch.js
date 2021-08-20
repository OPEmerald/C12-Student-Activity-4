
function find_num(arr,x)
{
  var arr =[1,2,3,4,5,6,7,8,9,10];
  let ar = random(arr);
  textSize(20);
  text(ar,200,200);
  console.log(ar);
}
function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
   background(220);
   find_num();
}
