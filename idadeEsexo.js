var cont = 1;
var sMas = 0;
var sFem = 0;
var mediaGeral;
var mediaMas;
var soma = 0;
var idadeMas = 0;
var idaFem = 0;

while (cont <= 5) {
  
    var pIdade = parseInt(prompt("digite sua Idade: "));
    var pSexo = prompt("digite seu sexo M ou F: ");
    var string = pSexo.toUpperCase();

       if (string == "M") {
          sMas++; 
          idadeMas+=pIdade;
       }

       else if (string == "F") {
          sFem++;
          if (pIdade > 20) {
            idaFem++;
          }
       }
       

    soma += pIdade;
    
cont++;   
}

mediaGeral = (soma/5);
mediaMas = (idadeMas/sMas);




console.log("homens: ", sMas);
console.log("mulheres: ", sFem);
console.log("media de idade: ", mediaGeral);
console.log("media idade masculina: ", mediaMas.toFixed(2)*1);
console.log("mulheres com mais de 20 anos: ", idaFem);
