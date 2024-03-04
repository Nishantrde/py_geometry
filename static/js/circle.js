kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    background: [0, 0, 0],    
    debug: true,
    focus: false,
  });
add([
    pos(width()/2, height()/3-1),
    rect(35, 2.5),
    outline(1),
    color(250,250,0),
])
let x=0,y=0

let point = add([
    pos(width()/2, height()/3),
    circle(2),
    color(250, 0, 0)
])

let pointer = add([
    pos(0, 0),
    circle(2),
    color(250, 0, 250)
])
let angle_pointer = add([
    pos(0, 0),
    circle(2),
    color(0, 0, 250)
])

let delx = 0, dely = 0, dx = 0, dy = 0, distance = 0, nx = 0, ny = 0
let pointx = point.pos.x, pointy = point.pos.y, angle = 0

let text_ = add([
    pos(width()/2, height()/2+50),
    text("Mouse: "+Math.floor(x)+","+Math.floor(y), {
        size: 10, 
        width: 320, 
        font: "sans-serif",
        
    }),
    color(230,230,0),
])

onUpdate(() =>{
    drawCircle({
        pos: vec2(width()/2, height()/3),
        radius: 35,
        color: rgb(0, 250, 0),
    })
    drawCircle({
        pos: vec2(width()/2, height()/3),
        radius: 33,
        color: rgb(0, 0, 0),
    })
x = mousePos().x
y = mousePos().y
delx = mouseDeltaPos().x
dely = mouseDeltaPos().y
distance = Math.floor(Math.sqrt((x-delx)*(x-delx)+(y-dely)*(y-dely)))
angle = (Math.atan2(pointy - y, x - pointx) * 180 / Math.PI + 360) % 360;
console.log(angle)

//console.log(delx,dely)

pointer.pos.x = point.pos.x + 35 * Math.cos(-(angle * Math.PI)/180)
pointer.pos.y = point.pos.y + 35 * Math.sin(-(angle * Math.PI)/180)

if (delx!=0||dely!=0){

    destroy(text_)
    let xx = Math.floor(x)-Math.floor(pointx)
    let yy = Math.floor(pointy)-Math.floor(y)
    
    text_ = add([
        pos(width()/2, height()/2+50),
        text("Mouse: "+xx+","+yy, {
            size: 10, 
            width: 320, 
            font: "sans-serif",
            
        }),
        color(230,230,0),
    ])
    
    drawLine({
        p1: point.pos,
        p2: pointer.pos, 
        width: 2,
        color: rgb(250, 250, 0),
    })
    
    //  drawLines({
    //      pts: [point.pos, mousePos(), point.pos, (Math.floor(width()/2), Math.floor(height()/2+50))],
    //      width: 2,
    //      color: rgb(200, 100, 0),
    //  })
}

})

