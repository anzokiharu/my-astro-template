import { YoutubePlayer } from '@/assets/scripts/utils/youtubePlayer';
window.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Oimo!');
  new Kv();
});

class Kv {
  private movieTarget: HTMLElement | null;
  private player: YoutubePlayer | null;
  constructor() {
    this.movieTarget = document.getElementById('movie');
    this.player = this._setMovie();
  }

  private _setMovie() {
    if (this.movieTarget) {
      return new YoutubePlayer(this.movieTarget, {
        id: 'Q94k7bilHO0',
      });
    } else {
      return null;
    }
  }
}
