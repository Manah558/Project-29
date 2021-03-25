class Projectile {
    constructor(x, y, height, angle) {
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:10,
      }
      this.pointB = pointB;
      this.body = Constraint.create(options);
      World.add(world, this.body);
    }

    release(){
        this.bodyA = null;
    }
   
    display(){
        if(this.bodyA){
            var bodyA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(1);
            stroke("grey");
            Line(pointA.x, pointA.y, pointB.x, pointB.y );
        }

    }

}