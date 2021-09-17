import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';

function Comics(){
  return (
    <div className="layout">
      <div className="abtHead">
        <h1>Comics</h1>
        <div className="topText"> 
          <p>While games are how we bring home the bacon, comics are our true passion! Check back later for physical releases!</p>
          <div className="comicDiv">
            <img className="comicDivImg" src="/images/Cover.png"/>
            <table className="comicTable">
              <th><h1>Idyll Haven</h1></th>
              <tr><strong>Genre: </strong>Science Fiction, Fantasy, Horror, Thriller</tr>
              <tr><strong>Age Rating: </strong>Mature (Strong language, violence, nudity, adult themes)</tr>
              <tr><strong>Status: </strong>WIP<br/></tr>
              <tr><strong>Author: </strong>David G. Piper</tr>
              <tr><strong>Artist: </strong>Edward Echavez</tr>
              <tr><strong>Production: </strong>Original drafts started in late 2014. Lore in developmet since mid 2000's. On hiatus from 2016 to 2021 due to career responsibilities.<br/>
              Chapters 1 and 2 to be retconned due to feedback.</tr>
              <tr><strong>Synopsys: </strong> 500 years after the events of "Aieslum", a mysterious message beckons a low-ranking “Scavenger”, whose 
              civil duties usually involve hard labor. Infected by a world-ending mutation and unaware of the power she wields, 
              her own government seeks to enslave her.</tr>
              <tr> 
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Chapter Select
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="https://www.patreon.com/posts/idyll-haven-1-54672482"> Chapter 1</Dropdown.Item>
                    <Dropdown.Item href="https://www.patreon.com/posts/idyll-haven-2-1-54526427">Chapter 2</Dropdown.Item>
                    <Dropdown.Item href="https://www.patreon.com/posts/idyll-haven-3-55976310">Chapter 3</Dropdown.Item>
                    <Dropdown.Item>Bonus</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
            </table>
          </div>
          <hr/>
          <div className="comicDiv">
            <img className="comicDivImg" src="/images/HFO.png"/>
            <table className="comicTable">
              <th><h1>Hero Fighter Origins</h1></th>
              <tr><strong>Genre: </strong>Fantasy, Comedy, Shonen</tr>
              <tr><strong>Age Rating: </strong>12+ (Mild themes, violence)</tr>
              <tr><strong>Status: </strong>Indefinate Hiatus<br/></tr>
              <tr><strong>Author: </strong>Marti Wong, David G. Piper</tr>
              <tr><strong>Artist: </strong>Edward Echavez</tr>
              <tr><strong>Production: </strong>2012 Manga produced for Marti Wong's "Hero Fighter", a freemium online fighter.</tr>
              <tr><strong>Synopsys: </strong> A demonic force has been sealed, but at a high cost. It's effect on the world affected entire nations, 
              causing some to put their difference aside, and others to turn on each other. Those who defeated said force lost their lives, 
              but maintained their power in a single blade, which is rumored to bring incredible power to its true bearer. <br/>
              Hero Fighter Origins will tell the tales that are untold in the game; Hero Fighter, going deep into the past of the cast presented 
              in the game. Warriors range from Heroic and powerful, to sarcastic and hilarious, to broken and cursed.</tr>
              <tr> 
                <Button id="button-dark-example1" variant="secondary" href="https://hf-empire.com/hfo-empire">Read</Button>
              </tr>
            </table>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  );
};
  
export default Comics;