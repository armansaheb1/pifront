const Nexo = {
  symbol: 'nexo',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#1A4199"/><g fill="#FFF"><path d="M10.676 7.125l10.732 6.191v6.319L5 10.159l5.265-3.034a.42.42 0 01.42 0" opacity=".7"/><path opacity=".9" d="M21.408 7l-5.467 3.16 5.467 3.156z"/><path d="M21.408 7l5.264 3.036a.42.42 0 01.22.367v12.389l-5.484-3.157V7z"/><path d="M26.881 22.792l-5.264 3.033a.44.44 0 01-.42 0l-10.732-6.19v-6.328l16.416 9.485z" opacity=".9"/><path d="M5 10.16v12.387a.42.42 0 00.22.368l5.265 3.036V13.307L5 10.16z" opacity=".6"/><path opacity=".7" d="M10.476 25.95l5.465-3.158-5.465-3.157z"/></g></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M5 10.16l5.485 3.147v.012l10.923 6.31v-6.313L15.94 10.16l5.467 3.157-10.732-6.19h.009a.42.42 0 00-.42 0L5 10.158zm5.485 3.167v6.319l10.711 6.18a.44.44 0 00.42 0l5.265-3.034-2.993-1.73-2.48-1.427v-.006.006l-10.923-6.308zm13.403 7.735l3.004 1.73V10.403a.42.42 0 00-.22-.367L21.408 7v12.63l2.48 1.432zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5 10.16v12.387a.42.42 0 00.22.368l5.265 3.036v-6.305l-.02-.011v-6.32l.02.012v-.008l-.02-.012v.008L5 10.16z"/>`;
  }
};
export default Nexo;
