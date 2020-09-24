class Ground {
  constructor(x, y, width, height) {
var options = {
  isStatic: false,
}
this.body=Bodies.rectangle(x, y, width, height, options);
this.width=width;
this.height=height;
World.add(world, this.body);
}
display()  {
   var pos=this.body.position;
   rectMode(CENTER);
   fill('red');
   rect(pos.x, pos.y, this.width, this.height);
   
}

}
box1.display();
box2.display();
box3.display();
box1 =new Box(300, 400, 50, 200);
	box2 =new Box(400, 500, 200, 50);
	box3 =new Box(300, 549, 250, 62);