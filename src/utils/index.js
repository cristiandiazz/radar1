import { ADD_FRIEND_BUTTON_TEXT, FRIEND_CLASS, HIDDEN, REMOVE_FRIEND_BUTTON_TEXT } from '../constants';

export const getPath = url => url.substring(url.lastIndexOf('/'));

export const setBackButtonHiddenTo = (toggle) => {
	document.getElementById('back-button').classList.toggle(HIDDEN, toggle);
};

export const insertMessageToDom = (element, msg) => element.insertAdjacentHTML('beforeend',
	`
		<div class="message">
			<div class="message__user">
			<a id="link" href="#/">
				<div class="message__avatar"></div>
				<div class="message__status"></div>
			</a> 
			</div>
			<div class="message__bubble"><p class="message__text">${msg}</p></div>
		</div>
	`);

export const storageData = (APP_NAME) => {
	const sessionData = window.sessionStorage.getItem(APP_NAME);

	return JSON.parse(sessionData);
};

export const addAttributeToElement = (content, element, attribute, value) => {

	content.querySelector(element).setAttribute(attribute, value);
};

export const setClassFriendTo = (isFriend) => {
	document.getElementById('container').classList.toggle(FRIEND_CLASS, isFriend); 
};

export const updateAddFriendButtonText = (isFriend, addFriendButton) => isFriend ? addFriendButton.innerText = REMOVE_FRIEND_BUTTON_TEXT 
: addFriendButton.innerText = ADD_FRIEND_BUTTON_TEXT;

export const setItemSessionData = (APP_NAME, sessionData) => {
	window.sessionStorage.setItem(APP_NAME, JSON.stringify(sessionData));
};