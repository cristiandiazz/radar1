
import { getPath } from '../utils/index';
import Chat from '../routes/chat';
import Profile from '../routes/profile';

export const routes = {
	profile: Profile,
	chat: Chat
};

export const router = (url) => {
	let path = getPath(url);

	history.pushState(path.html,path.pageTitle, path);

	const container = document.getElementById('container');
	container.innerHTML = '';

	if (path === '/') {
		return container.appendChild(routes.profile());
	}
	if (path === '/chat') {
		return container.appendChild(routes.chat());
	} else {
		return container.insertAdjacentHTML('afterbegin','<h1> 404 Not Found </h1>');	
    }
};
