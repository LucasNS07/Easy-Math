    function disabledButton() {
  
        const a = document.querySelector('#a').value;

        if (a) {
            document.querySelector('#botao').disabled = false;
            return
        }
            document.querySelector('#botao').disabled = true;
    }
    
    function calcular() {
        
        //limpa componentes
        document.getElementById("x1").value = ""
        document.getElementById("x2").value = ""
        document.getElementById("obs").value = ""

        a = document.getElementById("a").value
        b = document.getElementById("b").value
        c = document.getElementById("c").value

        delta = (b * b) - (4 * a * c)

        if (delta >= 0) {
            
            x1 = Math.round((-b + Math.sqrt(delta)) / (2 * a))
            x2 = Math.round((-b - Math.sqrt(delta)) / (2 * a))
            document.getElementById("x1").value = x1
            document.getElementById("x2").value = x2
            document.getElementById("obs").value = "Raízes Reais!"
        
        } else {
            document.getElementById("obs").value = "Raízes Indeterminadas!"
            document.getElementById("x1").value = " - "
            document.getElementById("x2").value = " - "

        }
    }



