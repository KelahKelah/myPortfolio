'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { bannerImage, } from '../assets/images'
import { Logo } from '../assets/icons'
import { BannerText, BannerTextWrap, GreenBannerText, WrapperDiv, BannerWrap, Nav, Li, Ul, Button } from './style'

export default function Page() {
    return (
        <WrapperDiv>
            <Nav>
                <Logo />
                <Ul>
                    <Li>About</Li>
                    <Li>Works</Li>
                    <Li>Contact</Li>
                </Ul>
            </Nav>

            <BannerWrap>
                <BannerTextWrap>
                    <BannerText>Hi its Kelechi, i&apos;m a <GreenBannerText>Frontend Developer</GreenBannerText> </BannerText>
                    <Button disabled={true} >View my works</Button>
                </BannerTextWrap>
                <Image src={bannerImage} alt="kelechi's portfolio" />
            </BannerWrap>

        </WrapperDiv>
    )
}
