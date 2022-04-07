const Game = {
  symbol: 'game',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#2d475b" r="16"/><path d="M12.869 12.685h11.085v2.488H12.869zm11.085 4.144H24v6.543s-8.647 6.265-15.363-.552c0 0-3.68-3.732-2.346-9.168 0 0 1.058-6.771 9.108-7.6 0 0 4.967-.692 8.187 2.994l-1.932 1.888s-4.094-4.238-9.567-.92c0 0-4.462 2.487-2.622 8.752 0 0 2.024 5.436 8.371 4.33 0 0 2.162-.492 3.266-1.444v-2.335H12.87v-2.488z" fill="#fff" fill-rule="nonzero"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.131-19.315v2.488h11.085v-2.488zm11.085 4.144H12.869v2.488h8.233v2.335c-1.104.952-3.266 1.444-3.266 1.444-6.347 1.106-8.37-4.33-8.37-4.33-1.84-6.265 2.62-8.753 2.62-8.753 5.474-3.317 9.568.921 9.568.921l1.932-1.888c-3.22-3.686-8.187-2.995-8.187-2.995-8.05.83-9.108 7.601-9.108 7.601-1.334 5.436 2.346 9.168 2.346 9.168 6.716 6.817 15.363.552 15.363.552V16.83z" fill-rule="evenodd"/>`;
  }
};
export default Game;
