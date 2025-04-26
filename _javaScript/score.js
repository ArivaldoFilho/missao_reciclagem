class Score{
    constructor(x, y, time){
        this.x = x;
        this.y = y;
        this.alpha = 1;
        this.score = 0;
        this.timeControl = time;
    }
    
    setAlpha(alpha){
        this.alpha = alpha;
    }
    
    setX(x){
        this.x = x;
    }
    
    setY(y){
        this.y = y;
    }
    
    setScore(score){
        this.score = score;
    }
    
    getAlpha(){
        return this.alpha;
    }
    
    getX(){
        return this.x;
    }
    
    show() {
        noStroke();
        if(this.score > 0) {
            fill('rgba(255,255,255,'+ this.alpha + ')');
        } else {
            fill('rgba(255,0,0,'+ this.alpha + ')');
        }
        textSize(width*0.03);
        text(this.score, this.x, this.y);
        if(millis()-this.timeControl >= 10) {
            this.y -= height*0.003;
            if(this.alpha > 0.015){
                this.alpha -= 0.015;
            } else {
                this.alpha = 0;
            }
            this.timeControl = millis();
        }
    }
    
}


function mostrarResultado(score) {
    document.getElementById('scoreField').value = score;
  
    const mensagemEl = document.getElementById('resultadoMensagem');
  
    if (score === 120) {
      mensagemEl.textContent = "Parabéns! Você ajudou a deixar o mundo mais limpo!";
    } else if (score > 0 && score < 120) {
      mensagemEl.textContent = "Você está no caminho certo para ajudar o mundo a se tornar um lugar melhor!";
    } else {
      mensagemEl.textContent = "";
    }
  
    $('#resultadoModal').modal('show');
  }
  