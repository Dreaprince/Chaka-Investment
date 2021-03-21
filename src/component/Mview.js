import React from 'react'
import {
    Page,Container,InnCont,NavContain,NavContainA,NavBlock,Bar,Navbar,Body,NavNote,Logo,NavHeading,NavBox,NavBoxLower,NavBoxHeading,NavBoxTittle,NavBoxSub,NavNum,NavPercentB,NavPercentR,NavLowerNote,BodyGroup,Hr,BodyHeading,BodySubT,Img,ImgA,ImgB,NoteContain,NoteTextA,BodyTextC,SideBar,SideHeading,SidebarNote,Footer,GroupB,GroupC,PicGroup,GroupBox,GroupTextBoxA,GroupTextBoxB,GroupTextBoxC,GroupText,PicLayer1,PicLayer2,PicLayer3,ImgD,ImgE,ImgF,ImgG,ImgH,ImgI,ImgJ,ImgK,ImgM,ImgN,ImgL
}  from './Mview.element'

const Mview = () => {
    return (
        <>
        <Page>Page One</Page>
         <Container>
             <InnCont>
                <Navbar>
                    <NavContainA>
                        <NavNote>MARKET VIEW</NavNote>
                        <NavHeading>Today's market briefing.</NavHeading>
                    </NavContainA>
                    <NavContain>
                        <NavBox>
                            <NavBlock>
                                <NavBoxHeading>BNGO</NavBoxHeading>
                                <NavBoxTittle>Bionano</NavBoxTittle>
                                <NavBoxSub>Genomics Inc</NavBoxSub>
                            </NavBlock>
                            <NavNum>1.39</NavNum>
                            <NavPercentB>-57.20%</NavPercentB>
                        </NavBox>
                        <NavBox>
                            <NavBlock>
                                <NavBoxHeading>AAPL</NavBoxHeading>
                                <NavBoxTittle>Apple Inc</NavBoxTittle>
                            </NavBlock>
                            <NavNum>135.355</NavNum>
                            <NavPercentR>-0.98%</NavPercentR>
                        </NavBox>
                        <NavBox>
                            <NavBlock>
                                <NavBoxHeading>INTC</NavBoxHeading>
                                <NavBoxTittle>Intel Corp</NavBoxTittle>
                            </NavBlock>
                            <NavNum>49.495</NavNum>
                            <NavPercentB>+5.15%</NavPercentB>
                        </NavBox>
                        <NavBox>
                            <NavBlock>
                                <NavBoxHeading>GEVO</NavBoxHeading>
                                <NavBoxTittle>Gevo Inc</NavBoxTittle>
                            </NavBlock>
                            <NavNum>4.70</NavNum>
                            <NavPercentR>-2.49%</NavPercentR>
                        </NavBox>
                        <NavBox>
                            <NavBlock>
                                <NavBoxHeading>FCEL</NavBoxHeading>
                                <NavBoxTittle>Fuelcell Energy</NavBoxTittle>
                                <NavBoxSub>Inc</NavBoxSub>
                            </NavBlock>
                            <NavNum>10.69</NavNum>
                            <NavPercentR>-7.41%</NavPercentR>
                        </NavBox>
                        <NavBox>
                            <NavBlock>
                                <NavBoxHeading>SNAP</NavBoxHeading>
                                <NavBoxTittle>Snap Inc</NavBoxTittle>
                                <NavBoxSub>Class A</NavBoxSub>
                            </NavBlock>
                            <NavNum>50.68</NavNum>
                            <NavPercentB>+5.02%</NavPercentB>
                        </NavBox>
                        <NavBox>
                            <NavBlock>
                                <NavBoxHeading>AAL</NavBoxHeading>
                                <NavBoxTittle>American</NavBoxTittle>
                                <NavBoxSub>Airlines Group</NavBoxSub>
                                <NavBoxLower>Inc</NavBoxLower>
                            </NavBlock>
                            <NavNum>15.805</NavNum>
                            <NavPercentR>-1.59%</NavPercentR>
                        </NavBox>
                        <NavBox>
                            <NavBlock>
                                <NavBoxHeading>OCGN</NavBoxHeading>
                                <NavBoxTittle>Occugen Inc</NavBoxTittle>
                            </NavBlock>
                            <NavNum>2.08</NavNum>
                            <NavPercentR>-7.56%</NavPercentR>
                        </NavBox>
                        <NavBox>
                            <NavBlock>
                                <NavBoxHeading>PLTR</NavBoxHeading>
                                <NavBoxTittle>Palantir</NavBoxTittle>
                                <NavBoxSub>Technologies</NavBoxSub>
                                <NavBoxLower>Inc - Class A</NavBoxLower>
                            </NavBlock>
                            <NavNum>24.685</NavNum>
                            <NavPercentR>-3.69%</NavPercentR>
                        </NavBox>
                        <NavBox>
                            <NavBlock>
                                <NavBoxHeading>GE</NavBoxHeading>
                                <NavBoxTittle>General</NavBoxTittle>
                                <NavBoxSub>Electric Co</NavBoxSub>
                            </NavBlock>
                            <NavNum>10.59</NavNum>
                            <NavPercentR>-0.47%</NavPercentR>
                        </NavBox>
                    </NavContain>
                    <NavLowerNote>Active stocks last updated Dec 29 2020</NavLowerNote>
                </Navbar>
                <Body>
                    <BodyGroup>
                        <GroupC>
                        <Hr />
                           <BodyHeading>Sector Highlights</BodyHeading>
                           <BodySubT>Dec 29 2020, 09:10:28 pm</BodySubT>
                        </GroupC>
                        <Img>
                            <ImgA />
                            <ImgB />
                        </Img>
                        <Hr />
                        <BodyHeading>Ex-Dividends</BodyHeading>
                        <NoteContain>
                            <NoteTextA>Symbol</NoteTextA>
                            <NoteTextA>Amount</NoteTextA>
                        </NoteContain>
                        <Hr />
                        <BodyTextC>There are no upcoming dividents.</BodyTextC>
                    </BodyGroup>
                    <SideBar>
                        <Bar>
                            <SideHeading>My Watchlist</SideHeading>
                            <Logo/>
                        </Bar>
                        <SidebarNote>
                            Your watchlist is empty.Build your watchlist by starring () the stocks you want to follow,
                            </SidebarNote>
                    </SideBar>
                </Body>
                <Footer>
                    <GroupB>
                        <Hr />
                        <BodyHeading>Earnings</BodyHeading>
                        <GroupBox>
                            <GroupTextBoxA>
                                <GroupText>Symbol</GroupText>
                                <GroupText>Company</GroupText>
                                <GroupText>Fiscal Period</GroupText>
                                <GroupText>Consensus Estimated EPS</GroupText>
                            </GroupTextBoxA>
                            <GroupTextBoxB>
                                <GroupText>Actual EPS</GroupText>
                                <GroupText>Surprise</GroupText>
                                <GroupText>EPS, Year Ago </GroupText>
                            </GroupTextBoxB>
                            <GroupTextBoxC>
                                <GroupText>% Changes From Last Year</GroupText>
                            </GroupTextBoxC>
                        </GroupBox>
                        <Hr />
                    </GroupB>
                    <GroupC>
                        <Hr />
                        <BodyHeading>Sector Performance</BodyHeading>
                        <BodySubT>Dec 29 2020, 09-10-36 pm</BodySubT>
                    </GroupC>
                    <PicGroup>
                        <PicLayer1>
                            <ImgD />
                            <ImgE />
                            <ImgF />
                            <ImgG />
                        </PicLayer1>
                        <PicLayer2>
                            <ImgH />
                            <ImgI />
                            <ImgJ />
                            <ImgK />
                        </PicLayer2>
                        <PicLayer3>
                            <ImgL />
                            <ImgM />
                            <ImgN />
                        </PicLayer3>
                    </PicGroup>
                </Footer>
             </InnCont>
         </Container>   
        </>
    )
}

export default Mview
