import styled from "styled-components"

const SidebarContainer = styled.div`
flex: 0.2;
height: 100vh;
background-color: #000;
min-width: 240px;
color: #fff;
{&
height: 70px;
padding: 10px;
margin-right: auto;

}
&hr{
    border: 1px solid #smokegray;
    width: 90%;
    margin: 10px auto;
}
`

const Playlists = styled.div`
margin: 5px 10px;
`

const Choices = styled.div`
display: flex;
align-items: center;
color: gray;
height: 35px;
cursor: pointer;
transition: 300ms color: ease-in;
&:hover{
    color: #fff;
}
& h5 {

}
`

export {SidebarContainer, Playlists, Choices}