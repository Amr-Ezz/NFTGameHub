"use client";
import { ThemeProvider, styled } from "styled-components";
import { theme } from "../themes/theme";
import {
  H1,
  BodyText,
  Button,
  HeroSection,
  Captiondiv,
  Carddiv,
  ReachDiv,
  SubReachDiv,
  TrendingDiv,
  TrendingCards,
  RowDiv,
  H5,
  H2,
  TopCreators,
  ButtonSecondary,
  CreatorsCards,
  CreatorsCard,
  CategoriesDiv,
  H4,
  CategoriesCards,
  CategoriesCard,
  DiscoverDiv,
  DiscoverHeading,
  DiscoverCards,
  DiscoverCard,
  MushroomBanner,
  FirstColumn,
  ArtistButton,
  ButtonTeriarty,
  SecondColumn,
  GetStarted,
  GetStartedCards,
  GetStartedCard,
  SubscribeSection,
  SubscribeCard,
  H3,
  EmailForm,
  Footer,
} from "../shared/styledComponent";
import {
  ArtIcon,
  MagicWandIcon,
  MusicIcon,
  PlanetIcon,
  SwatchesIcon,
  VideoIcon,
  BasketBallIcon,
  CameraIcon,
  EyeIcon,
  HomeFront,
  DiscordIcon,
  YoutubeIcon,
  InstagramIcon,
  TwitterIcon,
} from "../shared/icons/icons";
import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "./api/games";
export default function Home() {
  const {
    data: games,
    error: gameError,
    isLoading: gameLoading,
  } = useQuery(["games"], fetchGames);
  if (gameError) {
    return <div>error: {gameError.message}</div>;
  }
  if (gameLoading) {
    return <div>loading....</div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <HeroSection>
        <Captiondiv>
          <H1>
            Discover
            <br /> Latest Games <br /> & Collective NFTs
          </H1>

          <BodyText>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </BodyText>
          <Button>
            <svg
              width="20"
              height="22"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.87284 19.9188C10.0489 20.4423 9.76722 21.0094 9.24374 21.1854C7.54867 21.7554 6.64783 23.1784 6.16596 24.6254C5.97462 25.2 5.85902 25.7531 5.78956 26.2105C6.24694 26.1411 6.80009 26.0255 7.37468 25.8341C8.82168 25.3523 10.2446 24.4514 10.8147 22.7563C10.9907 22.2329 11.5578 21.9512 12.0812 22.1272C12.6047 22.3033 12.8864 22.8703 12.7103 23.3938C11.8554 25.9362 9.74082 27.1542 8.00657 27.7317C7.13049 28.0234 6.31032 28.1674 5.71168 28.2392C5.41091 28.2753 5.16226 28.2936 4.98561 28.3029C4.89719 28.3076 4.82652 28.31 4.77608 28.3112C4.75085 28.3119 4.73066 28.3122 4.7158 28.3124L4.69754 28.3125L4.69148 28.3126L4.68923 28.3126L4.6883 28.3126C4.68789 28.3126 4.6875 28.3126 4.6875 27.3126C3.6875 27.3126 3.6875 27.3122 3.6875 27.3118L3.6875 27.3108L3.68751 27.3086L3.68753 27.3025L3.6877 27.2843C3.68788 27.2694 3.68822 27.2492 3.68884 27.224C3.69009 27.1736 3.69251 27.1029 3.69716 27.0145C3.70645 26.8378 3.72475 26.5892 3.76083 26.2884C3.83264 25.6898 3.97667 24.8696 4.26841 23.9935C4.84592 22.2593 6.06383 20.1447 8.60626 19.2897C9.12974 19.1137 9.6968 19.3954 9.87284 19.9188ZM4.6875 27.3126H3.6875C3.6875 27.8649 4.13522 28.3126 4.6875 28.3126V27.3126Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.4738 5.52591C25.3131 5.35851 22.456 5.29544 19.532 8.21946L11.7516 15.9999L15.9999 20.2481L23.7803 12.4678C26.7043 9.54373 26.6412 6.68663 26.4738 5.52591ZM26.7638 3.54704C25.1675 3.31593 21.6091 3.31392 18.1178 6.80525L9.6303 15.2928C9.44276 15.4803 9.3374 15.7346 9.3374 15.9999C9.3374 16.2651 9.44276 16.5194 9.6303 16.707L15.2928 22.3695C15.6833 22.76 16.3165 22.76 16.707 22.3695L25.1945 13.882C28.6858 10.3906 28.6838 6.83225 28.4527 5.23593C28.3942 4.80869 28.1975 4.41226 27.8925 4.10726C27.5875 3.80225 27.1911 3.60553 26.7638 3.54704Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.075 13.5879C23.6272 13.5879 24.075 14.0356 24.075 14.5879V22.6629L24.0748 22.6771C24.0674 23.2024 23.8535 23.7035 23.4797 24.0723L19.4441 28.1204C19.188 28.3763 18.8671 28.5578 18.5158 28.6457C18.1646 28.7335 17.796 28.7243 17.4496 28.6191C17.1031 28.5138 16.7917 28.3165 16.5486 28.0482C16.3057 27.7801 16.14 27.4511 16.0693 27.0962C16.0693 27.0959 16.0694 27.0965 16.0693 27.0962L15.0195 21.8595C14.9109 21.3179 15.2619 20.791 15.8034 20.6824C16.3449 20.5738 16.8719 20.9248 16.9804 21.4663L18.0307 26.7054L22.0749 22.6487V14.5879C22.0749 14.0356 22.5227 13.5879 23.075 13.5879Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.32317 7.92491L9.33741 7.9248H17.4124C17.9647 7.9248 18.4124 8.37252 18.4124 8.9248C18.4124 9.47709 17.9647 9.9248 17.4124 9.9248H9.35155L9.34347 9.93305L9.34342 9.933L5.29492 13.969L5.29647 13.9693L10.534 15.0193C11.0755 15.1279 11.4265 15.6549 11.3179 16.1964C11.2093 16.7379 10.6824 17.0889 10.1408 16.9803L4.90489 15.9306C4.90459 15.9305 4.90429 15.9305 4.90399 15.9304C4.5492 15.8597 4.22022 15.6941 3.9521 15.4512C3.68376 15.2081 3.48645 14.8967 3.38123 14.5502C3.27601 14.2037 3.26682 13.8352 3.35464 13.4839C3.44246 13.1326 3.624 12.8118 3.87989 12.5556L3.88139 12.5541L3.8814 12.5541L7.92796 8.52003C8.29678 8.14622 8.79791 7.93239 9.32317 7.92491Z"
                fill="white"
              />
            </svg>
            Get Started
          </Button>
          <ReachDiv>
            <SubReachDiv>
              240k + <br />
              <p>Total Sale</p>{" "}
            </SubReachDiv>
            <SubReachDiv>
              100k + <br />
              <p>Auctions</p>
            </SubReachDiv>
            <SubReachDiv>
              240k + <br />
              <p>Artists</p>{" "}
            </SubReachDiv>
          </ReachDiv>
        </Captiondiv>

        <Carddiv>
          {games &&
            games?.slice(0, 1).map((game) => (
              <div key={game.id}>
                <img src={game.background_image} />
                <div>
                  <p>{game.name}</p>
                  <span>
                    <img src="./Artist Card.png" />
                  </span>
                </div>
              </div>
            ))}
        </Carddiv>
      </HeroSection>
      <TrendingDiv>
        <H2>Trending Games</H2>{" "}
        <BodyText>Checkout our weekly updated trending collection.</BodyText>{" "}
        <RowDiv>
          {games &&
            games.slice(0, 3).map((game, index) => (
              <TrendingCards key={index}>
                <img className="big" src={game.background_image} />

                {game.short_screenshots.slice(0, 3).map((screenshot, index) => (
                  <img key={index} src={screenshot.image} />
                ))}
                <div className="game-title">
                  <p>{game.name}</p>{" "}
                </div>
              </TrendingCards>
            ))}
        </RowDiv>
      </TrendingDiv>
      <TopCreators>
        <H2>Top Creators</H2>
        <RowDiv>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          <ButtonSecondary>
            {" "}
            <svg
              width="20"
              height="22"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.87284 19.9188C10.0489 20.4423 9.76722 21.0094 9.24374 21.1854C7.54867 21.7554 6.64783 23.1784 6.16596 24.6254C5.97462 25.2 5.85902 25.7531 5.78956 26.2105C6.24694 26.1411 6.80009 26.0255 7.37468 25.8341C8.82168 25.3523 10.2446 24.4514 10.8147 22.7563C10.9907 22.2329 11.5578 21.9512 12.0812 22.1272C12.6047 22.3033 12.8864 22.8703 12.7103 23.3938C11.8554 25.9362 9.74082 27.1542 8.00657 27.7317C7.13049 28.0234 6.31032 28.1674 5.71168 28.2392C5.41091 28.2753 5.16226 28.2936 4.98561 28.3029C4.89719 28.3076 4.82652 28.31 4.77608 28.3112C4.75085 28.3119 4.73066 28.3122 4.7158 28.3124L4.69754 28.3125L4.69148 28.3126L4.68923 28.3126L4.6883 28.3126C4.68789 28.3126 4.6875 28.3126 4.6875 27.3126C3.6875 27.3126 3.6875 27.3122 3.6875 27.3118L3.6875 27.3108L3.68751 27.3086L3.68753 27.3025L3.6877 27.2843C3.68788 27.2694 3.68822 27.2492 3.68884 27.224C3.69009 27.1736 3.69251 27.1029 3.69716 27.0145C3.70645 26.8378 3.72475 26.5892 3.76083 26.2884C3.83264 25.6898 3.97667 24.8696 4.26841 23.9935C4.84592 22.2593 6.06383 20.1447 8.60626 19.2897C9.12974 19.1137 9.6968 19.3954 9.87284 19.9188ZM4.6875 27.3126H3.6875C3.6875 27.8649 4.13522 28.3126 4.6875 28.3126V27.3126Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.4738 5.52591C25.3131 5.35851 22.456 5.29544 19.532 8.21946L11.7516 15.9999L15.9999 20.2481L23.7803 12.4678C26.7043 9.54373 26.6412 6.68663 26.4738 5.52591ZM26.7638 3.54704C25.1675 3.31593 21.6091 3.31392 18.1178 6.80525L9.6303 15.2928C9.44276 15.4803 9.3374 15.7346 9.3374 15.9999C9.3374 16.2651 9.44276 16.5194 9.6303 16.707L15.2928 22.3695C15.6833 22.76 16.3165 22.76 16.707 22.3695L25.1945 13.882C28.6858 10.3906 28.6838 6.83225 28.4527 5.23593C28.3942 4.80869 28.1975 4.41226 27.8925 4.10726C27.5875 3.80225 27.1911 3.60553 26.7638 3.54704Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.075 13.5879C23.6272 13.5879 24.075 14.0356 24.075 14.5879V22.6629L24.0748 22.6771C24.0674 23.2024 23.8535 23.7035 23.4797 24.0723L19.4441 28.1204C19.188 28.3763 18.8671 28.5578 18.5158 28.6457C18.1646 28.7335 17.796 28.7243 17.4496 28.6191C17.1031 28.5138 16.7917 28.3165 16.5486 28.0482C16.3057 27.7801 16.14 27.4511 16.0693 27.0962C16.0693 27.0959 16.0694 27.0965 16.0693 27.0962L15.0195 21.8595C14.9109 21.3179 15.2619 20.791 15.8034 20.6824C16.3449 20.5738 16.8719 20.9248 16.9804 21.4663L18.0307 26.7054L22.0749 22.6487V14.5879C22.0749 14.0356 22.5227 13.5879 23.075 13.5879Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.32317 7.92491L9.33741 7.9248H17.4124C17.9647 7.9248 18.4124 8.37252 18.4124 8.9248C18.4124 9.47709 17.9647 9.9248 17.4124 9.9248H9.35155L9.34347 9.93305L9.34342 9.933L5.29492 13.969L5.29647 13.9693L10.534 15.0193C11.0755 15.1279 11.4265 15.6549 11.3179 16.1964C11.2093 16.7379 10.6824 17.0889 10.1408 16.9803L4.90489 15.9306C4.90459 15.9305 4.90429 15.9305 4.90399 15.9304C4.5492 15.8597 4.22022 15.6941 3.9521 15.4512C3.68376 15.2081 3.48645 14.8967 3.38123 14.5502C3.27601 14.2037 3.26682 13.8352 3.35464 13.4839C3.44246 13.1326 3.624 12.8118 3.87989 12.5556L3.88139 12.5541L3.8814 12.5541L7.92796 8.52003C8.29678 8.14622 8.79791 7.93239 9.32317 7.92491Z"
                fill="white"
              />
            </svg>
            View Rankings
          </ButtonSecondary>
        </RowDiv>
        <CreatorsCards>
          <CreatorsCard>
            <img src="/Avatar.png" />
            <H5>Keepitreal</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>1</p>
            </div>
          </CreatorsCard>
          <CreatorsCard>
            <img src="/Artist (1).png" />
            <H5>DigiLab</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>2</p>
            </div>
          </CreatorsCard>
          <CreatorsCard>
            <img src="/Avatar (2).png" />
            <H5>GravityOne</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>3</p>
            </div>
          </CreatorsCard>{" "}
          <CreatorsCard>
            <img src="/Avatar (3).png" />
            <H5>Juanie</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>4</p>
            </div>
          </CreatorsCard>{" "}
          <CreatorsCard>
            <img src="/Avatar (4).png" />
            <H5>BlueWhale</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>5</p>
            </div>
          </CreatorsCard>{" "}
          <CreatorsCard>
            <img src="/Avatar (5).png" />
            <H5>Mr Fox</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>6</p>
            </div>
          </CreatorsCard>{" "}
          <CreatorsCard>
            <img src="/Avatar (6).png" />
            <H5>Shroomie</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>7</p>
            </div>
          </CreatorsCard>{" "}
          <CreatorsCard>
            <img src="/Avatar  (7).png" />
            <H5>Robotica</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>8</p>
            </div>
          </CreatorsCard>{" "}
          <CreatorsCard>
            <img src="/Avatar  (8).png" />
            <H5>RustyRobot</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>9</p>
            </div>
          </CreatorsCard>{" "}
          <CreatorsCard>
            <img src="/Avatar (9).png" />
            <H5>Animakid</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>10</p>
            </div>
          </CreatorsCard>{" "}
          <CreatorsCard>
            <img src="/Avatar (10).png" />
            <H5>Dotgu</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>11</p>
            </div>
          </CreatorsCard>{" "}
          <CreatorsCard>
            <img src="/Avatar (11).png" />
            <H5>Ghiblier</H5>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <div>
              {" "}
              <p>12</p>
            </div>
          </CreatorsCard>
        </CreatorsCards>
      </TopCreators>
      <CategoriesDiv>
        <H2>Browse categories</H2>
        <CategoriesCards>
          <CategoriesCard>
            <img src="/Categories.png" />
            <p>Art</p>
            <div className="icon-container">
              <ArtIcon />
            </div>
          </CategoriesCard>
          <CategoriesCard>
            <img src="/Categories(1).png" />
            <p>Collectives</p>
            <div className="icon-container">
              <SwatchesIcon />
            </div>
          </CategoriesCard>
          <CategoriesCard>
            <img src="/Categories(2).png" />
            <p>Music</p>
            <div className="icon-container">
              <MusicIcon />
            </div>
          </CategoriesCard>
          <CategoriesCard>
            <img src="/Categories(3).png" />
            <p>Photography</p>
            <div className="icon-container">
              <CameraIcon />
            </div>
          </CategoriesCard>
          <CategoriesCard>
            <img src="/Categories(4).png" />
            <p>Video</p>
            <div className="icon-container">
              <VideoIcon />
            </div>
          </CategoriesCard>
          <CategoriesCard>
            <img src="/Categories(5).png" />
            <p>Utility</p>
            <div className="icon-container">
              <MagicWandIcon />
            </div>
          </CategoriesCard>
          <CategoriesCard>
            <img src="/Categories(6).png" />
            <p>Sport</p>
            <div className="icon-container">
              <BasketBallIcon />
            </div>
          </CategoriesCard>
          <CategoriesCard>
            <img src="/Categories(7).png" />
            <p>Virtual Worlds</p>
            <div className="icon-container">
              <PlanetIcon />
            </div>
          </CategoriesCard>
        </CategoriesCards>
      </CategoriesDiv>
      <DiscoverDiv>
        <H2>Discover More Games</H2>

        <DiscoverHeading>
          <div className="button">
            <ButtonSecondary>
              {" "}
              <EyeIcon /> See All
            </ButtonSecondary>
          </div>
        </DiscoverHeading>
        <DiscoverCards>
          {games &&
            games.slice(5, 8).map((game, index) => (
              <DiscoverCard key={index}>
                <img className="game_image" src={game.background_image} />
                <div className="discoverDes">
                  <p>{game.name}</p>
                  <div className="DiscoverSub">
                    <img src="/NFT Artist.png" />
                    <p>Game Developer</p>
                  </div>
                  <div className="DiscoverStats">
                    <RowDiv>
                      <div>
                        <p>
                          Price <br />
                          <span>1.63 ETH</span>
                        </p>
                      </div>
                      <div>
                        <p>
                          Highest Bid <br />
                          <span>0.33 wETH</span>
                        </p>
                      </div>
                    </RowDiv>
                  </div>
                </div>
              </DiscoverCard>
            ))}
        </DiscoverCards>
      </DiscoverDiv>
      <MushroomBanner>
        <div className="subSection">
          <FirstColumn>
            <ArtistButton>
              <img src="/Avatar Placeholder.png" alt="avatar image" />
              <p>Shroomie</p>
            </ArtistButton>
            <H2>Red Dead Redemption</H2>
            <ButtonTeriarty>
              <EyeIcon /> See Game
            </ButtonTeriarty>
          </FirstColumn>
          <SecondColumn>
            <p> The Auction ends in :</p>
            <H2>59 : 59 : 59</H2>
            <p>Hours : Minutes : Seconds</p>
          </SecondColumn>
        </div>
        {games && games[9] && (
          <img src={games[9].background_image} alt="Mushroom image" />
        )}
        <div className="gradient" />
      </MushroomBanner>
      <GetStarted>
        <H2>How It Works</H2>
        <BodyText>Find Out How To Get Started</BodyText>
        <GetStartedCards>
          <GetStartedCard>
            <img src="/Icon.png" />
            <div className="Info">
              <H5>Setup Your Wallet</H5>
              <p>
                Set up your wallet of choice. <br />
                Connect it to the Animarket by clicking the wallet icon in the
                top right corner.
              </p>
            </div>
          </GetStartedCard>{" "}
          <GetStartedCard>
            <img src="/Icon (1).png" />
            <div className="Info">
              <H5>Create Collection</H5>
              <p>
                Upload your work and setup your collection. <br /> Add a
                description, social links and floor price.
              </p>
            </div>
          </GetStartedCard>{" "}
          <GetStartedCard>
            <img src="/Icon (2).png" />
            <div className="Info">
              <H5>Start Earning</H5>
              <p>
                Choose between auctions and fixed-price listings. <br /> Start
                earning by selling your NFTs or trading others.
              </p>
            </div>
          </GetStartedCard>
        </GetStartedCards>
      </GetStarted>
      <SubscribeSection>
        <SubscribeCard>
          <div className="imageSection">
            <img src="/Subscribe.png" alt="image" />
          </div>
          <div className="columnDiv">
            <H3>Join Our Weekly Digest</H3>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <EmailForm />
          </div>
        </SubscribeCard>
      </SubscribeSection>
      <Footer>
        <div className="footerRow">
          <div className="footerColumn">
            <H4>
              {" "}
              <HomeFront color={theme.callToAction} />
              NFTGameHub
            </H4>
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <div className="footerIcons">
              <DiscordIcon /> <YoutubeIcon /> <InstagramIcon /> <TwitterIcon />
            </div>
          </div>
          <div className="footerColumn">
            <ul>
              <H4>Explore</H4>
              <p>Marketplace</p>
              <p>Rankings</p>
              <p>Connect a wallet</p>
            </ul>
          </div>
          <div className="footerColumn">
            <H4>Join Our Weekly Digest</H4>
            <p>Get exclusive promotions & updates straight to your inbox</p>
            <EmailForm />
          </div>
          <hr />
        </div>
        <p>Ⓒ NFT Market. Use this template freely.</p>
      </Footer>
    </ThemeProvider>
  );
}
