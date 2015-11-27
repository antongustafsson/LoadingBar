function LoadingBar(color){
  this.e = function(){throw "The value has to be an integer between 0 and 100."}
  if(typeof color == 'undefined'){
    this.color = "#56C9F0";
  }else{
    this.color = color;
  }

this.element = document.createElement("div");
this.element.style.position = "absolute";
this.element.style.height = "4px";
this.element.style.width = "100%";
this.element.style.backgroundColor = this.color;
this.element.style.transition = "width 0.3s";
document.body.appendChild(this.element);
  this.changeValue=function(value){
try{
  if(value < 100 && value > 0){
    this.element.style.width = value.toString() + "%";
  }else{
this.e();
  }

}catch(e){
  this.e();
}
}

}
