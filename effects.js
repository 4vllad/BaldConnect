
function drawSpark(n,xx,yy,width, height) {
    let spark = new Object();
    spark.x = xx;
    spark.y = yy;
    spark.width = width;
    spark.height = height;
    let sparks = new Array(n);

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(spark.x, spark.y,spark.width,spark.height);
    //enemy_image = new Image();
    //enemy_image.src = "pictures/lose-money.png";
    //ctx.drawImage(enemy_image,ballX,ballY,ballWidth,ballHeight);
    ctx.closePath();
    timeForAction = time%2;
    if (timeForAction == 1){
        sparkLifeTime = 0;
        sparkHit = false;
        move = 0;
    }

}

