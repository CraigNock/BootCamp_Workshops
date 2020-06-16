import React from 'react';
import styled from 'styled-components';
import 'focus-visible';

import avatar from '../../assets/carmen-sandiego.png';

import Tweet from '../Tweet';

const initialState = {
  numOfLikes: 100,
  numOfRetweets: 100,
  isLiked: false,
  isRetweeted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE-NUMBER-OF-LIKES':
      return {
        ...state,
        numOfLikes: action.numOfLikes
      };
    case 'CHANGE-NUMBER-OF-RETWEETS':
      
      return {
        ...state,
        numOfRetweets: action.numOfRetweets
      };;
    case 'TOGGLE-LIKED':
      return {
        ...state,
        isLiked: !state.isLiked,
        numOfLikes: !state.isLiked? state.numOfLikes + 1 : state.numOfLikes -1,
      };
    case 'TOGGLE-RETWEETED':
      // console.log('retweet', !state.isRetweeted);
      return {
        ...state,
        isRetweeted: !state.isRetweeted,
        numOfRetweets: !state.isRetweeted? state.numOfRetweets + 1 : state.numOfRetweets -1,
      };
    default:
      return;
  }
}



const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  // const changeNumberOfLikes = (newNumOfLikes) => {
  //   dispatch({
  //     type: 'CHANGE-NUMBER-OF-LIKES',
  //     numOfLikes: newNumOfLikes,
  //   })
  // };
  // const changeNumberOfRetweets = (newNumOfRetweets) => {
  //   dispatch({
  //     type: 'CHANGE-NUMBER-OF-RETWEETS',
  //     numOfRetweets: newNumOfRetweets,
  //   })
  // };
  const toggleLiked = () => {
    dispatch({
      type: 'TOGGLE-LIKED',
    })
  };
  const toggleRetweeted = () => {
    dispatch({
      type: 'TOGGLE-RETWEETED',
    })
  };

  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={new Date()}
        numOfRetweets={state.numOfRetweets}
        numOfLikes={state.numOfLikes}
        isLikedByCurrentUser={state.isLiked}
        isRetweetedByCurrentUser={state.isRetweeted}
        handleToggleLike={toggleLiked}
        handleToggleRetweet={toggleRetweeted}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
