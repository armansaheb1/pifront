const Btg = {
  symbol: 'btg',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#EBA809" fill-rule="nonzero"/><path fill="#FFF" d="M16 27C9.925 27 5 22.075 5 16S9.925 5 16 5s11 4.925 11 11-4.925 11-11 11zm-.988-20.26c.002.875.002 1.75.002 2.625l1.31.002c.003-.897.005-1.795 0-2.692-.437.015-.876.036-1.312.065zm3.152 2.667c1.152.155 2.39.331 3.307 1.108 1.401 1.257 1.22 3.896-.495 4.807 1.027.24 2.044.923 2.297 2.002.33 1.414.068 3.11-1.069 4.106-1.126.925-2.65 1.047-4.043 1.18.006.818.004 1.636.002 2.456 2.93-.715 5.46-2.895 6.535-5.715 1.02-2.602.78-5.663-.662-8.06-1.273-2.16-3.437-3.75-5.867-4.358-.006.825-.006 1.65-.004 2.474zm-8.746-.035c1.27.06 2.54.048 3.81.046 0-.772.003-1.544-.004-2.316-1.422.461-2.688 1.288-3.807 2.27h.001zm-1.482 1.99c-1.493 2.54-1.661 5.799-.416 8.472 1.075 2.396 3.208 4.26 5.705 5.063.005-.77.003-1.542.003-2.312-1.275-.013-2.553.034-3.825-.035.014-.71.18-1.404.423-2.071.624-.013 1.275.096 1.878-.107.352-.296.252-.785.27-1.19-.018-2.314.01-4.629-.012-6.943.023-.373-.211-.776-.6-.85-.64-.127-1.297-.077-1.944-.081-.076-.52-.084-1.047-.093-1.574a.388.388 0 00-.071-.308c-.366.694-.948 1.243-1.318 1.935zm7.13.101v3.412c1.141-.02 2.406.106 3.404-.556.828-.541.775-1.914-.08-2.4-.998-.592-2.216-.424-3.323-.456zm0 5.248v3.785c1.408-.114 2.988.123 4.213-.726.876-.581.771-2.019-.132-2.522-1.227-.733-2.718-.5-4.08-.537zm-.051 5.925c0 .875-.002 1.75-.005 2.627.456.03.912.048 1.368.06.004-.895.002-1.791.002-2.687h-1.365z"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11zm-.988-20.26c.436-.03.875-.05 1.312-.065.005.897.003 1.795 0 2.692l-1.31-.002c0-.875 0-1.75-.002-2.625zm3.152 2.667h.001c-.002-.825-.002-1.65.004-2.474 2.43.609 4.594 2.197 5.867 4.358 1.441 2.397 1.683 5.458.662 8.06-1.076 2.82-3.605 5-6.535 5.715.002-.82.004-1.638-.002-2.457 1.392-.132 2.917-.254 4.043-1.18 1.137-.996 1.4-2.691 1.07-4.105-.254-1.079-1.271-1.763-2.298-2.002 1.716-.91 1.896-3.55.495-4.807-.918-.777-2.155-.953-3.307-1.108zm-8.746-.035c1.118-.982 2.384-1.809 3.806-2.27.007.772.005 1.544.005 2.316-1.271.002-2.542.015-3.81-.046zm-1.482 1.99c.37-.693.952-1.242 1.318-1.936.066.085.09.188.071.308.009.527.017 1.053.093 1.574.647.004 1.304-.046 1.945.081.388.074.622.477.599.85.021 2.314-.006 4.629.013 6.943-.02.405.081.894-.271 1.19-.603.203-1.254.094-1.878.107-.242.667-.409 1.362-.423 2.07 1.272.07 2.55.023 3.825.036 0 .77.002 1.542-.003 2.312-2.497-.803-4.63-2.667-5.705-5.063-1.245-2.673-1.077-5.931.416-8.473zm7.13.101c1.108.032 2.326-.136 3.324.456.855.486.908 1.859.08 2.4-.998.662-2.263.535-3.403.556v-3.412zm0 5.248h.001c1.362.037 2.853-.196 4.08.537.903.503 1.008 1.94.132 2.522-1.225.849-2.805.612-4.212.726V16.71zm-.051 5.925h1.365c0 .896.002 1.792-.002 2.688a37.374 37.374 0 01-1.368-.061c.003-.876.005-1.752.005-2.627z"/>`;
  }
};
export default Btg;
