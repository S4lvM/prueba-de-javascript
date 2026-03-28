function contCar(valor){
    contar = 0;
    cantMayus = 0;
    cantDig = 0;
    lista = [];
                
    for (i=0;i<valor.length;i++){
        if ((valor[i]!=" ")){
            lista.push(valor[i]);
            contar+=1;
            if (valor[i]>='A' && valor[i]<='Z'){
                cantMayus+=1;
            }
            if(valor[i] >= 0 && valor[i]<=9){
                cantDig+=1;
            }
        }
    }

    if (contar>=8 && cantMayus!=0 && cantDig!=0){
        alert('Contrasena valida')
    }else{
        alert('Contrasena invalida')
    }

console.log('Cantidad de caracteres: '+contar);
console.log('Cantidad de mayusculas: '+cantMayus);
console.log('Cantidad de digitos: '+cantDig);
}