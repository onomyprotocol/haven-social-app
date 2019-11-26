import React, {Suspense} from 'react';
import {hot} from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import MainHeader from './components/MainHeader/MainHeader'
import { GlobalStyle } from './components/UI'
import { theme } from './utils/colors'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import FeedPage from './pages/FeedPage'
import ChatsPage from './pages/ChatsPage'
import { PrimitivesWorkerProvider } from './context/PrimitivesWorkerContext'

// import WorkerTest from './components/workertest';


// Main page
const App = () => {
	// Register service worker
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('/sw.js').then(registration => {
				console.log('SW registered:', registration);
			}).catch(error => {
				console.log('SW registration failed:', error);
			});
		});
	}

	return (
    <PrimitivesWorkerProvider>
        <ThemeProvider theme={theme}>
            <Router>
              <GlobalStyle />
              <MainHeader />
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/feed" component={FeedPage} />
              <Route exact path="/chats" component={ChatsPage} />
            </Router>
        </ThemeProvider>
    </PrimitivesWorkerProvider>
	);
};

export default hot(App);
