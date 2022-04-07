const Knc = {
  symbol: 'knc',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle fill="#31CB9E" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M14.927 16.162l7.72 4.423a.408.408 0 00.618-.353v-8.146a.405.405 0 00-.618-.35l-7.72 4.426zm7.557-6.383l-5.278-3.882a.42.42 0 00-.661.222l-1.927 8.647 7.82-4.323a.39.39 0 00.046-.664M17.2 26.424l5.284-3.882a.395.395 0 00-.044-.673l-7.822-4.323 1.927 8.647a.417.417 0 00.655.238"/><path d="M12.92 16.002l2.007-9.389a.398.398 0 00-.618-.404l-5.142 3.943a1.065 1.065 0 00-.417.85v10.006c-.005.337.15.656.417.861l5.117 3.932a.398.398 0 00.618-.405l-1.983-9.394z"/></g></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-1.382 17.546l1.927 8.647.027.078c.046.1.13.179.236.217a.403.403 0 00.392-.064l5.284-3.882.061-.053a.395.395 0 00-.105-.62l-7.822-4.323zm.136-11.343a.398.398 0 00-.445.006l-5.142 3.943-.094.081c-.206.2-.324.478-.323.769v10.006l.006.125c.03.29.177.557.411.736l5.117 3.932.07.038a.398.398 0 00.548-.443l-1.983-9.394 2.008-9.389.007-.08a.398.398 0 00-.18-.33zm8.305 5.525a.405.405 0 00-.412.009l-7.72 4.425 7.72 4.423.08.036a.408.408 0 00.538-.389v-8.146l-.008-.087a.405.405 0 00-.198-.27zm-5.924-5.875a.42.42 0 00-.59.266l-1.927 8.647 7.82-4.323.067-.044a.39.39 0 00-.021-.62l-5.278-3.882z"/>`;
  }
};
export default Knc;
