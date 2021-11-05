
class Game {
    constructor () {
        this.bg = new Image()
        this.bg.src = "./background-black.png";
        this.navy = new Navy()
        this.meteorsArr = [new Meteors("./meteorBrown_big1.png", 150,0)]
        this.isWon = false;
        this.isGameOver = false;
        this.score = 0;
        this.count = 0
       
    }
    
    //METHODS
    
    randomMeteor = () => {
       
        let lastIndex = this.meteorsArr.length-1
        let lastMeteor = this.meteorsArr[lastIndex]
        let length = this.meteorsArr.length
        let i = 0
        
        if (lastMeteor.y > 300 && length < 300) {

            let randomPosX = Math.floor(Math.random()*650)
               
            let bigMeteorOne = new Meteors("./meteorBrown_big1.png", randomPosX)
            
            this.meteorsArr.push(bigMeteorOne)
                        
            let randomPosXTwo = randomPosX+250
            
            let bigMeteorTwo = new Meteors ("./meteorGrey_big3.png",randomPosXTwo)
            
            this.meteorsArr.push(bigMeteorTwo)
            
            let randomPosXThree = randomPosX+450
            
            let bigMeteorThree = new Meteors ("./meteorBrown_big1.png",randomPosXThree)
            
            this.meteorsArr.push(bigMeteorThree)
           
        
                                       
            if(length>50) {
              this.isWon = true  
            } 
        }
        
    }
       
    gameWin = () => {
        
        this.isWon = true
        canvas.style.display = "none";
        winScreen.style.display = "flex"

    }
    
    gameover = () => {
        
        this.isGameOver = true
        canvas.style.display = "none";
        gameoverScreen.style.display = "flex"
        
    }
                
    gameLoop = () => {
        //console.log(this.meteorsArr)
        //CLEAR CANVAS
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
    
        //Meteor
        this.meteorsArr.forEach((eachMeteorMove, i) => {
            if (eachMeteorMove.y > canvas.height){
                this.meteorsArr.splice(i, 1)
            }
            eachMeteorMove.meteorsMove()
        });
               
        //Navy
          
        //Global
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
        
        //Navy
        this.navy.drawNavy()

        //ADD Meteor

        this.randomMeteor() 
          
        // Draw meteor
        this.meteorsArr.forEach ((eachMeteor)=>{
            eachMeteor.drawMeteors()
            
        })
        

        // MOVEMENT and CHANGES on ELEMENTS
        
        this.meteorsArr.forEach((eachMeteor) => {
           if (this.navy.navyCollision(eachMeteor)){
               this.gameover()
               
           } else {
               this.count +=1
               this.score = Math.floor(this.count/360);
               
            }
            
        })
        
        if (this.score > 10) {
            this.isWon = true;
            this.gameWin();
        }
        timer.innerText =  this.score
         
        // ANIMATION FRAME and GAME LOGIC
        if (!this.isGameOver && !this.isWon) {
            requestAnimationFrame(this.gameLoop);
        }   
        

    };

}