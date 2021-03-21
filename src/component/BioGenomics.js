import React from 'react'
import {Link} from 'react-router-dom'
import {
   Page,Container,InnContainer,Navbar,NavLeft,Dot2,DotR,NavHeading,Tag,NavNum,WebLink,NavNote,Span,SpanA,Sidebar,SideBlock,Logo,RightBlock,SideNote,BlockContain,BlockContainB,BlockContainInner,LogoSquare,LogoArrow,Loff,BodyHeading,Graphic,Bodydif,Stche,BodyBod,Hr,Readin,Block,BlockG,BlockH,Body,GroupA,Dot,Hr2,LeftBlock,LeftA,BodyNote,BodyBold,LeftB,BodyBold2,GroupB,RightA,BlockA,Footer,Layer1,LayerNote,LayerNoteA,LayerNoteB,LayerNoteC 
} from './BioGenomics.element';
import LeGraph from './LeGraph';

const BioGenomics = () => {
    

    return (
        <>
        <Page>Page Two</Page>
         <Container>
             <InnContainer>
                <Navbar>
                    <NavLeft>
                        <NavHeading>
                            Bionano Genomics Inc <Span>(BNGO)</Span>
                        </NavHeading>
                        <NavNum>
                            1.36 <SpanA>+0.476(+53.81%)</SpanA>
                        </NavNum>
                        <NavNote>IEX real time price as of 3:15:01 PM</NavNote>
                    </NavLeft>
                    <Sidebar>
                        <Logo />
                        <SideBlock>
                           <NavNote>Previous Close</NavNote>
                           <SideNote>0.884</SideNote>
                        </SideBlock>
                    </Sidebar>
                </Navbar>
                <Graphic>
                    <Stche>
                        <LeGraph />
                    </Stche>
                    <Hr />
                    <Readin />
                    <Block>
                        <BlockContain>
                           <BlockG>1D</BlockG> 
                           <BlockH>1M</BlockH>
                           <BlockH>3M</BlockH>
                           <BlockH>6M</BlockH>
                           <BlockH>YTD</BlockH>
                           <BlockH>1Y</BlockH>
                           <BlockH>2Y</BlockH>
                           <BlockH>5Y</BlockH> 
                        </BlockContain>  
                        <BlockContainB>
                            <BlockContainInner>
                                <LogoSquare />
                                <Loff>Peers</Loff>
                            </BlockContainInner>
                            <BlockContainInner>
                                <LogoArrow />
                                <Loff>CSV</Loff>
                            </BlockContainInner>
                        </BlockContainB>       
                    </Block>
                </Graphic>
                <Body>
                    <GroupA>
                        <BodyHeading>Profile</BodyHeading>
                        <Dot2 />
                        <Hr2 />
                        <LeftBlock>
                            <LeftA>
                                <BodyNote>EXCHANGE</BodyNote>
                                <BodyBold>NASDAQ/NMS (GLOBAL MARKET)</BodyBold>
                                <BodyNote>FLOAT</BodyNote>
                                <Dot />
                                <Bodydif>SECTOR</Bodydif>
                                <BodyBold>Professiona, Scientific, and Technical Services</BodyBold>
                                <BodyNote>WEBSITE</BodyNote>
                                <Link>
                                   <WebLink>https://bionanogenomics.com/</WebLink>
                                </Link>
                                <Tag>TAGS</Tag>
                            </LeftA>
                            <LeftB>
                            <BodyNote>NUMBER OF EMPLOYEES</BodyNote>
                            <BodyBold2>SHARES OUTSTANDING</BodyBold2>
                            <BodyBod>153.186M</BodyBod>
                            <Bodydif>INDUSTRY</Bodydif>
                            <BodyBold>Testing Laboratories</BodyBold>
                            </LeftB>
                        </LeftBlock>
                    </GroupA>
                    <GroupB>
                        <Hr2 />
                        <RightBlock>
                            <RightA>
                                <BlockA>
                                    <BodyNote>VOLUME</BodyNote>
                                    <BodyBold>212,780,671</BodyBold>
                                </BlockA>
                                <BlockA>
                                    <BodyNote>52 WEEK RANGE</BodyNote>
                                    <BodyBold>0.26 - 1.43</BodyBold>
                                </BlockA>
                                <BlockA>
                                    <BodyNote>BETA</BodyNote>
                                    <BodyBold>0.77</BodyBold>
                                </BlockA>
                                <BlockA>
                                    <BodyNote>DIVIDEND & YIELD</BodyNote>
                                    <BodyBold>-</BodyBold>
                                </BlockA>
                                <BlockA>
                                    <BodyNote>IEX VOLUME</BodyNote>
                                    <BodyBold>1,240,517</BodyBold>
                                </BlockA>
                            </RightA>
                            <RightA>
                                <BlockA>
                                    <BodyNote>AVG DAILY VOLUME</BodyNote>
                                    <BodyBold>14,763,695</BodyBold>
                                </BlockA>
                                <BlockA>
                                    <BodyNote>MARKET CAP</BodyNote>
                                    <BodyBold>208.333M</BodyBold>
                                </BlockA>
                                <BlockA>
                                    <BodyNote>LATEST QUARTERLY EPS</BodyNote>
                                    <BodyBold>-0.053</BodyBold>
                                </BlockA>
                                <BlockA>
                                    <BodyNote>EX-DIVIDEND DATE</BodyNote>
                                    <BodyBold>//</BodyBold>
                                </BlockA>
                                <BlockA>
                                    <BodyNote>IEX MKT SHARE</BodyNote>
                                    <BodyBold>0.583%</BodyBold>
                                </BlockA>
                            </RightA>
                            <RightA>
                                <BlockA>
                                    <BodyNote>OPEN</BodyNote>
                                    <DotR />
                                </BlockA>
                                <BlockA>
                                    <BodyNote>PREVIOUS CLOSE</BodyNote>
                                    <BodyBold>0.884</BodyBold>
                                </BlockA>
                                <BlockA>
                                    <BodyNote>LATEST EPS QUARTERLY</BodyNote>
                                    <BodyBold>Q3 2020</BodyBold>
                                </BlockA>
                                <BlockA>
                                    <BodyNote>P/E RATIO</BodyNote>
                                    <DotR />
                                </BlockA>
                            </RightA>
                        </RightBlock>
                    </GroupB>
                </Body>
                <Footer>
                    <Layer1>
                        <LayerNoteC>Health Technology</LayerNoteC>
                        <LayerNote>Biotechnology</LayerNote> 
                    </Layer1>
                    <Layer1>
                        <LayerNoteA>Professional, Scientific, and Technical Services</LayerNoteA>
                        <LayerNoteB>Testing Labouratories</LayerNoteB> 
                    </Layer1>
                </Footer>
             </InnContainer>
        </Container>   
        </>
    )
}

export default BioGenomics
