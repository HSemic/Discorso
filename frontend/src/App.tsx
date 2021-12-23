import React from 'react';
import { Helmet } from 'react-helmet';
import { generateHeadTags } from 'react-seo-tools';

import '@fontsource/roboto';
import '@fontsource/pacifico';

import './styles/main.scss';
import HeadingMain from './components/atoms/HeadingMain';
import Navbar from './components/organisms/Navbar';
import { ThemeProvider } from './components/providers/ThemeProvider';

import ChatTabs from './components/organisms/ChatTabs';
import Footer from './components/organisms/Footer';

const config = {
  logoText: 'Discorso',
  welcomeText: 'Welcome!',
  introText:
    'This is where you can converse with two different chatbots, each based on one of the two different technologies: Artificial Intelligence Markup Language (AIML), and Natural Language Processing (NLP). Enjoy!'
};

const App = (): React.ReactElement => {
  return (
    <ThemeProvider>
      <>
        <Helmet>
          {generateHeadTags({
            title: 'Discorso | Chatbot',
            description:
              'This is where you can converse with two different chatbots, each based on one of the two different technologies: AIML and NLP. Welcome!',
            openGraph: {
              type: 'website',
              title: 'Discorso | Chatbot',
              image: '/logo.png'
            }
          })}
        </Helmet>
        <header>
          <Navbar logoText={config.logoText} />
        </header>
        <main>
          <div className="row">
            <HeadingMain text={config.logoText} />
          </div>
          <div className="row">
            <div className="col-1-of-4"></div>
            <div className="col-2-of-4">
              <p className="paragraph paragraph--center">
                {config.welcomeText}
              </p>
              <p className="paragraph paragraph--center">{config.introText}</p>
            </div>
            <div className="col-1-of-4"></div>
          </div>

          <ChatTabs />
        </main>
        <div className="u-spacer-vertical-lg" />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
