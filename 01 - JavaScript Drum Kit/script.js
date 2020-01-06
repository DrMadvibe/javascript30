  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running if no audio element
    
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add('playing');
  };

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if it's not a transform
    e.target.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => addEventListener('transitionend', removeTransition)); // loop through each and add event listener
  window.addEventListener('keydown', playSound);