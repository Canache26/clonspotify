
import { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getTokenFromURL } from './spotifylogic';
import { selectUser, SET_USER } from './features/UserSlice';
import SpotifyWebApi from 'spotify-web-api-js';
import { selectToken, SET_TOKEN } from './features/tokenSlice';
import { SET_PLAYLIST } from './features/PlaylistSlice';


const spotify = new SpotifyWebApi();

function App() {
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const hash = getTokenFromURL();
    //window.location.hash = "";
    const _token = hash.accessToken;

    if(_token) {
      dispatch(SET_TOKEN(_token))
      spotify.setAccessToken(_token)
      spotify.getMe().then( user =>dispatch(SET_USER(user)))
      console.log("token => ", token);
      spotify.getPlaylist("4NpecT9LYsyIje0CRbfPNk?si=a17f2ee64e1342bc").then(playlist =>
        dispatch(SET_PLAYLIST(playlist)))
    }

  }, [dispatch])
  return (
    <div>
      {
        token ? <Player/>:<Login/>
      }
      <Login/>
    </div>
  );
}

export default App;
