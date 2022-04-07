const Gbp = {
  symbol: 'gbp',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#bc3fe0" r="16"/><path d="M11.087 14.815v-2.332c0-3.676 2.219-5.983 6.075-5.983 2.932 0 4.57 1.242 5.838 2.84l-2.483 1.9c-.951-1.165-1.85-1.85-3.328-1.85-1.77 0-2.827 1.217-2.827 3.17v2.255h6.578v2.637h-6.578v4.335h8.585V24.5H9v-1.977l2.087-.609v-4.462H9v-2.637z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.913-17.185H9v2.637h2.087v4.462L9 22.523V24.5h13.947v-2.713h-8.585v-4.335h6.578v-2.637h-6.578V12.56c0-1.952 1.057-3.169 2.827-3.169 1.479 0 2.377.685 3.328 1.85L23 9.34c-1.268-1.598-2.906-2.84-5.838-2.84-3.856 0-6.075 2.307-6.075 5.983z" fill-rule="evenodd"/>`;
  }
};
export default Gbp;
