const myWave = {  

    init : (id, file) => {

        const allMyWavesContainer = document.querySelector('#allMyWavesContainer');
        allMyWavesContainer.insertAdjacentHTML('beforeend', `<div id="waveform${id}" class="waves"></div>`)
    

        const w =  WaveSurfer.create({
            container: '#waveform' + id,
            waveColor: '#4F4A85',
            progressColor: '#383351',
            url: file
        })

        const wave = document.querySelector('#waveform' + id);
        wave.addEventListener('click', (e) => {
            console.log('Hit ME')
            w.playPause()
        });
    }

};

export default myWave;

