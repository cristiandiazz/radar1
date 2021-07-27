import index from "./utils/index.html";
import profile from '../routes/profile';
import sessionStorageMock from './utils/__mocks__/sessionStorageMock';

describe("Chat =>", () => {
  let data;

  beforeEach(() => {
    document.body.innerHTML += index;

    data = {
      isFriend: true,
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

  test("updateFriend", () => {
    global.sessionStorage.setItem(
      "chatApp",
      JSON.stringify(data)
    );

    profile();

    const container = document.querySelector('.isFriend')
    
    expect(container).toBeDefined()

  });
});
