const Zcl = {
  symbol: 'zcl',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#c87035" r="16"/><path d="M15.992 27C9.917 26.996 5 22.07 5 15.986 5 9.915 9.932 4.996 16.015 5 22.08 5.004 27.008 9.934 27 16.002c-.012 6.002-4.836 10.99-11.008 10.998zm-4.483-5.97c.031-.059.055-.106.078-.144.984-1.736 1.97-3.47 2.956-5.202.864-1.518 1.726-3.038 2.585-4.558a.146.146 0 01.15-.09c1.004.005 2.012.005 3.015.005h.143c-1.394 2.46-2.778 4.903-4.173 7.36.05.004.078.004.105.004 2.519 0 5.036.001 7.552.004.085 0 .112-.031.131-.105a8.318 8.318 0 00.105-4.127c-.376-1.65-1.201-3.043-2.418-4.208a7.657 7.657 0 00-1.84-1.297c-1.674-.854-3.437-1.125-5.285-.8-1.84.327-3.39 1.196-4.661 2.57-.167.18-.318.373-.477.56.004.011.012.02.016.03h7.18c-.04.075-.067.129-.098.18-.437.776-.88 1.548-1.313 2.325a.198.198 0 01-.202.116c-2.262-.004-4.524-.005-6.784-.004h-.136c-1.146 3.603.473 8.122 4.534 9.93 3.932 1.756 8.055.14 9.988-2.557-3.715.007-7.432.01-11.15.007zm12.643 1.898c1.395-1.55 2.635-4.1 2.557-7.163-.062-2.523-.926-4.74-2.541-6.7-.504.508-.996 1.001-1.484 1.494 2.56 3.079 2.67 7.632.027 10.901z" fill="#fff" fill-rule="nonzero"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.008-5c6.172-.008 10.996-4.996 11.008-10.998C27.008 9.934 22.08 5.004 16.015 5 9.932 4.996 5 9.915 5 15.986 5 22.07 9.917 26.996 15.992 27zm-4.483-5.97c3.719.002 7.436 0 11.151-.008-1.933 2.698-6.056 4.313-9.988 2.558-4.06-1.81-5.68-6.328-4.534-9.93h.136c2.26-.002 4.522 0 6.784.003a.198.198 0 00.202-.116c.434-.777.876-1.55 1.313-2.326.031-.05.059-.104.097-.178H9.49c-.003-.012-.011-.02-.015-.031.159-.187.31-.38.477-.56 1.27-1.374 2.82-2.243 4.66-2.57 1.85-.325 3.612-.054 5.286.8a7.657 7.657 0 011.84 1.297c1.217 1.165 2.042 2.558 2.418 4.208a8.318 8.318 0 01-.105 4.127c-.019.074-.046.105-.131.105-2.516-.003-5.033-.004-7.552-.004-.027 0-.054 0-.105-.004 1.395-2.457 2.779-4.9 4.173-7.36h-.143c-1.003 0-2.01 0-3.014-.004a.146.146 0 00-.151.089c-.86 1.52-1.72 3.04-2.585 4.558-.987 1.732-1.972 3.466-2.956 5.202-.023.038-.047.085-.078.143zm12.643 1.898l-1.441-1.468c2.642-3.269 2.534-7.822-.027-10.9.488-.494.98-.987 1.484-1.495 1.615 1.96 2.48 4.177 2.541 6.7.078 3.063-1.162 5.614-2.557 7.163z" fill-rule="evenodd"/>`;
  }
};
export default Zcl;
