import { HeaderContainer } from "./style"
import { HeaderLeft } from "./style"
import { HeaderRight } from "./style"
import { SearchIcon } from "@material-ui/icons/Search"
import { PersonIcon } from '@material-ui/icons/PersonIcon';

export const Header = () => {
  return (
    <HeaderContainer>
        <HeaderLeft>
          <SearchIcon/>
          <input type="text" placeholder="Search fro Artists, song, or title"/>
        </HeaderLeft>
        <HeaderRight>
          <PersonIcon/>
          <h4>Herbertdiaz63@gmail.com</h4>
        </HeaderRight>
    </HeaderContainer>
  )
}