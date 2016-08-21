import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui';

import {
  ShareButtons,
  generateShareIcon
} from 'react-share';

const {FacebookShareButton, LinkedinShareButton, GooglePlusShareButton, TwitterShareButton} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const LinkedinIcon = generateShareIcon('linkedIn');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');

const shareUrl = "http://contractorcalc.co.uk";

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};

const App = (props) => {
  return (
    <MuiThemeProvider>
      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/about">About</Link>
        <br/>
        <p>
          Please use the following to calculate your take home pay. We are constantly looking to improve this app. Ifyou
          have any suggestions, improvements please <a href="mailto:apps360ltd@gmail.com" target="_top">send us an
          email</a>
        </p>

        {props.children}

        <List style={flexContainer} id="share">
          Share this calculator on:
          <ListItem id="shareLinkedin">
            <LinkedinShareButton
              url={shareUrl}
              title="linkedin">
              <LinkedinIcon size={32} round/>
            </LinkedinShareButton>
          </ListItem>
          <ListItem id="shareFacebook">
            <FacebookShareButton
              url={shareUrl}
              title="facebook">
              <FacebookIcon size={32} round/>
            </FacebookShareButton>
          </ListItem>

          <ListItem id="shareGoogle">
            <GooglePlusShareButton
              url={shareUrl}
              title="google">
              <GooglePlusIcon size={32} round/>
            </GooglePlusShareButton>
          </ListItem>

          <ListItem id="shareTiwtter">
            <TwitterShareButton
              url={shareUrl}
              title="twitter">
              <TwitterIcon size={32} round/>
            </TwitterShareButton>
          </ListItem>
        </List>
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
