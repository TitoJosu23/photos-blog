import React from 'react';
import Photo from "./Photo";
import Navbar from "./Navbar";

import './Home.css';

function Home() {

  var horizontal="https://images.wallpaperscraft.com/image/single/astronaut_ring_neon_156673_1920x1080.jpg"
  var vertical="https://wallpaper.dog/large/20521641.jpg"

  return (
    <>
    <Navbar />
    <div className="Home">
      <Photo img_url="https://wallpaperaccess.com/full/388706.jpg"/>
      <Photo img_url="https://images7.alphacoders.com/104/thumb-1920-1040765.jpg"/>
      <Photo img_url="https://images6.alphacoders.com/605/thumb-1920-605639.jpg"/>
      <Photo img_url="https://images.hdqwalls.com/download/model-image-1920x1080.jpg"/>
      <Photo img_url="https://images.hdqwalls.com/wallpapers/camila-queiroz-2020-4k-7k.jpg"/>
      <Photo img_url="https://wallpapercave.com/wp/wp7645077.jpg"/>
      <Photo img_url="https://wallpapercave.com/wp/wp1982361.jpg"/>
      <Photo img_url="https://www.teahub.io/photos/full/257-2577062_hd-models-wallpaper-female.jpg"/>
      <Photo img_url="https://images.alphacoders.com/916/916093.jpg"/>
      <Photo img_url="https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg"/>
      <Photo img_url="https://wallpaperaccess.com/full/1078835.jpg"/>
      <Photo img_url="https://cdn.wallpapersafari.com/62/39/6rHGUJ.jpg"/>
      <Photo img_url="https://www.bravotv.com/sites/bravo/files/media_mpx/thumbnails/bravo-video.nbcuni.com/image/NBCU_Bravo/41/795/Screen_Shot_2021-12-21_at_1.43.27_PM0.jpg" />
      <Photo img_url="https://girlsunited.essence.com/wp-content/uploads/2022/07/GettyImages-1406252338-Cropped-1920x1080.jpg"/>
      <Photo img_url="https://wallpaper.dog/large/10942173.jpg"/>
    </div>
    </>
  );
}

export default Home;
