export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "500x500") || 'No Image  Available"'
        this.artist = song.artistName
        this.collection = song.collectionName || "Unknown Album"
        this.price = song.collectionPrice
        this.songPrice = song.trackPrice || "Song Unavailable for Individual Purchase"
        this.preview = song.previewUrl
        this.kind = song.kind
    }
    getTemplate() {
        return `
              <div class="col-12 col-sm-6 col-md-3">
                <div class= "m-1 d-flex card " onclick="app.controllers.itunesCtrl.playSong('${this.preview}')">
                <img src="${this.albumArt}" alt="Album Cover Art" class="card-img-top">
                <h2 class="card-header">${this.artist}</h2>
                <div class="card-body">
                  <ul>
                    <li>Song Title: ${this.title}</li>
                    <li>Collection: ${this.collection}</li>
                    <li>Collection Price: $${this.price}</li>
                    <li>Track Price: $${this.songPrice}</li>
                  </ul>
                </div>
                </div>
                </div>
             `
    }
}
