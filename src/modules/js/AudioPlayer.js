export default class AudioPlayer
{
    constructor(mp3)
    {
        this.soundDirectory = './src/modules/audio/';
        this.mp3 = mp3 || 'button1.wav';
        this.a = new Audio(this.soundDirectory + this.mp3); 
        this.a.preload = true;
        this.a.play();
    }
}   