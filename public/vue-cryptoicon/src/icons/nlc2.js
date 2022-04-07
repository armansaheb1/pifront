const Nlc2 = {
  symbol: 'nlc2',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#f28f01" r="16"/><path d="M18.151 13.719L16.21 9.903c.404-.88.606-1.38.606-1.495 0-.413-.272-.715-.815-.908h5.948c-.733.33-1.385 1.155-1.955 2.476zm-2.916 5.928l-.905 1.84h5.337c2.417 0 4.033-.453 4.848-1.36L21.663 24.5H7.078c1.575-.303 3.164-2.2 4.766-5.694.54-1.074 1.035-2.066 1.487-2.974zM5 20.25c1.181-.701 5.5-8.172 5.5-10.274 0-.495-.299-.963-.896-1.403h4.644l4.033 7.922 3.912-7.922H27c-2.037.536-6.07 10.146-6.07 11.264 0 .22.04.358.122.413h-4.237l-3.626-7.262-3.585 7.262z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M18.151 13.719l1.842-3.743c.57-1.32 1.222-2.146 1.955-2.476H16c.543.193.815.495.815.908 0 .116-.202.614-.606 1.495zm-2.916 5.928l-1.904-3.815c-.452.908-.947 1.9-1.487 2.974-1.602 3.493-3.19 5.391-4.766 5.694h14.585l2.852-4.374c-.815.908-2.431 1.362-4.848 1.362H14.33zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 20.25h4.604l3.585-7.262 3.626 7.262h4.237c-.082-.055-.122-.193-.122-.413 0-1.118 4.033-10.728 6.07-11.264h-4.807l-3.912 7.922-4.033-7.922H9.604c.597.44.896.908.896 1.403 0 2.102-4.319 9.573-5.5 10.274z" fill-rule="evenodd"/>`;
  }
};
export default Nlc2;