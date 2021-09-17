import React from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className = "layout">
      <img src="/logo_stroke.png" className="frontPageLogo"/>
      <Carousel 
        fade 
        controls={false}
        position="relative">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/draft-1.png"
            alt="Murder Simulator"
            height="300"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/draft-2.png"
            alt="Aieslum"
            height="300"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/draft-3.png"
            alt="Third slide"
            height="300"
          />
        </Carousel.Item>
      </Carousel>
      <h1 className="frontWelcome">Welcome</h1>
      <div className="activeBlog">
        <h1> ANNOUNCEMENTS </h1>
        <div className="activeAnnouncement">
          <p>We're back, and more motivated than ever before! After 9 years of University, Social responsibilities, and lots of planning, 
            we are <strong>finally</strong> ready to finish what we started! We're working on <strong>TWO</strong> games, and one comic!<br/>
            We're in need of funding, or potentially a publisher! If interested, please check out our Patreon or contact us!
          </p>

          <div className="announcementImgWrapper">
            <motion.img 
              className="announcementImg"
              src="/images/GameShow1.png"
              whileHover={{
                scale: 1.1
              }}/>
              <h1 className="announcementImgText">WIP Games</h1>
          </div>

          <div className="announcementImgWrapper">          
            <motion.img 
              className="announcementImg"
              src="/images/Cover.png"
              whileHover={{
                scale: 1.1
              }}
            />
            <h1 className="announcementImgText"> Idyll Haven</h1>
          </div>

        </div>
      </div>
    </div>
  );
};
  
export default Home;