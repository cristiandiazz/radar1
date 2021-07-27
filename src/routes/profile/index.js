import { APP_NAME } from '../../constants';
import { setBackButtonHiddenTo, storageData, setItemSessionData, setClassFriendTo, updateAddFriendButtonText } from '../../utils/';
import profileHTML from './profile.html';

const manageFriendStyles = (isFriend, addFriendButton ) => {
	setClassFriendTo(isFriend);
	updateAddFriendButtonText(isFriend, addFriendButton);
};

const setFriendStatus = (addFriendButton, sessionData) => {
	addFriendButton.addEventListener('click', () => {
		manageFriendStyles(!sessionData.isFriend, addFriendButton);
		sessionData.isFriend = !sessionData.isFriend;
		setItemSessionData(APP_NAME, sessionData);
	});
};

export default () => {
	setBackButtonHiddenTo(true);
	const sessionData = storageData(APP_NAME);
	const profile = document.createElement('div');
	profile.innerHTML = profileHTML;
	profile.classList.add('profile');

	const addFriendButton = profile.querySelector('#add-friend-btn');

	manageFriendStyles(sessionData.isFriend, addFriendButton);
	setFriendStatus(addFriendButton, sessionData);

	return profile;
};