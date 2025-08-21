import strzalkaDL from './assets/strzalkaDL.png';
import LogoJ from './assets/Logoj.jpg';
import MusicD from './assets/MusicD.png';
import YoutubeD from './assets/YoutubeD.png';
import SpotifyD from './assets/SpotifyD.png';
import strzalkaDP from './assets/strzalkaDP.png';



function Card() {
  return (
    <div className="flex flex-row items-center gap-[32px]">
      <img src={strzalkaDL} />
      <div className="w-[650px] h-[650px] border-5 border-white flex items-center flex-col gap-[32px] pt-[16px]">
        <a href="https://linktr.ee/kashiami" target="blank"><img src={LogoJ} alt='Logo' className="w-md" /></a>
        <div className="flex flex-col items-center gap-0">
          <div className="font-InriaSerif text-2xl">Stream My Music:</div>
            <div className="flex flex-row gap-[5px]">
              <a href="https://music.apple.com/us/artist/kashiami/1777722735" target="blank"><img src={MusicD} alt='Logo' className="w-[100px]" /></a>
              <a href="https://www.youtube.com/@kashiami4" target="blank"><img src={YoutubeD} alt='Logo' className="w-[100px]" /></a>
              <a href="https://open.spotify.com/artist/7yFxrWhhvzk9OQz2aTIhul" target="blank"><img src={SpotifyD} alt='Logo' className="w-[100px]" /></a>
            </div>
        </div>
      </div>
      <img src={strzalkaDP} />
    </div>
  );
}

export default Card;