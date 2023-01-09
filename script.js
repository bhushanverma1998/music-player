

//Declared Variables
let queueBtn=document.getElementById("queue-toggle-button");
let queueContent=document.getElementById('queue-toggle-content');
let showMoreOptionFirst=document.getElementById('show-more-option-first');
let showMoreContentFirst=document.getElementById('show-more-content-first');
let showMoreOptionSecond=document.getElementById('show-more-option-second');
let showMoreContentSecond=document.getElementById('show-more-content-second');
let showMoreOptionThird=document.getElementById('show-more-option-third');
let showMoreContentThird=document.getElementById('show-more-content-third');
let showMoreOptionForth=document.getElementById('show-more-option-forth');
let showMoreContentForth=document.getElementById('show-more-content-forth');
let audioElement=new Audio('songs/1.mp3')
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');




// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    console.log('clicked')
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

//Toggle queue dropdown menu
queueBtn.addEventListener('click',()=>{
    queueContent.classList.toggle('toggle-show');
})

//Toggle show more options
showMoreOptionFirst.addEventListener('click',()=>{
    showMoreContentFirst.classList.toggle('toggle-show');
})
showMoreOptionSecond.addEventListener('click',()=>{
    showMoreContentSecond.classList.toggle('toggle-show');
})
showMoreOptionThird.addEventListener('click',()=>{
    showMoreContentThird.classList.toggle('toggle-show');
})
showMoreOptionForth.addEventListener('click',()=>{
    showMoreContentForth.classList.toggle('toggle-show');
})