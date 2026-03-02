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

    