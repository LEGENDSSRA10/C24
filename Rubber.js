class Rubber{
	constructor(x, y, width, height)
	{
		var options = 
		{
			restitution : 0.3,
			friction : 0.5,
			density : 1
		}
		this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
	}
	display()
	{
			var rubberpos = this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("red");
			fill("darkred");
			rect(0, 0, this.width, this.height)
            pop()
	}

}