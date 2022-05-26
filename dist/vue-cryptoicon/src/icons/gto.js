const Gto = {
  symbol: 'gto',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" fill="#7f27ff" r="16"/><path d="M15.376 14H8.02v7.222c-.008.739.288 1.45.82 1.972s1.257.813 2.01.806h4.527zm.17-3.779h.792c.784-1.35 1.502-2.268 2.177-2.764.832-.613 1.684-.618 2.352.038.624.612.741 1.38.33 2.12-.116.206-.27.408-.463.606h2.908c.679 0 1.358.558 1.358 1.333 0 .667-.569 1.334-1.358 1.334h-7.134V11.11h-1.132v1.778H8.358C7.68 12.888 7 12.33 7 11.554c0-.666.569-1.333 1.358-1.333h2.94a3.294 3.294 0 01-.488-.572c-.487-.744-.428-1.53.207-2.154.668-.656 1.52-.65 2.353-.038.674.496 1.392 1.415 2.177 2.764zm-1.315 0c-.58-.923-1.098-1.55-1.54-1.875-.409-.3-.633-.302-.874-.066-.247.243-.262.451-.055.767.236.361.733.768 1.449 1.174zm3.422 0h1.22c.683-.392 1.134-.788 1.33-1.14.17-.304.134-.535-.136-.8-.241-.237-.465-.236-.873.065-.443.325-.962.952-1.54 1.875zm-1.145 3.778h7.357v7.223a2.725 2.725 0 01-.82 1.972 2.83 2.83 0 01-2.01.806h-4.527z" fill="#fff"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M15.547 10.221c-.785-1.35-1.503-2.268-2.177-2.764-.832-.613-1.685-.618-2.353.038-.635.623-.694 1.41-.207 2.154.127.193.29.384.488.572h-2.94c-.79 0-1.358.667-1.358 1.333 0 .776.68 1.334 1.358 1.334h7.018V11.11h1.132v1.778h7.134c.79 0 1.358-.667 1.358-1.334 0-.775-.68-1.333-1.358-1.333h-2.908c.192-.198.347-.4.462-.606.412-.74.295-1.508-.329-2.12-.668-.656-1.52-.65-2.352-.038-.675.496-1.393 1.415-2.177 2.764zm-1.316 0h-1.02c-.716-.406-1.213-.813-1.45-1.174-.206-.316-.19-.524.056-.767.241-.236.465-.235.873.066.443.325.962.952 1.541 1.875zm3.422 0c.58-.923 1.098-1.55 1.54-1.875.409-.3.633-.302.874-.066.27.266.306.497.136.801-.196.352-.647.748-1.33 1.14zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.624-18H8.02v7.222c-.008.739.288 1.45.82 1.972s1.257.813 2.01.806h4.527zm1.132 0v10h4.528a2.83 2.83 0 002.009-.806 2.725 2.725 0 00.82-1.972v-7.223z"/>`;
  }
};
export default Gto;