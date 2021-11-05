class Meteors {
    constructor (srcImage,xPos){
        this.meteorsImage = new Image()
        this.meteorsImage.src = srcImage
        this.width = 30 + Math.floor(Math.random()*30)
        this.height = 30 + Math.floor(Math.random()*30)
        this.x = xPos
        this.y = 0
    }

    drawMeteors = () => {
        ctx.drawImage(this.meteorsImage, this.x, this.y, this.width, this.height)
    }
    meteorsMove = () => {
        this.y+=15
    }
}