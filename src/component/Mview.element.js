import styled, {css} from 'styled-components';
import { RiStarFill } from 'react-icons/ri'
import imgZ from '../img/A.jpg';
import imgY from '../img/B.jpg';
import imgD from '../img/C.jpg';
import imgE from '../img/D.jpg';
import imgF from '../img/F.jpg';
import imgG from '../img/E.jpg';
import imgH from '../img/J.jpg';
import imgI from '../img/I.jpg';
import imgJ from '../img/H.jpg';
import imgK from '../img/G.jpg';
import imgL from '../img/K.jpg';
import imgM from '../img/N.jpg';
import imgN from '../img/M.jpg';


export const Page = styled.div`
    color: #000;
    font-size: 30px;
    font-weight: 600;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 867px;
`;

export const Container = styled.div`
   height: 1100px;
   width: 100%;
   max-width: 1267px;
   margin-left: auto;
   margin-right: auto;
   font-family: "Yahoo sans",YahooSans,"Helvetica Neue",Arial, Helvetica, sans-serif;
`;

export const InnCont = styled.div`
    width: 100%;
    max-width: 867px;
    margin-left: auto;
    margin-right: auto;
    height: 1000px;
    border-right: solid 1px #f5f5f5;
    padding-right: 22px;
    padding-left: 28px;
    background: #fff;
`;

export const Navbar = styled.div`
    height: 248px;

`;

export const NavContainA = styled.div`
    height: 66px;
    margin-bottom: 17px;
    
`;

export const NavContain = styled.div`
    width: 100%;
    max-width: 867px;
     height: 134px;
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     margin-bottom: 3px;
`;
export const Body = styled.div`
    height: 270px;
    display: flex;
    flex-direction: row;
`;

export const NavNote = styled.div`
  font-size: 14px;
  color: #bdbdbd;
  line-height: 20px;
  margin-top: 20px;
`;

export const NavBlock = styled.div`
     height: 50px;
     margin-bottom: 30px;
`;
export const NavHeading = styled.div`
     font-size: 26px;
     font-weight: 700;
     line-height: 33px;
     
`;

export const NavBox = styled.div`
     height: 130px;
     background: #eee;
     width: 100%;
     max-width: 55px;
     padding-left: 13px;
     padding-right: 13px;
`;

export const NavBoxHeading = styled.div`
      font-size: 13px;
     font-weight: 700;
     margin-top: 15px;
     color: #000;
`;

export const NavBoxTittle = styled.div`
      font-size: 10px;
     font-weight: 500;
     color: #757575;
`;
export const NavBoxSub = styled.div`
       font-size: 8px;
     font-weight: 500;
     color: #757575;
`;
export const NavNum = styled.div`
        font-size: 13px;
     font-weight: 700;
     line-height: 10px;
     text-align: right;
`;
export const NavBoxLower = styled.div`
     font-size: 8px;
     font-weight: normal;
     color: #757575;
`;
export const NavPercentB = styled.div`
     font-size: 10px;
     font-weight: normal;
     line-height: 15px;
     color: #00873c;
     text-align: right;
`;
export const NavPercentR = styled.div`
     font-size: 10px;
     font-weight: normal;
     line-height: 15px;
     color: #ef4055;
     text-align: right;
`;
export const NavLowerNote = styled.div`
     font-size: 8.5px;
     font-weight: 600;
     line-height: 15px;
     color: #bdbdbd;
`;
export const BodyGroup = styled.div`
     width: 710px;
     margin-right: 20px;
`;

export const Hr = styled.div`
    background: #eee;
    height: 1px;
    width: 100%;
    color: #000;
`;

export const BodyHeading = styled.div`
     font-size: 16px;
     font-weight: 700;
     margin-top: 10px;
`;

export const BodySubT = styled.div`
     font-size: 9px;
     font-weight: 600;
     color: #bdbdbd;
`;

export const Img = styled.div`
     height: 113px;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     width: 100%;
     max-width: 733px;
    
`;

export const imga = css`

    width: 100%;
    max-width: 277px;
    height: 75px;
    background-size: cover; 
   background-position: center;
   background-repeat: no-repeat; 
`;

export const ImgA = styled.img`
     ${imga}
     background-image: url(${imgZ});
`;

export const ImgB = styled.img`
      ${imga}
     background-image: url(${imgY});
`;

export const NoteContain = styled.div`
    height: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
`;

export const NoteTextA = styled.div`
     font-size: 10px;
     font-weight: 600;
     color: #9e9e9e;
`;

export const BodyTextC = styled.div`
     font-size: 12px;
     font-weight: 600;
     color: #bdbdbd;
     margin-top: 5px;
`;

export const SideBar = styled.div`
     width: 100%;
     max-width: 260px;
     height: 90px;
     padding-left: 20px;
     border: 1px solid #fafafa;
`;

export const SidebarNote = styled.p`
     font-size: 11px;
     font-weight: normal;
     color: #757575;
`;

export const Bar = styled.div`
   display: flex;
   flex-direction: row;
`;

export const SideHeading = styled.div`
     font-size: 14px;
     font-weight: 700;
     margin-top: 10px;
`;

export const Logo = styled(RiStarFill)`
     height: 16px;
     width: 16px;
     color: #000;
    margin-left: 4px;
    margin-top: 9px;
`;

export const Footer = styled.div`
    height: 420px;
`;

export const GroupB = styled.div`
    height: 60px;
    margin-bottom: 40px;
`;

export const GroupC = styled.div`
    height: 52px;
`;

export const PicGroup = styled.div`
   height: 263px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const GroupBox = styled.div`
    margin-top: 15px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const GroupTextBoxA = styled.div`
    width: 100%;
    max-width: 365px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const GroupTextBoxB = styled.div`
    width: 100%;
    max-width: 260px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const GroupTextBoxC = styled.div`
    width: 100%;
    max-width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const GroupText = styled.div`
     font-size: 10px;
     font-weight: 600;
     color: #9e9e9e;
`;

export const PicLay = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PicLayer1 = styled.div`
    ${PicLay}
`;

export const PicLayer2 = styled.div`
    ${PicLay}
`;
export const PicLayer3 = styled.div`
     ${PicLay}
`;

export const imgb = css`
    width: 100%;
    background-size: cover; 
   background-position: center;
   background-repeat: no-repeat; 
`;

export const imgc = css`
      height: 83px;
   max-width: 209px;
`;

export const ImgD = styled.img`
   ${imgb}
   ${imgc}
   background-image: url(${imgD});
`;
export const ImgE = styled.img`
    ${imgb}
    ${imgc};
    background-image: url(${imgE});
`;
export const ImgF = styled.img`
    ${imgb}
    ${imgc}
    background-image: url(${imgF});
`;
export const ImgG = styled.img`
    ${imgb}
    ${imgc}
    background-image: url(${imgG});
`;
export const ImgH = styled.img`
    ${imgb}
    ${imgc} 
    background-image: url(${imgH});
`;
export const ImgI = styled.img`
     ${imgb}
     ${imgc}
    background-image: url(${imgI});
`;
export const ImgJ = styled.img`
    ${imgb}
    ${imgc}
    background-image: url(${imgJ});
`;
export const ImgK = styled.img`
    ${imgb}
    ${imgc}
    background-image: url(${imgK});
`;
export const ImgL = styled.img`
    ${imgb}
    background-image: url(${imgL});
    max-width: 282px;
    height: 77px; 
`;
export const ImgM = styled.img`
   ${imgb}
   background-image: url(${imgM});
   max-width: 282px;
   height: 77px; 
`;
export const ImgN = styled.img`
   ${imgb}
   background-image: url(${imgN});
   max-width: 282px;
   width: 100%;
   height: 77px; 
`;

