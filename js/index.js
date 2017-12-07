
var audio = new Audio('http://ample-zeno-01.radiojar.com/6a28tbx6vewtv?rj-ttl=5&rj-token=AAABYDA1LGnmUebAoGNnWE8_Ze5NoR4vu4vKMze6wNXJ7vQkykv68g');
audio.volume = 0.8;
audio.play();

$('.trigger').click(function() {
  if (audio.paused == false) {
      audio.pause();
      $('.fa-play').show();
      $('.fa-pause').hide();
      $('.music-card').removeClass('playing');
  } else {
      audio.play();
      $('.fa-pause').show();
      $('.fa-play').hide();
      $('.music-card').addClass('playing');
  }
});
