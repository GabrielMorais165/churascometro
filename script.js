function calcular(){



var adt=document.getElementById("adultos")
var crç=document.getElementById("crianças")
var hrs=document.getElementById("horas")
var bto=document.getElementById("calcular")



var adultos=parseInt(adt.value)
var crianças=parseInt(crç.value)
var horas=hrs.value



var adultoCarne=0.4*adultos
var criançasCarne=0.2*crianças
var adultoCerveja=3*adultos
var criançasRefri=Math.round(1*crianças/2)



 //var carneAPHR=adultoCarne*horas/2
 //var carneCPHR=criançasCarne*horas/2



var totalCarne1=adultoCarne+criançasCarne
var totalCarne=totalreal(totalCarne1)

var carne =document.getElementById("resCarne")
var cerveja =document.getElementById("resCerveja")
var refri =document.getElementById("resRefri")
    

        
        // carne.innerHTML="É necessario "+totalCarne+"kg de carne para "+adultos+" adultos e "+crianças+" crianças"
        // cerveja.innerHTML="É necessario "+adultoCerveja+" latas de cerveja para "+adultos+" adultos"
        // refri.innerHTML="É necessario "+criançasRefri+" garafas de Refrigerante para "+crianças+" crianças"
        

        if(crianças!=NaN && adultos!=NaN){
            carne.innerHTML="É necessario "+totalCarne+" kg de carne para "+adultos+" adultos e "+crianças+" crianças"
            cerveja.innerHTML="É necessario "+adultoCerveja+" latas de cerveja para "+adultos+" adultos"
            refri.innerHTML="É necessario "+criançasRefri+" garafas de Refrigerante para "+crianças+" crianças"
            }
        else{
            alert("Por Favor coloque  a quantidade de pessoas que irão participar")
        }
}
function totalreal(n){
    return (Math.round(n*100)/100).toFixed(1)
}






/*if(adultos<=0){
    carne.innerHTML="É necessario "+criançasCarne+"kg de carne para "+crianças+" crianças"
    refri.innerHTML="É necessario "+criançasRefri+" garafas de Refrigerante para "+crianças+" crianças" 
}else if(crianças<=0){
    carne.innerHTML="É necessario "+adultoCarne+"kg de carne para "+adultos+" adultos"
    cerveja.innerHTML="É necessario "+adultoCerveja+" latas de cerveja para "+adultos+" adultos"
}*/