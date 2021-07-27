import { APP_NAME, DEFAULT_TYPE_INPUT} from '../../constants';
import { setBackButtonHiddenTo, insertMessageToDom, setItemSessionData, storageData, addAttributeToElement } from '../../utils/';
import chatHTML from './chat.html';

const ENTER_KEY_VALUE = 13;

const focusLastMsg = (chat) => chat.querySelector(".message:last-child").scrollIntoView();

const listenTypedMessages = (chat, sessionData) => {
	const input = chat.querySelector('.chat__input input');

	input.addEventListener('keydown', (e) => {
		if (e.keyCode === ENTER_KEY_VALUE) {
			const newMessage = input.value;
			if(newMessage !== '') {
				const chatMsg = chat.querySelector('.chat__messages');
			
				insertMessageToDom(chatMsg, newMessage);
				sessionData.messages.push({ id: new Date(), text: newMessage });
				setItemSessionData(APP_NAME, sessionData);
				focusLastMsg(chat);
				input.value = '';
			}
		}
	});
}

export default () => {
	setBackButtonHiddenTo(false);
	const sessionData = storageData(APP_NAME);
	const chat = document.createElement('div');
	chat.innerHTML = chatHTML;

	addAttributeToElement(chat, '.input', 'placeholder', DEFAULT_TYPE_INPUT);
	
	const messagesBox = chat.querySelector('.chat__messages');

	Object.values(sessionData.messages).forEach(msg => {
		insertMessageToDom(messagesBox, msg.text);
	});

	listenTypedMessages(chat, sessionData);

	return chat;
};