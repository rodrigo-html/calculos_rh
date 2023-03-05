//menus
const btAdd = document.querySelector('#btAdd')
const paiTabelas = document.querySelector('#paiTabelas')
const tabelas = document.querySelector('#tabelas')
const ulTabelas = document.querySelector('#ulTabelas')
const boxMenu = document.querySelector('#boxMenu')
const boxExtras = document.querySelector('#boxExtras')
const boxComissao = document.querySelector('#boxComissao')
const boxNoturno = document.querySelector('#boxNoturno')
const boxAddNoturno = document.querySelector('#boxAddNoturno')
const boxExperiencia = document.querySelector('#boxExperiencia')
const menuExtra = document.querySelector('#menuExtra')
const menuComissao = document.querySelector('#menuComissao')
const btMenu = document.querySelector('#menu')

//opções
const opExtras = document.querySelector('#opExtras')
const opComissao = document.querySelector('#opComissao')
const opNoturno = document.querySelector('#opNoturno')
const opAddNoturno = document.querySelector('#opAddNoturno')
const opExperiencia = document.querySelector('#opExperiencia')
let mostrador = true

btAdd.addEventListener('click',()=>{
    if(mostrador){
        paiTabelas.style.display = 'block'
        setTimeout(()=>{tabelas.style.top = '0%'},1)
        btAdd.innerHTML = "-"
        mostrador = false
    }else if(mostrador==false){
        tabelas.style.top = '-100%'
        setTimeout(()=>{paiTabelas.style.display = 'none'},200)
        btAdd.innerHTML = "+"
        mostrador = true
    }
})

btMenu.addEventListener('click',()=>{
    boxMenu.style.display = 'block'
    boxExtras.style.display = 'none'
    boxComissao.style.display = 'none'
    boxNoturno.style.display = 'none'
    boxAddNoturno.style.display = 'none'
    boxExperiencia.style.display = 'none'
})

opExtras.addEventListener('click',()=>{
    boxMenu.style.display = 'none'
    boxExtras.style.display = 'block'
    extras()
})
opComissao.addEventListener('click',()=>{
    boxMenu.style.display = 'none'
    boxComissao.style.display = 'block'
    comissao()
})
opNoturno.addEventListener('click',()=>{
    boxMenu.style.display = 'none'
    boxNoturno.style.display = 'block'
    noturno()
})
opAddNoturno.addEventListener('click',()=>{
    boxMenu.style.display = 'none'
    boxAddNoturno.style.display = 'block'
    addNoturno()
})
opExperiencia.addEventListener('click',()=>{
    boxMenu.style.display = 'none'
    boxExperiencia.style.display = 'block'
    experiencia()
})

function extras(){
    document.querySelector('#btExtra').addEventListener('click',()=>{
        let jornada = Number(document.querySelector('#jornada').value)
        let salario = document.querySelector('#salario')
        let horas = document.querySelector('#totais')
        let minutos = document.querySelector('#minutos')
        let decimais = Math.round(((minutos.value/60)*100))
        let total = document.querySelector('#totalExtra')
        let hor
        let res
        let ponto
        if(document.forms[0].elements[5].value=='50'){
            calc(50)
        }else if(document.forms[0].elements[5].value=='55'){
            calc(55)
        }else if(document.forms[0].elements[5].value=='60'){
            calc(60)
        }else if(document.forms[0].elements[5].value=='65'){
            calc(65)
        }else if(document.forms[0].elements[5].value=='70'){
            calc(70)
        }else if(document.forms[0].elements[5].value=='75'){
            calc(75)
        }else if(document.forms[0].elements[5].value=='80'){
            calc(80)
        }else if(document.forms[0].elements[5].value=='100'){
            calc(100)
        }
        function calc(porcentagem){
            hor = Number(`${horas.value}.${decimais}`)
            res = (salario.value/jornada)*hor
            res = res + res/100*porcentagem
            res = res.toString()
            ponto = res.indexOf('.')
            if(ponto>0){
                res = res.substring(0,ponto)+','+res.slice(ponto+1,ponto+3)
            }
            total.value=res
            total.style.animation = 'result 250ms ease-out'
            setTimeout(()=>{total.style.animation='none'},250)
        }
    })
}

function comissao(){
    //largura: 446
    //altura: 891
    const btCalc = document.querySelector('#btComissao')
    btCalc.addEventListener('click',()=>{
    //formulario elementos
    const dias = document.querySelector('#dias')
    const uteis = document.querySelector('#uteis')
    const valor = document.querySelector('#valor')
    //resultado elementos
    const dsr = document.querySelector('#dsr')
    const totalComissao = document.querySelector('#totalComissao')

    if(!dias.value||!uteis.value||!valor.value){
        alert('Preencha todos os campos')
    }else{
        calc()
    }
    })
}
function calc(){  
    dsr.value = (((valor.value*uteis.value)/dias.value)/(uteis.value))*(dias.value-uteis.value)
    totalComissao.value = ((valor.value*uteis.value)/dias.value)
    totalComissao.style.animation = 'result 250ms ease-out'
    dsr.style.animation = 'result 250ms ease-out'
    setTimeout(()=>{totalComissao.style.animation='none';dsr.style.animation='none'},250)
}

function noturno(){
    const btNoturno = document.querySelector('#btNoturno')
    const totalNoturno = document.querySelector('#totalNoturno')
    btNoturno.addEventListener('click',()=>{
        let horasN = document.querySelector('#horasN')
        let minutosN = document.querySelector('#minutosN')
        let res
        let resto
        let hor
        let min
        minutosN = (Number(minutosN.value)/60)*100
        minutosN = minutosN.toString()
        minutosN = minutosN.split('.')
        minutosN = Number(minutosN[0])
        let soma = `${horasN.value}.${minutosN}`
        soma = Number(soma)
        res = soma*1.1428571
        res = res.toString()
        resto = res.split('.')
        hor = Number(resto[0])
        resto = (Number(resto[1])/100)*60
        resto = resto.toString()
        resto = resto.split('.')
        resto = resto[0]
        resto = resto.slice(0,2)
        resto = Number(resto)
        if(resto>=60){
            resto = resto.toString()
            resto = resto.slice(0,1)
            min = 0+resto
            totalNoturno.value = hor+':'+min
        }else{
            totalNoturno.value = hor+':'+resto
        }
        totalNoturno.style.animation = 'result 250ms ease-out'
        setTimeout(()=>{totalNoturno.style.animation='none'},250)
    })

}

function addNoturno(){
    document.querySelector('#btAdNoturno').addEventListener('click',()=>{
        let jornada = Number(document.querySelector('#jornadaAn').value)
        let salario = Number(document.querySelector('#salarioAn').value)
        let hora = Number(document.querySelector('#horasAn').value)
        let minutos = Number(document.querySelector('#minutosAn').value)
        let total = document.querySelector('#totalAdNoturno')
        let horas
        let res
        let ponto
        if(minutos>=60||minutos<0){
            alert('ERRO\nOs minutos informados devem ser de 0 a 59')
        }else{
            minutos = Math.round(((minutos/60)*100))
            res = (((salario/jornada)/100)*20)
            horas = Number(`${hora}.${minutos}`)
            res = res*horas
            res = res.toString()
            ponto = res.indexOf('.')
            if(ponto>0){
                res = res.substring(0,ponto)+','+res.slice(ponto+1,ponto+3)
            }
            total.value = res
        }
        total.style.animation = 'result 250ms ease-out'
        setTimeout(()=>{total.style.animation='none'},250)
    })
}

function experiencia(){
    document.querySelector('#btExperiencia').addEventListener('click',()=>{
        let data = document.querySelector('#data').value
        let dias = Number(document.querySelector('#diasE').value)
        let res = document.querySelector('#fimExperiencia')
        data = new Date(data)
        let dataN = data.getDate()+dias+1
        data = new Date(data.setDate(dataN))
        data = data.toLocaleDateString('pt-BR')
        res.value = data
        res.style.animation = 'result 250ms ease-out'
        setTimeout(()=>{res.style.animation='none'},250)
    })
}