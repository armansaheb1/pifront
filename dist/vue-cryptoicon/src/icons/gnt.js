const Gnt = {
  symbol: 'gnt',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#001D57"/><path fill="#FFF" fill-rule="nonzero" d="M20.499 5.288l1.203 1.204-2.277 2.34c.48.73.738 1.591.738 2.479a4.448 4.448 0 01-1.258 3.131 4.183 4.183 0 01-2.217 1.226v2.039a4.273 4.273 0 012.213 1.22 4.451 4.451 0 011.262 3.136 4.451 4.451 0 01-1.262 3.135 4.262 4.262 0 01-3.07 1.302 4.24 4.24 0 01-3.07-1.302 4.474 4.474 0 01-1.261-3.135c0-1.18.448-2.299 1.258-3.132a4.183 4.183 0 012.217-1.225v-2.04a4.274 4.274 0 01-2.213-1.22A4.474 4.474 0 0111.5 11.31c0-1.18.448-2.299 1.262-3.135a4.262 4.262 0 013.07-1.303c.86 0 1.687.262 2.395.749L20.5 5.288zm-4.667 14.057a2.53 2.53 0 00-1.857.79 2.751 2.751 0 00-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 001.857.79 2.53 2.53 0 001.856-.79 2.751 2.751 0 00.775-1.927c0-.725-.275-1.402-.778-1.931a2.527 2.527 0 00-1.853-.787zm1.853-6.09a2.754 2.754 0 00.778-1.931 2.7 2.7 0 00-.775-1.928 2.578 2.578 0 00-1.856-.79 2.53 2.53 0 00-1.857.79 2.751 2.751 0 00-.775 1.928c0 .725.275 1.402.775 1.927a2.58 2.58 0 001.857.79c.711 0 1.367-.276 1.853-.786z"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.499-26.712l-2.272 2.334a4.212 4.212 0 00-2.395-.749 4.262 4.262 0 00-3.07 1.303A4.474 4.474 0 0011.5 11.31c0 1.18.448 2.298 1.262 3.135a4.274 4.274 0 002.213 1.22v2.04a4.189 4.189 0 00-2.217 1.225 4.471 4.471 0 00-1.258 3.132c0 1.18.448 2.298 1.262 3.135a4.24 4.24 0 003.07 1.302 4.262 4.262 0 003.07-1.302 4.451 4.451 0 001.261-3.135 4.451 4.451 0 00-1.262-3.135 4.274 4.274 0 00-2.213-1.221v-2.04a4.183 4.183 0 002.217-1.225 4.448 4.448 0 001.258-3.131c0-.888-.259-1.748-.738-2.478l2.277-2.34L20.5 5.287zm-4.667 14.057c.711 0 1.367.277 1.853.787.503.529.778 1.206.778 1.93 0 .73-.277 1.417-.775 1.928a2.53 2.53 0 01-1.856.79c-.7 0-1.362-.282-1.857-.79a2.771 2.771 0 01-.775-1.927c0-.73.278-1.417.775-1.927a2.53 2.53 0 011.857-.791zm1.853-6.09a2.527 2.527 0 01-1.853.787c-.7 0-1.362-.283-1.857-.791a2.771 2.771 0 01-.775-1.927c0-.73.278-1.417.775-1.928a2.53 2.53 0 011.857-.79c.7 0 1.362.282 1.856.79a2.7 2.7 0 01.775 1.928c0 .73-.277 1.416-.778 1.93z"/>`;
  }
};
export default Gnt;