import React from "react";

function Footer() {
  return (
    <div>
      <div className="socials">
        <div className="socialdivs">
          <a href="https://www.facebook.com">
            <div className="fb">
              <img src="/images/fb.png" width="80" alt="fb"></img>
            </div>
          </a>
          <a href="https://www.youtube.com">
            <div className="yt">
              <i className="icon-youtube"></i>
            </div>
          </a>
          <a href="https://www.twitter.com">
            <div className="tw">
              <i className="icon-twitter"></i>
            </div>
          </a>
          <a href="https://www.google.com">
            <div className="gplus">
              <i className="icon-gplus"></i>
            </div>
          </a>
        </div>
      </div>
      <footer>
        <p>Copyright &reg; by WSB students 2020/2021</p>
      </footer>
    </div>
  );
}

export default Footer;
