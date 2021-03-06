const Neu = {
  symbol: 'neu',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#B3BA00"/><g fill="#FFF"><path d="M13.13 10.664l-.13.079L19 20v-9.265L16.004 9zM13 21.165L16.136 23 19 21.328 13 12zm-3-8.809v7.288L12 21V11zM20 21l2-1.387v-7.226L20 11z"/><path d="M16 4C9.375 4 4 9.375 4 16s5.375 12 12 12 12-5.375 12-12S22.625 4 16 4zm-.05 19.62l-6.476-3.84v-7.668l6.477-3.83 6.476 3.83v7.669l-6.476 3.838z"/></g></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28C9.375 4 4 9.375 4 16s5.375 12 12 12 12-5.375 12-12S22.625 4 16 4zm-.05 19.62l-6.476-3.84v-7.668l6.477-3.83 6.476 3.83v7.669l-6.476 3.838zm-2.925-12.872l-.132.082L19 20.48v-9.658l-3.05-1.808-2.925 1.734zm-.198 10.282l3.124 1.858 2.852-1.693-5.976-9.444v9.28zM10.1 12.482v6.937l2.178 1.29v-9.517l-2.178 1.29zm9.452 8.269l2.252-1.332v-6.937l-2.252-1.331v9.6z"/>`;
  }
};
export default Neu;
