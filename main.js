window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return; //stop the function from running all together.
    audio.currentTime = 0; // rewind to the start.
    // audio.load(); //currentTime = 0 and load() function same kaj kore.
    audio.play();
    key.classList.add('playing')
    // console.log(key);
});


function removeTransition() {
    // console.log(e)
    // if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');

}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //transitionend is a event
