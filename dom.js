        var n1 = Number(prompt('Digite a primeira nota:'))
        var n2 = Number(prompt('Digite a segunda nota:'))
        var n3 = Number(prompt('Digite a terceira nota:'))
        let nota = [n1, n2, n3]
        console.log(`Sua notas são ${nota[0]}, ${nota[1]}, ${nota[2]}`)
        var p1 = Number(prompt('Digite o peso da primeira nota:'))
        var p2 = Number(prompt('Digite o peso da segunda nota:'))
        var p3 = Number(prompt('Digite o peso da terceira nota:'))
        let peso = {p1:p1, p2:p2, p3:p3}
        console.log(`O pesos aplicados são respectivamente ${peso.p1}, ${peso.p2}, ${peso.p3}`)
        var mediapod = ((n1*p1)+(n2*p2)+(n3*p3))/(p1+p2+p3)
        console.log(`A média ponderada é ${mediapod}`)