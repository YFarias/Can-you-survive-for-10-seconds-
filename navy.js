class Navy {
    constructor(){
        this.navyImage = new Image()
        this.navyImage.src="./ufoYellow.gif"
        this.width = 40;
        this.height = 40;
        this.navyX = canvas.width/2
        this.navyY = 500;
           
    }

    //METHODS
    drawNavy = () => {
        ctx.drawImage(this.navyImage, this.navyX, this.navyY, this.width, this.height)
    }
            
    moveNavy = (event)=> {        
        
        if(event.key === "ArrowRight") {
            this.navyX = this.navyX + 50
        }else if (event.key === "ArrowLeft") {
            this.navyX = this.navyX - 50
        } 
    }
    
    navyCollision = (eachMeteor) => {
                 
        if (this.navyX < eachMeteor.x + eachMeteor.width &&
            this.navyX + this.width > eachMeteor.x &&
            this.navyY < eachMeteor.y + eachMeteor.height &&
            this.height + this.navyY > eachMeteor.y)
        {

        return true;
            
        }

        return false
        
    }
    

}


        
    

    




    
        


