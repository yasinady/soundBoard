const sounds = [
    'bu-gece',
    'eski-jagged',
    'first-class',
    'karindesen-ceg'
]

sounds.forEach((sound) =>{
    const btn = document.createElement('button');
    btn.classList.add('btn');
    
    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play
    })

    document.body.appendChild(btn)

});
