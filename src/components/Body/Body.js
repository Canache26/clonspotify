import Header from './Header';
import { BodyContainer, Info, InfoText, Songs, Icons} from './style'
import { useSelector } from "react-import"
import { selectPlaylist} from "../../features/PlaylistSlice"
import PlayCircleFilledIcons from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcons from '@mui/icons-material/FavoriteIcons';
import { MoreHorizIcons } from '@mui/icons-material/MoreHoriz';
import { SongRow } from "./SongRow";

export const Body = () => {
  const playlist = useSelector(selectPlaylist);
  console.log("playlist =>", playlist)
  return (
    <BodyContainer>
      <Header/>
      <Info>
        <img src={playlist?.images[0]?.url} alt=""/>
        <InfoText>
          <h4>PLAYLIST</h4>
          <h2>Discover Weekly</h2>
          <p>{playlist?.name }</p>
        </InfoText>
      </Info>
      <Songs>
        <Icons>
          <PlayCircleFilledIcons className="playButton"/>
          <FavoriteIcons fontsize="large" />
          <MoreHorizIcons fontsize="large"/>
        </Icons>
        {

          playlist?.tracks?.items.map((item, index) => (
            <SongRow track={item.track } key={ index}/>
          ))
        }
      </Songs>
    </BodyContainer>
  )
}