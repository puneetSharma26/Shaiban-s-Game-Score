var gameState = "play"

var score=0;
var shaiban,shaibanImg;
var background1;
var obstacle10, obstacleGroup, obstacleGroup1, obstacleGroup2, obstacleGroup3, obstacleGroup4;
var obstacleGroup5, obstacleGroup6, obstacleGroup7, obstacleGroup8, obstacleGroup9;
var bomb, bombS, bombExplosion, bombGroup1, bombGroup2;
function preload(){
  obstacle10 = loadImage("images/1212.png");
  shaibanImg = loadImage("images/normie.png");
  background1 = loadImage("images/1243.png");
  bomb = loadImage("images/bomb.png");
}

function setup() {
  createCanvas(1200,800);
  shaiban = createSprite(50, 700, 50, 50);

   
  shaiban.addImage("normie", shaibanImg);
  shaiban.scale = 0.4;
  
  //obstacle = createSprite(1200,165,10,40);
  //obstacle1.scale = 0.3;
  //obstacle1.scale = 0.1;
  
   obstacleGroup = new Group();
  obstacleGroup1 = new Group();
  obstacleGroup2 = new Group();
  obstacleGroup3 = new Group();
  obstacleGroup4 = new Group();

  obstacleGroup5 = new Group();
  obstacleGroup6 = new Group();
  obstacleGroup7 = new Group();
  obstacleGroup8 = new Group();
  obstacleGroup9 = new Group();


  bombGroup1 = new Group();
  bombGroup2 = new Group();


}

function draw() {
  background(background1);  

  if(gameState==="play"){

  

  if(keyCode === UP_ARROW){
    console.log(shaiban.y)
    shaiban.y = shaiban.y-5;
  }

  if(keyCode === DOWN_ARROW){
    console.log(shaiban.y)
    shaiban.y = shaiban.y+5;
  }

  if(keyCode === RIGHT_ARROW){
    console.log(shaiban.y)
    shaiban.x = shaiban.x+5;
  }

  if(keyCode === LEFT_ARROW){
    console.log(shaiban.y)
    shaiban.x = shaiban.x-5;
  } 
  
 
  spawnObstacles1();
  if(obstacleGroup.isTouching(shaiban)){
      obstacleGroup.destroyEach();
      score+=1;
  }


  spawnObstacles2();
  if(obstacleGroup1.isTouching(shaiban)){
      obstacleGroup1.destroyEach();
      score+=1;
  }



  spawnObstacles3();
  if(obstacleGroup2.isTouching(shaiban)){
      obstacleGroup2.destroyEach();
      score+=1;
  }


  spawnObstacles4();
  if(obstacleGroup3.isTouching(shaiban)){
      obstacleGroup3.destroyEach();
      score+=1;
  }


  spawnObstacles5();
  if(obstacleGroup4.isTouching(shaiban)){
      obstacleGroup4.destroyEach();
      score+=1;
  }


  spawnObstacles6();
  if(obstacleGroup5.isTouching(shaiban)){
      obstacleGroup5.destroyEach();
      score+=1;
  }


  spawnObstacles7();
  if(obstacleGroup6.isTouching(shaiban)){
      obstacleGroup6.destroyEach();
      score+=1;
  }


  spawnObstacles8();
  if(obstacleGroup7.isTouching(shaiban)){
      obstacleGroup7.destroyEach();
      score+=1;
  }


  spawnObstacles9();
  if(obstacleGroup8.isTouching(shaiban)){
      obstacleGroup8.destroyEach();
      score+=1;
  }


  spawnObstacles11();
  if(obstacleGroup9.isTouching(shaiban)){
      obstacleGroup9.destroyEach();
      score+=1;
  }


if(frameCount>= 100){

  spawnbomb1();
  if(bombGroup1.isTouching(shaiban)){
        bombGroup1.destroyEach();
        gameState = "end";
  }


  spawnbomb2();
  if(bombGroup2.isTouching(shaiban)){
        bombGroup2.destroyEach();
        gameState = "end";
  }
    
/*if(obstacleGroup.isTouching(shaiban) ||obstacleGroup1.isTouching(shaiban)||obstacleGroup2.isTouching(shaiban)||
obstacleGroup3.isTouching(shaiban)|| obstacleGroup4.isTouching(shaiban)|| obstacleGroup5.isTouching(shaiban)|| obstacleGroup6.isTouching(shaiban)||
obstacleGroup7.isTouching(shaiban)|| obstacleGroup8.isTouching(shaiban)|| obstacleGroup.isTouching(shaiban))
{
score=score+5;
console.log(score)
}*/

}

  }
else if(gameState==="end"){
console.log("game ended")
}
  
/*if(obstacleGroup.isTouching(shaiban) ||obstacleGroup1.isTouching(shaiban)||obstacleGroup2.isTouching(shaiban)||
  obstacleGroup3.isTouching(shaiban)|| obstacleGroup4.isTouching(shaiban)|| obstacleGroup5.isTouching(shaiban)|| obstacleGroup6.isTouching(shaiban)||
  obstacleGroup7.isTouching(shaiban)|| obstacleGroup8.isTouching(shaiban)|| obstacleGroup.isTouching(shaiban))
  {
  score=score+5;
  console.log(score)
  }*/

  drawSprites();
  text("SCORE:"+score, 10, 750);
}

function spawnObstacles1() {
  if(frameCount % 750 === 0) {
    var obstacle = createSprite(1200,165,10,40);
    obstacle.scale = 0.3;
    //obstacle.velocityX = -(6 + 3*score/100);
    obstacle.velocityX = -3;
    //generate random obstacles
    var rand = Math.round(random(1,1));
    switch(rand) {
      case 1: obstacle.addImage(obstacle10);
              break;
      //case 2: obstacle.addImage(obstacle10);
            //  break;
      /* case 3: obstacle.addImage(obstacle1);
              break;
      case 4: obstacle.addImage(obstacle1);
              break;
      case 5: obstacle.addImage(obstacle1);
              break;
      case 6: obstacle.addImage(obstacle1);
              break;
      default: break;*/
     
    }
   
    obstacleGroup.add(obstacle);
  
  }}
  


  function spawnObstacles2() {
    if(frameCount %  600 === 0) {
      var obstacle = createSprite(1200,165,10,40);
      obstacle.scale = 0.3;
      //obstacle.velocityX = -(6 + 3*score/100);
      obstacle.velocityX = -3;
      //generate random obstacles
      var rand = Math.round(random(1,1));
      switch(rand) {
        case 1: obstacle.addImage(obstacle10);
                break;
       /* case 2: obstacle.addImage(obstacle1);
                break;
        case 3: obstacle.addImage(obstacle1);
                break;
        case 4: obstacle.addImage(obstacle1);
                break;
        case 5: obstacle.addImage(obstacle1);
                break;
        case 6: obstacle.addImage(obstacle1);
                break;
        default: break;*/
       
      }
     
      obstacleGroup1.add(obstacle);
    
    }}
  
    
    function spawnObstacles3() {
      if(frameCount % 450 === 0) {
        var obstacle = createSprite(1200,165,10,40);
        obstacle.scale = 0.3;
        //obstacle.velocityX = -(6 + 3*score/100);
        obstacle.velocityX = -3;
        //generate random obstacles
        var rand = Math.round(random(2,1));
        switch(rand) {
          case 1: obstacle.addImage(obstacle10);
                  break;
         /* case 2: obstacle.addImage(obstacle1);
                  break;
          case 3: obstacle.addImage(obstacle1);
                  break;
          case 4: obstacle.addImage(obstacle1);
                  break;
          case 5: obstacle.addImage(obstacle1);
                  break;
          case 6: obstacle.addImage(obstacle1);
                  break;
          default: break;*/
         
        }
       
        obstacleGroup2.add(obstacle);
      
      }}
  
      


      function spawnObstacles4() {
        if(frameCount % 300 === 0) {
          var obstacle = createSprite(1200,165,10,40);
          obstacle.scale = 0.3;
          //obstacle.velocityX = -(6 + 3*score/100);
          obstacle.velocityX = -3;
          //generate random obstacles
          var rand = Math.round(random(1,1));
          switch(rand) {
            case 1: obstacle.addImage(obstacle10);
                    break;
           /* case 2: obstacle.addImage(obstacle1);
                    break;
            case 3: obstacle.addImage(obstacle1);
                    break;
            case 4: obstacle.addImage(obstacle1);
                    break;
            case 5: obstacle.addImage(obstacle1);
                    break;
            case 6: obstacle.addImage(obstacle1);
                    break;
            default: break;*/
           
          }
         
          obstacleGroup3.add(obstacle);
        
        }}
  
        





        function spawnObstacles5() {
          if(frameCount % 150 === 0) {
            var obstacle = createSprite(1200,165,10,40);
            obstacle.scale = 0.3;
            //obstacle.velocityX = -(6 + 3*score/100);
            obstacle.velocityX = -3;
            //generate random obstacles
            var rand = Math.round(random(1,1));
            switch(rand) {
              case 1: obstacle.addImage(obstacle10);
                      break;
             /* case 2: obstacle.addImage(obstacle1);
                      break;
              case 3: obstacle.addImage(obstacle1);
                      break;
              case 4: obstacle.addImage(obstacle1);
                      break;
              case 5: obstacle.addImage(obstacle1);
                      break;
              case 6: obstacle.addImage(obstacle1);
                      break;
              default: break;*/
             
            }
           
            obstacleGroup4.add(obstacle);
          
          }}
  
          
  





























          function spawnObstacles6() {
            if(frameCount % 750 === 0) {
              var obstacle = createSprite(1200, 635, 10, 40);
              obstacle.scale = 0.3;
              //obstacle.velocityX = -(6 + 3*score/100);
              obstacle.velocityX = -3;
              //generate random obstacles
              var rand = Math.round(random(1,1));
              switch(rand) {
                case 1: obstacle.addImage(obstacle10);
                        break;
               /* case 2: obstacle.addImage(obstacle1);
                        break;
                case 3: obstacle.addImage(obstacle1);
                        break;
                case 4: obstacle.addImage(obstacle1);
                        break;
                case 5: obstacle.addImage(obstacle1);
                        break;
                case 6: obstacle.addImage(obstacle1);
                        break;
                default: break;*/
               
              }
             
              obstacleGroup5.add(obstacle);
            
            }}










            
        function spawnObstacles7() {
          if(frameCount % 600 === 0) {
            var obstacle = createSprite(1200,635,10,40);
            obstacle.scale = 0.3;
            //obstacle.velocityX = -(6 + 3*score/100);
            obstacle.velocityX = -3;
            //generate random obstacles
            var rand = Math.round(random(1,1));
            switch(rand) {
              case 1: obstacle.addImage(obstacle10);
                      break;
             /* case 2: obstacle.addImage(obstacle1);
                      break;
              case 3: obstacle.addImage(obstacle1);
                      break;
              case 4: obstacle.addImage(obstacle1);
                      break;
              case 5: obstacle.addImage(obstacle1);
                      break;
              case 6: obstacle.addImage(obstacle1);
                      break;
              default: break;*/
             
            }
           
            obstacleGroup6.add(obstacle);
          
          }}





















          
        function spawnObstacles8() {
          if(frameCount % 450 === 0) {
            var obstacle = createSprite(1200,635,10,40);
            obstacle.scale = 0.3;
            //obstacle.velocityX = -(6 + 3*score/100);
            obstacle.velocityX = -3;
            //generate random obstacles
            var rand = Math.round(random(1,1));
            switch(rand) {
              case 1: obstacle.addImage(obstacle10);
                      break;
             /* case 2: obstacle.addImage(obstacle1);
                      break;
              case 3: obstacle.addImage(obstacle1);
                      break;
              case 4: obstacle.addImage(obstacle1);
                      break;
              case 5: obstacle.addImage(obstacle1);
                      break;
              case 6: obstacle.addImage(obstacle1);
                      break;
              default: break;*/
             
            }
           
            obstacleGroup7.add(obstacle);
          
          }}


















          
        function spawnObstacles9() {
          if(frameCount % 350 === 0) {
            var obstacle = createSprite(1200,635,10,40);
            obstacle.scale = 0.3;
            //obstacle.velocityX = -(6 + 3*score/100);
            obstacle.velocityX = -3;
            //generate random obstacles
            var rand = Math.round(random(1,1));
            switch(rand) {
              case 1: obstacle.addImage(obstacle10);
                      break;
             /* case 2: obstacle.addImage(obstacle1);
                      break;
              case 3: obstacle.addImage(obstacle1);
                      break;
              case 4: obstacle.addImage(obstacle1);
                      break;
              case 5: obstacle.addImage(obstacle1);
                      break;
              case 6: obstacle.addImage(obstacle1);
                      break;
              default: break;*/
             
            }
           
            obstacleGroup8.add(obstacle);
          
          }} 





            
        function spawnObstacles11() {
          if(frameCount % 150=== 0) {
            var obstacle = createSprite(1200,635,10,40);
            obstacle.scale = 0.3;
            //obstacle.velocityX = -(6 + 3*score/100);
            obstacle.velocityX = -3;
            //generate random obstacles
            var rand = Math.round(random(1,1));
            switch(rand) {
              case 1: obstacle.addImage(obstacle10);
                      break;
             /* case 2: obstacle.addImage(obstacle1);
                      break;
              case 3: obstacle.addImage(obstacle1);
                      break;
              case 4: obstacle.addImage(obstacle1);
                      break;
              case 5: obstacle.addImage(obstacle1);
                      break;
              case 6: obstacle.addImage(obstacle1);
                      break;
              default: break;*/
             
            }
           
            obstacleGroup9.add(obstacle);
          
          }} 












          function spawnbomb1() {
                if(frameCount % 200=== 0) {
                  var obstacle = createSprite(1200,165,10,40);
                  obstacle.scale = 0.1;
                  //obstacle.velocityX = -(6 + 3*score/100);
                  obstacle.velocityX = -1;
                  //generate random obstacles
                  var rand = Math.round(random(1,1));
                  switch(rand) {
                    case 1: obstacle.addImage(bomb);
                            break;
                   /* case 2: obstacle.addImage(obstacle1);
                            break;
                    case 3: obstacle.addImage(obstacle1);
                            break;
                    case 4: obstacle.addImage(obstacle1);
                            break;
                    case 5: obstacle.addImage(obstacle1);
                            break;
                    case 6: obstacle.addImage(obstacle1);
                            break;
                    default: break;*/
                   
                  }
                 
                 bombGroup1.add(obstacle);
                
                }} 







                function spawnbomb2() {
                        if(frameCount % 200=== 0) {
                          var obstacle = createSprite(1200,635,10,40);
                          obstacle.scale = 0.1;
                          //obstacle.velocityX = -(6 + 3*score/100);
                          obstacle.velocityX = -2;
                          //generate random obstacles
                          var rand = Math.round(random(1,1));
                          switch(rand) {
                            case 1: obstacle.addImage(bomb);
                                    break;
                           /* case 2: obstacle.addImage(obstacle1);
                                    break;
                            case 3: obstacle.addImage(obstacle1);
                                    break;
                            case 4: obstacle.addImage(obstacle1);
                                    break;
                            case 5: obstacle.addImage(obstacle1);
                                    break;
                            case 6: obstacle.addImage(obstacle1);
                                    break;
                            default: break;*/
                           
                          }
                         
                          obstacleGroup9.add(obstacle);
                        
                        }} 