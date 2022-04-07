const Eos = {
  symbol: 'eos',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#000" fill-rule="nonzero"/><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width=".64" d="M10.886 11.61L16 27.667l-7.588-4.754 2.474-11.303L16 4.624v4.9L8.412 22.913h15.183L16.007 9.524v-4.9l5.113 6.986 2.475 11.303-7.588 4.754L21.12 11.61"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.428-20.453l-2.47 11.284a.322.322 0 00.155.363l7.573 4.745c.056.035.116.05.173.05a.317.317 0 00.174-.05l7.573-4.745a.322.322 0 00.154-.363l-2.47-11.284a.322.322 0 00-.058-.13l-5.11-6.982a.311.311 0 00-.263-.132.311.311 0 00-.262.132l-5.11 6.983a.322.322 0 00-.059.13zm-1.395 9.367l1.767-8.07 1.01 3.171-2.777 4.899zm-.216 1.68l3.257-5.748 1.83 5.747H8.96zm.565.64h4.726l1.178 3.699-5.904-3.7zm2.857-7.978l-1.143-3.588 4.44-6.065v3.836l-3.297 5.817zm3.62 11.369l-1.08-3.392h2.16l-1.08 3.392zm.574.308l1.178-3.7h4.726l-5.904 3.7zm4.486-14.089l1.766 8.07-2.776-4.899 1.01-3.17zm-1.44 2.412L16.327 9.44V5.603l4.44 6.065-1.144 3.588zm3.422 7.337H17.96l1.83-5.747 3.256 5.747zm-7.042-12.427l3.356 5.921-2.072 6.506H14.72l-2.072-6.506 3.355-5.921z"/>`;
  }
};
export default Eos;