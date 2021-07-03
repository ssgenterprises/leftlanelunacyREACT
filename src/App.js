import React from 'react';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import IntroComponent from './IntroComponent'
import Articles from './ArticleComponent'
import VideoComponent from './VideoComponent'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <HeaderComponent />
        <IntroComponent />
        {/* <Articles /> */}
        <VideoComponent />
        <FooterComponent />
      </div>
    );
  }
}
 
export default App;