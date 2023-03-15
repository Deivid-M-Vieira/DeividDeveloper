function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','crianca-M_1.webp')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','jovem-H.webp')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','homem-A.webp')
            } else {
                //Idoso
                img.setAttribute('src','homem-I.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','crianca-F.webp')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','jovem-M.webp')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src','mulher-A.png')
            } else {
                //Idosa
                img.setAttribute('src','mulher-I.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}