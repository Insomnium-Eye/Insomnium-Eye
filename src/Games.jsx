import React from 'react';
import { motion } from 'framer-motion';

function Games(){
  return (
    <div className="layout">
      <div 
        className= "abtHead"
      >
        <h1>Games</h1>
      </div>
      <div className="topText"><p>Since 2011, we've been attempting to capture the magic of game development and comics.<br/>
        Unfortunately, due to our responsibilities and social circrumstances, we've only been able to fully dedicate ourselves to our craft recently.<br/>
        "Aieslum.net" has been through several prototypes, but we've finally decided on which direction we want to go in, while "Murder Simulator"
        has only recently become our most recent project due to our fascination with corvids and dedication to bringing laughter to our audience.
        Click below to learn more!
        </p>
        <div className="announcementImgWrapper">
          <motion.img 
            className="gameHeader"
            src="/images/Aieslum_Splash.jpg"
            whileHover={{
              scale: 1.05
            }}/>
            <p class="innerText">First prototypes initially developed in 2011, "Aieslum.net" is an ambitious project that seeks to re-invent the 
            beat'em'up genre. With a unique targetting and weapon-switching system, this Sci-Fi themed game is our magnus opus!<br/>
            We're in desperate need of funding, so if you'd like to be a stakeholder, check out our Patreon or contact us!</p>
            <img class="innerImage" src="/images/aieslumlogo_transparent.png"/>
        </div>
        <hr/>
        <div className="announcementImgWrapper">
            <motion.img 
            className="gameHeader"
            src="/images/MurderSimLogoDraft.png"
            whileHover={{
              scale: 1.05
            }}/>
            <p class="innerText">What do you call a group of crows? A Murder! This comedic fantasy real time strategy game puts you in the shoes of a wizard crow tamer!
            Gain a Murder's trust by giving them peanuts, and they'll return the favour by protecting you and bringing you shiny gifts!<br/>
            This is not the kind of murder you're thinking of!</p>
        </div>
      </div>
    </div>
    
  );
};
  
export default Games;