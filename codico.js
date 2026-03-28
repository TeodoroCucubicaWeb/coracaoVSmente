        function ler(){
        const musicIcon = document.getElementById('music-icon');
        const audio = document.getElementById('audio');
        
        if (audio.paused) {
                audio.play();
                musicIcon.innerHTML = "ON 🔊"; // Mudando o ícone para "tocar"
                musicIcon.style.background = 'green';
            } else {
                audio.pause();
                musicIcon.innerHTML = "OFF 🔊"; // Mudando o ícone para "parar"
                musicIcon.style.background = 'red';
            }

        }

        function portfolio(){
            alert("Você ira para o Portfólio de Teodoro Web!")
        }

        function substituirTexto(){
            const input = document.getElementById('meuInput');
            const container = document.getElementById('container');
            const valor = input.value;
            // verifica se o usuario digitou algo

            if (valor.trim() !== ""){
                // substitui o conteudo do container apenas pelo texto

                container.innerHTML = `<span>${valor}</span>`;
                
            }
            else{
                alert("por favor, digite algo antes de enviar.")
            }
            const limiteMinimo = 3;
            const limiteMaximo = 20;
            if(valor.length < limiteMinimo){
                alert("O Texto é muito curto! Digite pelomenos 3 caracteres")
            }else{
                document.getElementById('container').innerHTML = `<span>${valor}</span>`;
            }
        }

        function substituirTexto(){
            const input = document.getElementById('meuInput2');
            const container = document.getElementById('container2');
            const valor = input.value;
            // verifica se o usuario digitou algo

            if (valor.trim() !== ""){
                // substitui o conteudo do container apenas pelo texto

                container.innerHTML = `<span>${valor}</span>`;
                
            }
            else{
                alert("por favor, digite algo antes de enviar.")
            }
            const limiteMinimo = 3;
            const limiteMaximo = 20;
            if(valor.length < limiteMinimo){
                alert("O Texto é muito curto! Digite pelomenos 3 caracteres")
            }else{
                document.getElementById('container2').innerHTML = `<span>${valor}</span>`;
            }
        }
    