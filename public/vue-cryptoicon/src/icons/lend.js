const Lend = {
  symbol: 'lend',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" fill="#0fa9c9" r="16"/><path d="M17.147 20.446L11.697 26l-1.554-1.705 3.777-3.85L10 16.452l1.673-1.706zm3.18-3.191L22 15.549l-3.92-3.995 3.777-3.849L20.303 6l-5.474 5.554zm-7.96-3.167l5.498 5.7 1.673-1.705-5.498-5.603z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.147-11.554l-5.474-5.7L10 16.45l3.92 3.995-3.777 3.849L11.697 26zm3.18-3.191L22 15.549l-3.92-3.995 3.777-3.849L20.303 6l-5.474 5.554zm-7.96-3.167l5.498 5.7 1.673-1.705-5.498-5.603z"/>`;
  }
};
export default Lend;
