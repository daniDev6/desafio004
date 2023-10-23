
window.addEventListener('DOMContentLoaded',()=>{
    slider.addEventListener('input',()=>{
        console.log(slider.value)
        if(slider.value==1){
            rootStyle.setProperty('--main-background', 'hsl(222, 26%, 31%)')
            rootStyle.setProperty('--toggle-background-keypad-background', 'hsl(223, 31%, 20%)')
            rootStyle.setProperty('--screen-background', 'hsl(224, 36%, 15%)')
            rootStyle.setProperty('--key-white-boton', 'rgba(255, 255, 255, 0.8)')
            rootStyle.setProperty('--key-white-txt','hsl(268, 75%, 9%)')
            rootStyle.setProperty('--key-white-hover','white')
    
    
            rootStyle.setProperty('--blue-key-background', 'hsl(225, 21%, 49%)')
            rootStyle.setProperty('--blue-key-shadow', 'hsl(185, 58%, 25%)')
            
            rootStyle.setProperty('--red-key-background', 'hsl(6, 63%, 50%)')
            rootStyle.setProperty('--red-key-shadow', 'hsl(6, 70%, 34%)')
    
            rootStyle.setProperty('--orange-key-background', 'hsl(30, 25%, 89%)')
            rootStyle.setProperty('--orange-key-shadow', 'hsl(28, 16%, 65%)')
    
            rootStyle.setProperty('--blue-text', 'hsl(268, 75%, 9%)')
            rootStyle.setProperty('--white-text', 'hsl(0, 0%, 100%)')
    
        }else if(slider.value==2){
            rootStyle.setProperty('--main-background', 'hsl(0, 0%, 90%)')
            rootStyle.setProperty('--toggle-background-keypad-background', 'hsl(0, 5%, 81%)')
            rootStyle.setProperty('--screen-background', 'hsl(0, 0%, 93%)')
    
            rootStyle.setProperty('--key-white-boton', 'rgba(255, 255, 255, 0.8)')
            rootStyle.setProperty('--key-white-txt','hsl(268, 75%, 9%)')
            rootStyle.setProperty('--key-white-hover','white')
    
            rootStyle.setProperty('--blue-key-background', 'hsl(185, 42%, 37%)')
            rootStyle.setProperty('--blue-key-shadow', 'hsl(185, 58%, 25%)')
            
            rootStyle.setProperty('--red-key-background', 'hsl(25, 98%, 40%)')
            rootStyle.setProperty('--red-key-shadow', 'hsl(25, 99%, 27%)')
    
            rootStyle.setProperty('--orange-key-background', 'hsl(45, 7%, 89%)')
            rootStyle.setProperty('--orange-key-shadow', 'hsl(35, 11%, 61%)')
    
            rootStyle.setProperty('--blue-text', 'hsl(60, 10%, 19%)')
            rootStyle.setProperty('--white-text', 'hsl(60, 10%, 19%)')
        }else{
            rootStyle.setProperty('--main-background', 'hsl(268, 75%, 9%)')
            rootStyle.setProperty('--toggle-background-keypad-background', 'hsl(268, 71%, 12%)')
    
            rootStyle.setProperty('--screen-background', '#1E0836')
    
            rootStyle.setProperty('--key-white-boton', '#331B4D')
            rootStyle.setProperty('--key-white-txt','hsl(52, 100%, 62%)')
            rootStyle.setProperty('--key-white-hover','rgba(255, 255, 255, 0.2)')
    
    
    
            rootStyle.setProperty('--blue-key-background', 'hsl(281, 89%, 26%)')
            rootStyle.setProperty('--blue-key-shadow', 'hsl(285, 91%, 52%)')
            
            rootStyle.setProperty('--red-key-background', 'hsl(176, 100%, 44%)')
            rootStyle.setProperty('--red-key-shadow', 'hsl(177, 92%, 70%)')
    
            rootStyle.setProperty('--orange-key-background', 'hsl(268, 47%, 21%)')
            rootStyle.setProperty('--orange-key-shadow', 'hsl(290, 70%, 36%)')
    
            rootStyle.setProperty('--blue-text', 'hsl(198, 20%, 13%)')
            rootStyle.setProperty('--white-text', 'hsl(52, 100%, 62%)')
        }
    })
})
    
    const btn_del = document.getElementById('btn-del');
    const input= document.getElementById('input');
    const btn_igual= document.getElementById('btn-equal');
    let ecuacion=''
    let actual=''
    console.log(ecuacion.length)

const slider=document.getElementById('slider')
const bol=document.getElementById('bol')
const body=document.getElementsByTagName('body')[0]

const rootStyle=document.documentElement.style


const escribir=(id)=>{
    if(id.innerHTML=='x'){
        ecuacion+='*'
        input.innerHTML=ecuacion
    }else{
        ecuacion+=id.innerHTML
        actual=ecuacion.charAt(ecuacion.length - 1)
        
        input.innerHTML=ecuacion
    }
}

const borrar=()=>{
    if(ecuacion.length==0){
        alert('no hay nada')
    }else{
        btn_del.style.cursor='pointer'
        ecuacion=ecuacion.slice(0,ecuacion.length-1)
        actual=ecuacion.charAt(ecuacion.length - 1)
        input.innerHTML=ecuacion
    }

}

const calculate=()=>{
if(actual=='+'||actual=='-'||actual=='x'||actual=='/'){
    alert('no se puede operar porque termina en '+actual)
}else{
    if(eval(ecuacion)==Infinity){
        alert('no se puede dividir por 0')
        ecuacion=''
        input.innerHTML=''
        actual=''
    }else{
        input.innerHTML=eval(ecuacion)
        ecuacion=eval(ecuacion)
    }
}
}

const reset=()=>{
ecuacion=''
actual=''
input.innerHTML=''
}
































