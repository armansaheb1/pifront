const Atm = {
  symbol: 'atm',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#346fce" r="16"/><path d="M20.16 18.706l.956 1.797a4.369 4.369 0 01-1.806 5.908l-.124.066a4.369 4.369 0 01-5.909-1.806l-3.223-6.062a4.369 4.369 0 011.592-5.787l-.956-1.797a4.369 4.369 0 011.807-5.908l.124-.066a4.369 4.369 0 015.908 1.806l3.223 6.062a4.369 4.369 0 01-1.591 5.787zm0 0l-2.267-4.265a4.369 4.369 0 00-5.908-1.806l-.124.065c-.073.04-.145.08-.215.122l2.268 4.265a4.369 4.369 0 005.908 1.806l.124-.065c.073-.04.145-.08.215-.122z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M20.167 18.702a4.369 4.369 0 001.586-5.783L18.53 6.857a4.369 4.369 0 00-5.909-1.806l-.124.066a4.369 4.369 0 00-1.806 5.908l.956 1.798c.072-.044.145-.086.22-.126l.124-.066a4.369 4.369 0 015.909 1.806zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.167-13.298a4.438 4.438 0 01-.22.126l-.124.065a4.369 4.369 0 01-5.909-1.806l-2.267-4.264a4.369 4.369 0 00-1.586 5.782l3.222 6.06a4.369 4.369 0 005.908 1.806l.124-.066a4.369 4.369 0 001.807-5.908z" fill-rule="evenodd"/>`;
  }
};
export default Atm;