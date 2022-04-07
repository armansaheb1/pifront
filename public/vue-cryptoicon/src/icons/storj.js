const Storj = {
  symbol: 'storj',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#2683FF"/><path fill="#FFF" fill-rule="nonzero" d="M24.977 18.971a1.881 1.881 0 01.673 2.533c-.514.902-1.682 1.222-2.601.718-.09-.049-.168-.107-.248-.165l-4.926 2.784c.012.09.019.181.02.272 0 .107 0 .204-.02.31-.168 1.02-1.147 1.718-2.186 1.553-1.038-.165-1.75-1.126-1.582-2.144L9.15 22.028a3.31 3.31 0 01-.237.155c-.08.039-.159.087-.248.116a1.919 1.919 0 01-2.483-1.038c-.395-.96.08-2.047 1.059-2.435v-5.608a1.225 1.225 0 01-.257-.117 4.16 4.16 0 01-.218-.145 1.86 1.86 0 01-.752-1.738 1.881 1.881 0 011.17-1.499 1.943 1.943 0 011.906.258l5.006-2.843c-.01-.087-.02-.164-.02-.252 0-1.028.88-1.882 1.929-1.882 1.048 0 1.908.834 1.909 1.872 0 .088-.01.165-.02.253l5.045 2.862a1.936 1.936 0 012.82.592c.513.902.177 2.047-.743 2.552-.089.038-.178.087-.267.116v5.618c.079.03.155.065.227.106zm.347 2.348a1.415 1.415 0 00-.505-1.96 1.468 1.468 0 00-1.72.185l-2.266-1.29a2.502 2.502 0 00-.87-3.202 3.679 3.679 0 00-.248-.621l3.423-1.902c.356.33.857.465 1.335.36a1.438 1.438 0 001.098-1.728c-.178-.776-.97-1.251-1.76-1.077a1.438 1.438 0 00-1.099 1.727l-3.462 1.931c-.672-.786-2.809-1.31-2.809-1.31V8.153a1.34 1.34 0 00.91-.892 1.333 1.333 0 00-.91-1.67c-.722-.213-1.484.175-1.702.884a1.333 1.333 0 00.91 1.669v4.366s-1.166.378-1.621.746a3.121 3.121 0 00-1.385.36l-3.255-1.834a1.4 1.4 0 00-.356-1.3 1.465 1.465 0 00-2.057-.068 1.415 1.415 0 00-.07 2.028 1.466 1.466 0 002.058.068l2.938 1.649a2.991 2.991 0 00-.336 3.9l-2.582 1.465a1.49 1.49 0 00-1.345-.349 1.44 1.44 0 00-1.088 1.737c.189.774.981 1.251 1.77 1.066a1.44 1.44 0 001.088-1.736l2.76-1.562c.71.563 1.637.787 2.532.611.276.126.56.233.85.32v4.076a1.557 1.557 0 00-.919.766 1.49 1.49 0 00.683 2.018c.06.03.119.058.188.078.01 0 .02.01.03.01.81.242 1.672-.195 1.919-.99a1.498 1.498 0 00-1.01-1.883V19.69s.742-.068 1.088-.175c.965.38 2.069.155 2.8-.572l2.314 1.33a1.417 1.417 0 00.683 1.562 1.482 1.482 0 001.998-.515zm-17.34-1.358c.22.001.422.115.534.3a.65.65 0 01.079.302.608.608 0 01-.613.601.608.608 0 01-.614-.601c0-.333.275-.602.614-.602zm8.665-13.088a.611.611 0 01-.614.601.608.608 0 01-.613-.601c0-.333.275-.602.613-.602.34 0 .614.27.614.602zm7.478 5.22a.614.614 0 01-.613-.602c0-.332.275-.602.613-.602.34 0 .614.27.614.602a.608.608 0 01-.614.601zM8.27 10.937a.588.588 0 01.228.815.61.61 0 01-.831.223.586.586 0 01-.228-.815.61.61 0 01.831-.223zm16.104 9.14a.588.588 0 01.228.814.639.639 0 01-.535.301.616.616 0 01-.538-.298.592.592 0 010-.607.616.616 0 01.538-.298.66.66 0 01.307.087zm-8.952 5.015a.034.034 0 01.01-.02.608.608 0 01.692-.498.6.6 0 01.515.674.642.642 0 01-.633.514.613.613 0 01-.584-.67zm3.522-9.285a1.429 1.429 0 011.009 1.378c0 .049-.01.098-.01.146-.01.039-.01.078-.02.116v.03c-.02.087-.04.174-.08.261a1.403 1.403 0 01-.543.65c-.06.03-.11.059-.168.088l-.03.01a1.274 1.274 0 01-.366.107l-.05.009c-.069 0-.128.01-.197.01-.323 0-.636-.106-.89-.301l-.268.116c-.082.04-.168.069-.257.088h-.01a2.595 2.595 0 01-1.83-.185h-.01c-.059-.029-.118-.058-.168-.087l-.02-.01c-.059-.038-.108-.077-.168-.116a1.844 1.844 0 01-.761.155c-.08 0-.149 0-.218-.01l-.04-.01-.178-.028-.02-.01a1.339 1.339 0 01-.187-.049 2.141 2.141 0 01-.455-.213 1.725 1.725 0 01-.673-.776c0-.02-.01-.03-.02-.049a.995.995 0 00-.04-.097.468.468 0 01-.03-.068c-.01-.029-.029-.058-.029-.087a.279.279 0 00-.02-.087c-.01-.03-.01-.04-.02-.078-.01-.039-.01-.077-.019-.116 0-.03-.01-.049-.01-.068a1.152 1.152 0 01-.01-.185 1.85 1.85 0 01.01-.223c0-.029.01-.048.01-.068.01-.058.02-.106.03-.155.01-.02.01-.048.02-.068a.94.94 0 01.049-.155c.01-.02.01-.029.02-.048a1.25 1.25 0 01.079-.175l.01-.02a1.977 1.977 0 011.641-1.028c.03-.01.06-.01.1-.01.119 0 .238.01.356.03.05-.06.099-.108.158-.166l.05-.048c.059-.049.108-.097.168-.136l.03-.02c.039-.029.108-.077.138-.097.03-.019.079-.058.109-.068a.466.466 0 00.099-.048c.059-.03.158-.078.217-.097l.05-.039a2.489 2.489 0 011.246-.145h.01c.08.008.159.02.237.038h.01c.08.01.149.04.228.059l.01.01c.079.028.148.057.217.087l.02.01c.068.028.134.06.198.096l.01.01c.059.03.128.078.188.116l.01.01c.069.039.128.087.187.136l.01.01a2.566 2.566 0 01.742 1.038v.01c.02.058.04.126.06.184 0 .02.01.039.01.058.016.05.03.103.039.155l.03.223z"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.977-13.029a1.623 1.623 0 00-.227-.106v-5.618c.089-.03.178-.078.267-.116.92-.505 1.256-1.65.742-2.552a1.936 1.936 0 00-2.82-.592l-5.044-2.862c.01-.088.02-.165.02-.253 0-1.038-.86-1.872-1.91-1.872-1.048 0-1.928.854-1.928 1.882 0 .088.01.165.02.252L9.09 9.977a1.943 1.943 0 00-1.906-.258 1.881 1.881 0 00-1.17 1.5 1.86 1.86 0 00.752 1.737c.07.048.139.097.218.145.08.049.167.088.257.117v5.608c-.98.388-1.454 1.475-1.059 2.435A1.919 1.919 0 008.666 22.3c.09-.029.168-.077.248-.116a3.31 3.31 0 00.237-.155l4.956 2.804c-.169 1.018.544 1.979 1.582 2.144 1.039.165 2.018-.534 2.186-1.553.02-.106.02-.203.02-.31a2.34 2.34 0 00-.02-.272l4.926-2.784c.08.058.159.116.248.165.92.504 2.087.184 2.601-.718a1.882 1.882 0 00-.673-2.533zm.347 2.348a1.482 1.482 0 01-1.998.515 1.417 1.417 0 01-.683-1.562l-2.315-1.33a2.618 2.618 0 01-2.799.572c-.346.107-1.088.175-1.088.175v3.997a1.498 1.498 0 011.01 1.883c-.247.795-1.108 1.232-1.92.99-.01 0-.02-.01-.03-.01a1.078 1.078 0 01-.187-.078 1.49 1.49 0 01-.683-2.018c.188-.369.525-.64.92-.766v-4.075a6.925 6.925 0 01-.85-.32 3.116 3.116 0 01-2.533-.612l-2.76 1.562a1.44 1.44 0 01-1.088 1.736c-.789.185-1.581-.292-1.77-1.066a1.44 1.44 0 011.088-1.737 1.49 1.49 0 011.345.35l2.582-1.466a2.991 2.991 0 01.336-3.9l-2.938-1.65a1.466 1.466 0 01-2.057-.067 1.415 1.415 0 01.069-2.028 1.465 1.465 0 012.057.068 1.4 1.4 0 01.356 1.3l3.255 1.833a3.13 3.13 0 011.385-.359c.455-.368 1.621-.746 1.621-.746V8.144a1.333 1.333 0 01-.91-1.67c.218-.708.98-1.096 1.702-.882.722.213 1.128.96.91 1.669a1.34 1.34 0 01-.91.892v4.28s2.137.523 2.81 1.309l3.461-1.93a1.438 1.438 0 011.098-1.728c.792-.174 1.583.301 1.761 1.077a1.438 1.438 0 01-1.098 1.727 1.493 1.493 0 01-1.335-.359l-3.423 1.902c.099.203.188.407.247.62 1.059.709 1.435 2.067.87 3.202l2.266 1.29a1.468 1.468 0 011.721-.184c.683.398.92 1.271.505 1.96zm-17.34-1.358a.608.608 0 00-.614.602c0 .332.275.601.614.601.338 0 .613-.27.613-.601a.65.65 0 00-.08-.301.625.625 0 00-.533-.3v-.001zm8.665-13.088a.608.608 0 00-.614-.602.608.608 0 00-.613.602c0 .332.275.601.613.601a.611.611 0 00.614-.601zm7.478 5.22c.34 0 .614-.27.614-.602a.608.608 0 00-.614-.602.608.608 0 00-.613.602.614.614 0 00.613.602zM8.27 10.937a.61.61 0 00-.83.223.586.586 0 00.227.815.61.61 0 00.83-.223.588.588 0 00-.227-.815zm16.104 9.14a.66.66 0 00-.307-.088.616.616 0 00-.538.298.592.592 0 000 .607.616.616 0 00.538.298.639.639 0 00.535-.3.588.588 0 00-.228-.816zm-8.952 5.015a.613.613 0 00.584.67.642.642 0 00.633-.514.6.6 0 00-.515-.674.608.608 0 00-.692.499.034.034 0 00-.01.02zm3.522-9.285l-.03-.223a1.188 1.188 0 00-.04-.155c0-.02-.01-.039-.01-.058-.02-.058-.04-.126-.059-.185v-.01a2.566 2.566 0 00-.742-1.037l-.01-.01a1.236 1.236 0 00-.188-.136l-.01-.01c-.059-.038-.128-.087-.187-.116l-.01-.01a1.859 1.859 0 00-.198-.097l-.02-.01a4.98 4.98 0 00-.217-.087l-.01-.01c-.08-.019-.149-.048-.228-.058h-.01a2.016 2.016 0 00-.237-.038h-.01a2.489 2.489 0 00-1.246.145l-.05.039c-.06.02-.158.068-.217.097a.466.466 0 01-.1.048c-.029.01-.078.049-.108.068l-.139.097-.03.02c-.059.039-.108.087-.168.136l-.049.048a2.19 2.19 0 00-.158.165 2.204 2.204 0 00-.356-.029c-.04 0-.07 0-.1.01a1.977 1.977 0 00-1.64 1.028l-.011.02c-.03.056-.057.115-.08.175-.01.019-.01.029-.02.048a.94.94 0 00-.049.155c-.01.02-.01.049-.02.068l-.029.155c0 .02-.01.04-.01.068a1.685 1.685 0 00-.01.223c-.001.062.002.124.01.185 0 .02.01.039.01.068.01.039.01.077.02.116.01.039.01.049.02.078a.279.279 0 01.02.087c0 .03.019.058.029.087a.468.468 0 00.03.068.995.995 0 01.04.097c.01.02.019.03.019.049.139.32.374.59.673.776.148.087.297.165.455.213.061.021.124.037.188.049l.02.01.178.029.04.01c.068.01.138.01.217.01.267 0 .524-.05.761-.156.06.039.11.078.169.116l.02.01c.049.03.108.058.168.087h.01a2.595 2.595 0 001.83.185h.01a1.23 1.23 0 00.256-.088l.267-.116c.255.195.568.3.89.3.07 0 .13-.01.198-.01l.05-.009a1.323 1.323 0 00.366-.106l.03-.01c.059-.03.108-.058.168-.087a1.415 1.415 0 00.623-.912v-.03c.01-.038.01-.077.02-.116 0-.048.01-.097.01-.146 0-.64-.406-1.193-1.01-1.377z"/>`;
  }
};
export default Storj;
