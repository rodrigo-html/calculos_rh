//menus
const btAdd = document.querySelector('#btAdd')
const paiTabelas = document.querySelector('#paiTabelas')
const tabelas = document.querySelector('#tabelas')
const ulTabelas = document.querySelector('#ulTabelas')
const boxMenu = document.querySelector('#boxMenu')
const boxExtras = document.querySelector('#boxExtras')
const boxComissao = document.querySelector('#boxComissao')
const boxNoturno = document.querySelector('#boxNoturno')
const menuExtra = document.querySelector('#menuExtra')
const menuComissao = document.querySelector('#menuComissao')
const btMenu = document.querySelector('#menu')

//opções
const opExtras = document.querySelector('#opExtras')
const opComissao = document.querySelector('#opComissao')
const opNoturno = document.querySelector('#opNoturno')
let mostrador = true

btAdd.addEventListener('click',()=>{
    if(mostrador){
        paiTabelas.style.display = 'block'
        setTimeout(()=>{tabelas.style.top = '0%'},1)
        btAdd.innerHTML = "-"
        mostrador = false
    }else if(mostrador==false){
        tabelas.style.top = '-100%'
        setTimeout(()=>{paiTabelas.style.display = 'none'},500)
        btAdd.innerHTML = "+"
        mostrador = true
    }
})

btMenu.addEventListener('click',()=>{
    boxMenu.style.display = 'block'
    boxExtras.style.display = 'none'
    boxComissao.style.display = 'none'
    boxNoturno.style.display = 'none'
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

function extras(){
    document.querySelector('#btExtra').addEventListener('click',()=>{
        var jornada = document.querySelector('#jornada')
        var salario = document.querySelector('#salario')
        var horas = document.querySelector('#totais')
        var minutos = document.querySelector('#minutos')
        var decimais = Math.round(((minutos.value/60)*100))
        var total = document.querySelector('#totalExtra')
        var hor
        var res
        jornada = Number(jornada.value)
        if(document.forms[0].elements[5].value=='50'){
            hor = Number(`${horas.value}.${decimais}`)
            res = (salario.value/jornada)*hor
            res = res + res/100*50
            total.value=res
        }else if(document.forms[0].elements[5].value=='55'){
            hor = Number(`${horas.value}.${decimais}`)
            res = (salario.value/jornada)*hor
            res = res + res/100*55
            total.value=res
        }else if(document.forms[0].elements[5].value=='60'){
            hor = Number(`${horas.value}.${decimais}`)
            res = (salario.value/jornada)*hor
            res = res + res/100*60
            total.value=res
        }else if(document.forms[0].elements[5].value=='65'){
            hor = Number(`${horas.value}.${decimais}`)
            res = (salario.value/jornada)*hor
            res = res + res/100*65
            total.value=res
        }else if(document.forms[0].elements[5].value=='70'){
            hor = Number(`${horas.value}.${decimais}`)
            res = (salario.value/jornada)*hor
            res = res + res/100*70
            total.value=res
        }else if(document.forms[0].elements[5].value=='75'){
            hor = Number(`${horas.value}.${decimais}`)
            res = (salario.value/jornada)*hor
            res = res + res/100*75
            total.value=res
        }else if(document.forms[0].elements[5].value=='80'){
            hor = Number(`${horas.value}.${decimais}`)
            res = (salario.value/jornada)*hor
            res = res + res/100*80
            total.value=res
        }else if(document.forms[0].elements[5].value=='100'){
            hor = Number(`${horas.value}.${decimais}`)
            res = (salario.value/jornada)*hor
            res = res + res/100*100
            total.value=res
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

    })

}