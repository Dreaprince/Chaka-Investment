import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom'
import { RiStarSLine } from 'react-icons/ri'
import { RiStopLine } from 'react-icons/ri'
import { RiDownloadFill } from 'react-icons/ri'

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
   background: #fff;
   font-family: "Yahoo sans",YahooSans,"Helvetica Neue",Arial, Helvetica, sans-serif;
`;

export const Font = css`
     font-size: 10px;
     font-weight: 700;
`;

export const LayerNot = css`
     background: #eceff1;
     font-size: 10px;
     font-weight: 700;
     color: #000;
     margin-right: 5px;
     padding: 3px;
     border-radius: 5px;
`;

export const dot = css`
    height: 1px;
    width: 10px;
    border-bottom: 2px dotted #bdbdbd;
`;

export const InnContainer = styled.div`
     width: 100%;
    max-width: 867px;
    margin-left: auto;
    margin-right: auto;
    height: 1000px;
    border-right: solid 1px #f5f5f5;
    border-top: solid 1px #f5f5f5;
    padding-right: 22px;
    padding-left: 28px;
`;

export const Navbar = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     height: 149px;
     margin-top: 18px;
`;

export const NavLeft = styled.div``;

export const NavHeading = styled.div`
      font-size: 16px;
     font-weight: 700;
     line-height: 33px;
     color: #000;
`;

export const Span = styled.div`
    display: inline;
    font-weight: normal;
`;

export const NavNum = styled.div`
     font-size: 32px;
     font-weight: 700;
`;

export const SpanA = styled.div`
     font-size: 15px;
     font-weight: 500;
     display: inline;
     color: #00873c;
`;

export const NavNote = styled.div`
      ${Font}
     color: #9e9e9e;
`;

export const SideBlock = styled.div`
     text-align: right;
     width: 70px;
`;

export const Sidebar = styled.div`
    margin-top: 5px;
    width: 100px;
`;

export const Logo = styled(RiStarSLine)`
     height: 23px;
     width: 23px;
     color: #0091ea;
     margin-bottom: 57px;
     margin-left: 63px;
`;

export const SideNote = styled.div`
     ${Font}
     color: #000;
     line-height: 21px;
`;

export const Graphic = styled.div`
      height: 300px;
      width: 100%;
      max-width: 867;
      margin-bottom: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
`;

export const Stche = styled.div`
      height: 170px;
`;
export const Hr2 = styled.div`
     height: 1px;
     width: 100%;
     margin-bottom: 10px;
     border-bottom: 1px solid #bdbdbd;
`;

export const Hr = styled.div`
    height: 1px;
    width: 100%;
    border-bottom: 2px dotted #bdbdbd;
`;

export const Readin = styled.div`

`;

export const Block = styled.div`
     height: 20px;
     width: 100%;
     background: #f5f5f5;
     border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;

`;

export const BlockG = styled.div`
     font-size: 11px;
     font-weight: 700;
     color: #000;
     margin-right: 15px;
     margin-left: 15px;
`;

export const BlockH = styled.div`
     font-size: 11px;
     font-weight: 700;
     color: #757575;
     margin-right: 15px;
`;

export const BlockContain = styled.div`
     display: flex;
    flex-direction: row;
`;

export const BlockContainB = styled.div`
     display: flex;
    flex-direction: row;
    max-width: 130px;
`;

export const BlockContainInner = styled.div`
      display: flex;
    flex-direction: row;
    width: 100%;
    margin-right: 5px;
`;

export const LogoSquare = styled(RiStopLine)`
         color: #9e9e9e;
`;

export const LogoArrow = styled(RiDownloadFill)``;

export const Loff = styled.div`
    font-size: 11px;
     font-weight: 700;
     color: #757575;
     margin-right: 15px;
     padding-top: 3px;
`;

export const Body = styled.div`
     height: 340px;
     display: flex;
     flex-direction: row;
`;

export const BodyHeading = styled.div`
      font-size: 16px;
     font-weight: 700;
     line-height: 23px;
     color: #000;
`;

export const GroupA = styled.div`
     width: 100%;
     max-width: 430px;
     margin-right: 20px;
`;

export const Dot = styled.div`
    ${dot}
    margin-top: 23px;
    margin-bottom: 18px;
`;

export const DotR = styled.div`
    ${dot}
    margin-top: 13px;
    margin-bottom: 32px;
`;

export const Dot2 = styled.div`
    ${dot}
    margin-top: 12px;
    margin-bottom: 12px;
`;

export const LeftBlock = styled.div`
      display: flex;
      flex-direction: row;
`;

export const LeftA = styled.div`
     width: 100%;
     max-width: 200px;
     margin-right: 20px;
`;

export const LeftB = styled.div`
     width: 100%;
     max-width: 190px;
     margin-right: 20px;
`;

export const BodyNote = styled.div`
      ${Font}
     color: #757575;
     margin-bottom: 8px;
`;
export const Bodydif = styled.div`
     ${Font}
     color: #757575;
     margin-top: 30px;
     margin-bottom: 8px;
`;

export const BodyBold = styled.div`
       ${Font}
     color: #424242;
     margin-bottom: 28px;
`;

export const BodyBod = styled.div`
      font-size: 11px;
     font-weight: 800;
     color: #424242;
     margin-bottom: 15px;
`;

export const WebLink = styled(Link)`
    cursor: pointer;
    text-decoration: white;
    color: #0091ea;
    font-weight: 700;
    font-size: 13px;
`;

export const Tag = styled.div`
      ${Font}
     color: #757575;
     margin-top: 15px;
`;


export const BodyBold2 = styled.div`
      font-size: 11px;
     font-weight: 700;
     color: #757575;
     margin-bottom: 10px;
     margin-top: 52px;
`;

export const GroupB = styled.div`
    width: 100%;
    max-width: 416px;
    margin-top: 20px;
`;


export const RightBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 416px;
    margin-top: 10px;
`;

export const RightB  = styled.div`
    width: 100%;
     max-width: 90px;
     margin-right: 15px;
`;

export const RightA  = styled.div`
    width: 100%;
     max-width: 140px;
     margin-right: 15px;
`;

export const BlockA = styled.div``;

export const Footer = styled.div`
    height: 43px;

`;

export const Layer1 = styled.div`
     display: flex;
     flex-direction: row;
     margin-bottom: 8px;
`; 

export const LayerNote = styled.div`
    ${LayerNot}
    width: 70px;
`;

export const LayerNoteA = styled.div`
    ${LayerNot}
    width: 228px;
`;

export const LayerNoteB = styled.div`
    ${LayerNot}
    width: 107px;
`;

export const LayerNoteC = styled.div`
    ${LayerNot}
    width: 89px;
`;