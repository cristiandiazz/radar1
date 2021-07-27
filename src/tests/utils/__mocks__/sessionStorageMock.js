export const sessionStorageMock = () => {
    return {
      getItem(key) {
        return data[key] || null;
      },
      setItem(key, value) {
        data[key] = value.toString();
      },
    };
  };