import { FooterContainer, FooterLeft, FooterRight, FooterCenter} from '.style'
import {ShuffleIcon} from '@material-ui/icons-material/Shuffle';
import {SkipPreviousIcon} from '@material-ui/icons-material/SkipPrevious';
import {PlayCircleOutlineIcon} from '@material-ui/icons-material/PlayCircleOutline';
import {SkipNextIcon} from '@material-ui/icons-material/SkipNext';
import {RepeatIcon} from '@material-ui/icons-material/Repeat';
import {PlaylistAddIcon} from '@material-ui/icons-material/PlaylistAdd';
import {VolumeDownIcon} from '@material-ui/icons-material/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

export const Footer = () => {
  return (
    <FooterContainer>
        <FooterLeft>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCSORVHrJenmBRSiuqu5vX6lVelXykDrReqg&usqp=CAU.jpg" alt="Cover"/>
          <div>
            <h4>Fuiste Tu</h4>
            <p>Urbano</p>
          </div>
        </FooterLeft>
        <FooterCenter>
          <ShuffleIcon className="shuffle"/>
          <SkipPreviousIcon className="Icon" />
          <PlayCircleOutlineIcon className="icon" />
          <SkipNextIcon className="icon" />
          <RepeatIcon className="Repeat" />
        </FooterCenter>
        <FooterRight>
          <Grid container spacing={2}>
            <Grid item><PlaylistAddIcon/> </Grid>
            <Grid item><VolumeDownIcon/> </Grid>
            <Grid item xs><Slider/></Grid>
          </Grid>
        </FooterRight>
    </FooterContainer>
  )
}