const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const calculaAposenta = idade + contribuicao

if (sexo == 'M' && contribuicao >= 35 && calculaAposenta >= 95)
{
    console.log(`${nome}, você pode se aposentar.`)
} else{
    console.log(`${nome}, você não pode se aposentar.`)
}

if (sexo == 'F' && contribuicao >= 30 && calculaAposenta >= 85)
{
    console.log(`${nome}, você pode se aposentar`)
} else{
    console.log(`${nome}, você não pode se aposentar`)
}