import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "./misc/Buttons.jsx";
import LogoImage from "../assets/logo.png";
import { ReactComponent as FacebookIcon } from "../../src/assets/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../src/assets/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../src/assets/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8  px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;
const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;
const ColumnHeading = tw.h5`uppercase font-bold`;
const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;
const SubscribeNewsletterColumn = tw(
  Column
)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(
  PrimaryButtonBase
)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;
const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;
const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;
const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;
const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Utama</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/">Dukungan</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/tentang">Tentang</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Produk</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/login">Masuk</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/">Personal</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/">Bisnis</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/">Team</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Press</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/">Logo</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/">Acara</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/">Cerita</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/">Kantor</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/">GDPR</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/privasi">Kebijakan Privasi</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/terms">Persyaratan Layanan</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/">Disclaimer</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Berlangganan newsletter kami</ColumnHeading>
              <SubscribeText>
                Kami memberikan posting blog berkualitas tinggi yang ditulis
                oleh para profesional setiap minggu. Dan kami berjanji tidak ada
                spam.
              </SubscribeText>
              <SubscribeForm method="get" action="#">
                <Input type="email" placeholder="Your Email Address" />
                <SubscribeButton type="submit">Berlangganan</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Cangkoel.</LogoText>
          </LogoContainer>
          <CopywrightNotice>
            &copy; 2021 Cangkoel. All Rights Reserved.
          </CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};

export default Footer;
