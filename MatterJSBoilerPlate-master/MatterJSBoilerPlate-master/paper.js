class paper 
{
constructor(x,y,r)

{
    var options={
        isStatic:false,
        restitution:0.03,
        friction:0.03,
        density:1.2
       
    }
    this.x=50,
    this.y=400,
    this.r=20
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
Workld.add(world,this.body)
}
display(){
    var paperpos=this.body.position;
     push()

     translate(paper.pos.x,paper.pos.y);
     rectmode(CENTER)
     fill(255,0,255)
     ellipse(0,0,this.r,this.r);
     pop();
}
}
   
