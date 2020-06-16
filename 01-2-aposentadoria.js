// calculo de aposentadoria

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const calculoAposentadoria = idade + contribuicao;

// verificação para mulheres
if(sexo == 'F' && contribuicao >= 30 && calculoAposentadoria >= 85){
        console.log(`${nome}, você pode se aposentar`)
    } else{
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
// verificação para homens    
if (sexo == 'M' && contribuicao >= 35 && calculoAposentadoria >= 90){
    console.log(`${nome}, você pode se aposentar`)
    } else{
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
    
 
