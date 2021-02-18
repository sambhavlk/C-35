var b1;

var database, position

function setup(){
    createCanvas(500,500);
    database = firebase.database()

    b1 = createSprite(250,250,10,10);
    b1.shapeColor = "red";

    var b1position = database.ref('Ball/Position')
    b1position.on("value", readPosition)

    var b1position = database.ref('Ball/Position')
    b1position.on("value", readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val()
    b1.x = position.x
    b1.y = position.y
}

function writePosition(x, y){
database.ref('Ball/Position').set({
    x:position.x + x,
    y:position.y + y
})
}