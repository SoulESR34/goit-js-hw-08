import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const nameDurationValue = 'videoplayer-current-time';

let videoTime = 0;

player.on('timeupdate', 
throttle(function(data){
    videoTime = data.seconds;
    localStorage.setItem(nameDurationValue, videoTime);
}, 1000)
)

player.setCurrentTime(localStorage.getItem(nameDurationValue))

