class Snow{
    constructor( x ,y ){
      var options ={
          'restituition': 0,
          'isStatic' : false,
          'friction':0,
          'density':1.0
      }


      this.width = 20;
      this.height = 20;
      this.body = Bodies.rectangle(x , y, this.width, this.height, options);

      this.image = loadImage("snow4.webp");
      // this.trajectory =[];
      World.add(world, this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);

          image(this.image, 0, 0, this.width, this.height );
        
  // var position = [this.body.position.x];
  // this.trajectory.push(position);

 
          // var position = [this.body.position.y , this.body.position.x ];
          // this.trajectory.push(position);


        // for(var i=0; i<this.trajectory.length; i++){
        //   image(this.image, this.trajectory[i][0], this.trajectory[i][1]);
        // }

        pop();
      }
}