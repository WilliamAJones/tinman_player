import ItunesService from "./itunes-service.js";
//Private
let itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)
  let song = itunesService.Songs //this is a getter
  let template = ""
  song.forEach(song => {
    if(song.kind == 'song'){
    template += song.getTemplate()   
    }
  })
  document.querySelector("#songs").innerHTML = template;
  }



//PUBLIC
class ItunesController {
  constructor() {
    console.log("Controller loaded!")
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber('songs', drawSongs)
    drawSongs()
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
  playSong(url){
   let element= document.getElementById('mediatag')
   element.src=url
   element.play()
  }


}


export default ItunesController