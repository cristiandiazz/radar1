import chat from '../routes/chat';
import chatHTML from "../routes/chat/chat.html";
import index from "./utils/index.html";
import sessionStorageMock from './utils/__mocks__/sessionStorageMock';

describe("Chat =>", () => {
  let data;

  beforeEach(() => {
    document.body.innerHTML += index;
    document.body.innterHTML += chatHTML;

    data = {
      isFriend: false,
      messages: [
        {
          text: "Hello panita, Im J Balvin ya tu sabe que vengo de Medellin vamos hacer el pary",
        },
      ],
    };

    global.sessionStorage = sessionStorageMock;

  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test("printConversation", () => {
    window.sessionStorage.setItem(
      "chatApp",
      JSON.stringify(data)
    );

    chat();

    const chatMsg = document.body.querySelector('.message');
    expect(chatMsg).toBeDefined()
  });
});
