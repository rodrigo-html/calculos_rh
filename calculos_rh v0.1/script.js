//menus
const boxMenu = document.querySelector('#boxMenu')
const boxExtras = document.querySelector('#boxExtras')
const boxComissao = document.querySelector('#boxComissao')
const menuExtra = document.querySelector('#menuExtra')
const menuComissao = document.querySelector('#menuComissao')
const btMenu = document.querySelector('#menu')

//opções
const opExtras = document.querySelector('#opExtras')
const opComissao = document.querySelector('#opComissao')

btMenu.addEventListener('click',()=>{
    boxMenu.style.display = 'block'
    boxExtras.style.display = 'none'
    boxComissao.style.display = 'none'
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