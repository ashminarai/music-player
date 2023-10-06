import React from "react";
import "../assets/scss/Developer.scss";
import { IconButton } from "@material-ui/core";
// import AvatarImage from "../assets/img/avatar.jpeg";
import {
  Instagram,
  LinkedIn,
  Portrait,
} from "@material-ui/icons";

const Developer = () => {
  return (
    <div className={"Developer"}>
      <h3 className={"Developer-head"}>Meet the developer</h3>
      <div className="Developer-profile">
        <div className="Developer-profileCard">
          {/* <img src={AvatarImage} alt="Profile"/> */}
          <div className={"Card-details"}>
            <h3>Ashmina Rai</h3>
            <p>Frontend developer</p>
          </div>
        </div>
        <div className="Developer-profileDetails">
          <p>
            A highly motivated and skilled BSc. Computing graduate with a strong
            foundation in computer science principles. I specialize in React and
            Front end development. I am constantly seeking to expand my
            knowledge and stay up-to- date with the latest technologies in the
            field. I pride myself on my ability to learn quickly and adapt to
            new challenges, making me an asset to any team and pride myself on
            my expertise in a variety of areas, including time management,
            software development, following good code architecture and SOLID
            principles, Git version control, frontend, SQL, and good
            communication skills. In other words, I'm a jack of all trades (but
            hopefully not a master of none). Whether I'm tackling a new project
            or solving a complex problem, I bring a strong set of skills and a
            logical mindset to the table. And if that wasn't enough, I'm also a
            pretty good multitasker - I just don't like to juggle while I'm
            coding.
          </p>

          <div className="Card-btn">
            
           
            <IconButton
              target={"_blank"}
              href={"https://www.linkedin.com/in/vishalsingh-/"}
              title={"vishalsingh-"}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://www.instagram.com/vishalsingh023/"}
              title={"vishalsingh023"}
            >
              <Instagram />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://vishal.thetechnician.in/"}
              title={"Web Portfolio"}
            >
              <Portrait />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
