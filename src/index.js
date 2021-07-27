import './scss/main.scss'
import { APP_NAME, defaultProfileData } from "./constants";
import { router } from './router';

const getUserSessionData = () => {
    const startedSession = window.sessionStorage.getItem(APP_NAME);
	!startedSession && window.sessionStorage.setItem(APP_NAME, JSON.stringify(defaultProfileData));
}

const init = () => {

    getUserSessionData();
    router(window.location.href);

	window.addEventListener('hashchange', () => {
		router(window.location.hash);
	})
};

init();

