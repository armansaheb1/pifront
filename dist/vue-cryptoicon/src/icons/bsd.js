const Bsd = {
  symbol: 'bsd',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#000"/><path d="M28 15.127H4l13.964-4.69L19.927 4 28 15.127zM4.11 16.655h23.78l-13.963 4.581-1.963 6.655-7.855-11.236z" fill="#FFF"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm12-16.873L19.927 4l-1.963 6.436L4 15.127h24zM4.11 16.655l7.854 11.236 1.963-6.655 13.964-4.581H4.109z"/>`;
  }
};
export default Bsd;
