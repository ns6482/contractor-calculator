import React, {PropTypes}from 'react';
import {List, ListItem} from 'material-ui';

import {ShareButtons, generateShareIcon} from 'react-share';
const {FacebookShareButton, LinkedinShareButton, GooglePlusShareButton, TwitterShareButton} = ShareButtons;
const LinkedinIcon = generateShareIcon('linkedin');
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const shareUrl = "http://contractorcalc.co.uk";

const Social = (props) => {
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };


  return (
    <div>
      Share this calculator:
      {props.children}
      <List style={flexContainer} id="share">
        <ListItem id="shareLinkedin">
          <LinkedinShareButton
            url={shareUrl}
            title="linkedin">
            <LinkedinIcon size={32} round/>
            {/*<LinkedinIcon size={32} round/>*/}
          </LinkedinShareButton>
        </ListItem>
        <ListItem id="shareFacebook">
          <FacebookShareButton
            url={shareUrl}
            title="facebook">
            <FacebookIcon size={32} round/>
            {/*<FacebookIcon size={32} round/>*/}
          </FacebookShareButton>
        </ListItem>
        <ListItem id="shareGoogle">
          <GooglePlusShareButton
            url={shareUrl}
            title="google">
            <GooglePlusIcon size={32} round/>
            {/*<GooglePlusIcon size={32} round/>*/}
          </GooglePlusShareButton>
        </ListItem>
        <ListItem id="shareTiwtter">
          <TwitterShareButton
            url={shareUrl}
            title="twitter">
            <TwitterIcon size={32} round/>
            {/*<TwitterIcon size={32} round/>*/}
          </TwitterShareButton>
        </ListItem>
      </List>
    </div>
  );
};

Social.propTypes = {
  children: PropTypes.element
};

export default Social;
