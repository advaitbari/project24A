class dustbin 
{
constructor(x,y,width,height)

{
    var options={
        isStatic:false,
        restitution:0.03,
        friction:0.03,
        density:1.2
       
    }
this.height=height;
    this.width=width
    this.body=Bodies.rect(x,y,this.height,this.width,options)
Workld.add(world,this.body)
}
display(){
    
     push()

    
     rectmode(CENTER)
     fill(255,0,255)
     ellipse(0,0,this.width,this.height);
     pop();
}
}
   
