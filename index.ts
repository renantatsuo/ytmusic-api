import { getHomePage } from './lib/endpoints/HomePage'
import { getPlaylist, addToPlaylist } from './lib/endpoints/Playlist'
export class YTMUSIC {
  constructor(private cookie: string) {
    this.cookie = cookie
  }
  getHomePage = getHomePage(this.cookie)
  getPlaylist = getPlaylist(this.cookie)
  addToPlaylist = addToPlaylist(this.cookie)
}
