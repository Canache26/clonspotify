import { HomeIcon } from '@material-ui/icons-material/Home';
import { SearchIcon } from '@material-ui/icons-material/Search';
import { LibraryAddIcon } from '@material-ui/icons-material/LibraryAdd';
import { SidebarChoice } from './SidebarChoice'
import { SidebarContainer } from './style'
//import { Playlists } from './Playlists'

export const Sidebar = () => {
  return (
    <SidebarContainer>
    <img src="https://img.freepik.com/iconos-gratis/spotify_318-183430.jpg" alt='Logo'/>
    <SidebarChoice title="Home" Icon={HomeIcon }/>
    <SidebarChoice title="Search" Icon={SearchIcon }/>
    <SidebarChoice title="Your Library" Icon={LibraryAddIcon }/>
    {/* <Playlists>Playlists</Playlists> */}
    <SidebarChoice title="Urbano" />
    <SidebarChoice title="EDM" />
    <hr/>
    </SidebarContainer>
  )
}