import { getPath, insertMessageToDom, addAttributeToElement, setClassFriendTo, updateAddFriendButtonText } from '../utils';
import index from './utils/index.html';

describe('Utils =>', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		container.id = 'container';
		
		document.body.innerHTML += index;
		document.body.innerHTML += container;
	  });
	  
	  
	test('getPath', () => {
		const path = getPath('https://www.teamcmp.com/chat');

		expect(path).toEqual('/chat');
	});

	test('insertMessageToDom', () => {
		const content = document.getElementById('container');

		insertMessageToDom(content, 'Testing');

		const message = content.querySelector('.message__text');

		expect(message.innerHTML).toBe('Testing');
	});


	test('addAttributeToElement', () => {

		addAttributeToElement(document, '.child', 'id', 'Test1');

		const element = document.querySelector('.child');

		expect(element.id).toBe('Test1');
	});

	 test('setClassFriendTo', () => {
	 	setClassFriendTo(false);
	 	const bodyClasses = document.body.classList
	 	expect(bodyClasses.contains('friend')).toBe(false);
	 });

	test('updateAddFriendButtonText', () => {
		const isFriend = true;
		const element = document.querySelector('.profile__footer-button');
		updateAddFriendButtonText(isFriend, element);
		
		expect(element.innerText).toBe('Remove as friend');
	});
});