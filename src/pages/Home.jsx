import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [songs, setSongs] = useState([]);

  let getSongs = async () => {
    try {
      const songs = await axios({
        url: 'http://localhost:3001/api/v1/songs',
        method: 'get',
      });
      console.log(songs);
      setSongs(songs.data.songs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSongs();
  }, []);
  return (
    <main>
      <div className='container'>
        {songs.map((song, index) => {
          return (
            <div
              className='song--container'
              key={index}>
              <img
                src='src/assets/song.png'
                className='song__img'
              />
              <div className='song__details'>
                <h3 className='song__title'>{song.title}</h3>
                <p className='song__artist'>{song.artist.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Home;
