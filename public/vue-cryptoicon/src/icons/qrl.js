const Qrl = {
  symbol: 'qrl',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#252525" r="16"/><path d="M25.628 21.209a.38.38 0 01.372.384V23.5h-6.279l-.024-1.66a.375.375 0 01.133-.284.564.564 0 01.084-.087c2.767-1.93 3.83-5.605 2.542-8.784-1.289-3.179-4.572-4.978-7.847-4.3-3.274.677-5.631 3.644-5.632 7.09-.002 2.355 1.12 4.56 3.001 5.895a.241.241 0 01.096.099.397.397 0 01.229.359l-.024 1.66H6V21.58c0-.212.167-.384.372-.384s.372.172.372.384v1.152h4.802l.012-.718h-.012c-2.761-2.002-3.946-5.618-2.93-8.938C9.635 9.756 12.62 7.5 15.995 7.5s6.36 2.256 7.377 5.576c1.017 3.32-.168 6.936-2.93 8.938l.013.73h4.802v-1.151a.38.38 0 01.372-.384zm-4.958-5.176c.828 1.053 1.08 1.994.72 2.613-.276.483-.864.743-1.717.743a6.53 6.53 0 01-1.584-.235c-.468 1.635-1.225 2.688-2.089 2.688s-1.62-1.053-2.077-2.688a6.53 6.53 0 01-1.584.235c-.853 0-1.441-.26-1.717-.743-.444-.768.06-1.969 1.212-3.195a6.934 6.934 0 01-.492-.57c-.828-1.053-1.08-1.982-.72-2.626.276-.483.864-.743 1.717-.743a6.53 6.53 0 011.584.236c.468-1.635 1.225-2.688 2.089-2.688s1.62 1.053 2.077 2.7a6.53 6.53 0 011.584-.235c.853 0 1.441.26 1.717.743.36.644.108 1.573-.72 2.626a7.03 7.03 0 01-.492.57c.174.18.338.37.492.569zm-.985-4.05a6.798 6.798 0 00-1.476.21c.129.588.22 1.184.276 1.784.474.35.927.731 1.357 1.14.168-.174.324-.36.468-.533.684-.88.936-1.635.684-2.093-.228-.421-.84-.508-1.309-.508zm-2.64 5.338c.348-.21.684-.433.996-.656.036-.397.048-.793.048-1.214 0-.421-.024-.83-.048-1.214a15.667 15.667 0 00-.997-.644A21.38 21.38 0 0016 13.036c-.358.166-.706.352-1.044.557-.36.21-.685.421-.997.644-.036.384-.048.793-.048 1.214 0 .42.024.83.048 1.214A15.667 15.667 0 0016 17.878c.358-.166.706-.352 1.044-.557zm.948-.037c-.24.148-.468.297-.708.446-.24.148-.48.285-.72.408.394.178.799.331 1.212.459.084-.409.156-.843.216-1.313zm-2.533.854l-.72-.408c-.24-.149-.48-.298-.709-.446.043.442.115.88.216 1.313.412-.13.817-.283 1.213-.459zm-1.969-1.833a19.183 19.183 0 01-.024-.854c0-.297.012-.57.024-.855-.349.264-.682.549-.996.855.316.303.649.589.996.854zm.54-2.662a9.75 9.75 0 01.696-.446c.253-.149.493-.285.733-.409-.395-.178-.8-.33-1.213-.458-.084.408-.156.842-.216 1.313zm2.521-.855c.24.124.48.26.72.409.24.148.48.297.709.446a9.923 9.923 0 00-.216-1.313c-.412.13-.817.282-1.213.458zm1.981 1.82c.012.286.024.558.024.855 0 .297-.012.582-.024.855.348-.285.684-.57.984-.855a9.765 9.765 0 00-.984-.854zm-2.521-5.077c-.612 0-1.236.867-1.645 2.34.562.177 1.111.392 1.645.643a13.145 13.145 0 011.645-.642c-.409-1.474-1.045-2.341-1.645-2.341zm-4.982 2.96c-.264.458-.012 1.226.684 2.08.144.185.3.358.468.544.428-.41.88-.79 1.357-1.138.055-.6.147-1.196.276-1.783-.482-.13-.978-.2-1.476-.211-.469 0-1.069.087-1.309.508zm1.309 6.44c.499-.01.995-.085 1.476-.224a14.572 14.572 0 01-.276-1.782c-.483-.344-.94-.725-1.369-1.14-1.032 1.103-1.44 2.093-1.14 2.638.228.421.84.508 1.309.508zm3.673 2.452c.6 0 1.236-.867 1.645-2.34a13.146 13.146 0 01-1.645-.644 13.32 13.32 0 01-1.645.644c.409 1.473 1.045 2.34 1.645 2.34zm4.982-2.96c.252-.446 0-1.213-.684-2.093a9.288 9.288 0 00-.468-.532c-.428.41-.88.79-1.357 1.14a14.518 14.518 0 01-.276 1.783c.482.129.978.2 1.476.21.469 0 1.069-.087 1.309-.508zm-4.982-4.78c.97 0 1.758.807 1.765 1.808 0 .997-.783 1.806-1.749 1.808-.966.002-1.752-.803-1.757-1.8-.004-.997.775-1.81 1.741-1.816zm0 3.158c.714-.006 1.291-.601 1.297-1.338 0-.739-.58-1.337-1.297-1.337s-1.297.598-1.297 1.337.581 1.338 1.297 1.338z" fill="#fff" fill-rule="nonzero"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.628-10.791a.38.38 0 00-.372.384v1.152h-4.802l-.012-.731c2.761-2.002 3.946-5.618 2.93-8.938-1.018-3.32-4.003-5.576-7.378-5.576s-6.36 2.256-7.377 5.576c-1.017 3.32.168 6.936 2.93 8.938h.011l-.012.718H6.744V21.58c0-.212-.166-.384-.372-.384S6 21.368 6 21.58v1.908h6.279l.024-1.66a.397.397 0 00-.229-.36.244.244 0 00-.096-.098c-1.88-1.335-3.003-3.54-3-5.896 0-3.445 2.357-6.412 5.631-7.09 3.275-.677 6.558 1.122 7.847 4.301 1.289 3.18.225 6.854-2.542 8.784a.564.564 0 00-.084.087.376.376 0 00-.133.284l.024 1.66H26v-1.907a.38.38 0 00-.372-.384zm-4.958-5.176a6.934 6.934 0 00-.492-.57c.174-.18.338-.37.492-.57.828-1.052 1.08-1.981.72-2.625-.276-.483-.864-.743-1.717-.743a6.53 6.53 0 00-1.584.235c-.456-1.647-1.213-2.7-2.077-2.7s-1.62 1.053-2.089 2.688a6.53 6.53 0 00-1.584-.236c-.853 0-1.441.26-1.717.743-.36.644-.108 1.573.72 2.626.154.2.318.39.492.57-1.152 1.226-1.656 2.427-1.212 3.195.276.483.864.743 1.717.743a6.53 6.53 0 001.584-.235c.456 1.635 1.213 2.688 2.077 2.688s1.62-1.053 2.089-2.688a6.53 6.53 0 001.584.235c.853 0 1.441-.26 1.717-.743.36-.619.108-1.56-.72-2.613zm-.985-4.05c.469 0 1.08.087 1.309.508.252.458 0 1.214-.684 2.093-.144.173-.3.359-.468.532-.43-.408-.883-.788-1.357-1.139a14.46 14.46 0 00-.276-1.783 6.798 6.798 0 011.476-.211zm-2.64 5.338a10.79 10.79 0 01-1.045.557 15.667 15.667 0 01-2.04-1.214 19.313 19.313 0 01-.049-1.213c0-.421.012-.83.048-1.214.312-.223.636-.433.997-.644.338-.205.686-.391 1.044-.557.348.173.696.359 1.044.557.349.21.685.421.997.644.024.384.048.793.048 1.214 0 .42-.012.817-.048 1.214a15.74 15.74 0 01-.997.656zm.948-.037c-.06.47-.132.904-.216 1.313a10.38 10.38 0 01-1.213-.459c.24-.123.48-.26.72-.408.24-.149.469-.298.709-.446zm-2.533.854c-.396.176-.8.33-1.213.459a9.923 9.923 0 01-.216-1.313c.228.148.468.297.708.446zm-1.969-1.833c-.347-.265-.68-.55-.996-.854.314-.306.647-.591.996-.855-.012.285-.024.558-.024.855 0 .297.012.582.024.854zm.54-2.662c.06-.471.132-.905.216-1.313.413.127.818.28 1.213.458-.24.124-.48.26-.733.409a9.75 9.75 0 00-.696.446zm2.521-.855c.396-.176.8-.329 1.213-.458.101.432.173.87.216 1.313a36.506 36.506 0 00-.708-.446c-.24-.149-.48-.285-.72-.409zm1.981 1.82c.346.263.675.548.984.855-.3.285-.636.57-.984.855.012-.273.024-.558.024-.855 0-.297-.012-.57-.024-.854zm-2.521-5.077c.6 0 1.236.867 1.645 2.34-.562.177-1.111.392-1.645.643a13.146 13.146 0 00-1.645-.644c.409-1.472 1.033-2.34 1.645-2.34zm-4.982 2.96c.24-.421.84-.508 1.309-.508.498.01.994.081 1.476.21a14.572 14.572 0 00-.276 1.784c-.476.348-.93.728-1.357 1.138a9.449 9.449 0 01-.468-.545c-.696-.853-.948-1.621-.684-2.08zm1.309 6.44c-.469 0-1.08-.087-1.309-.508-.3-.545.108-1.535 1.14-2.638.428.415.886.796 1.369 1.14.055.6.147 1.195.276 1.782-.48.14-.977.215-1.476.224zm3.673 2.452c-.6 0-1.236-.867-1.645-2.34a13.32 13.32 0 001.645-.644 13.32 13.32 0 001.645.644c-.409 1.473-1.045 2.34-1.645 2.34zm4.982-2.96c-.24.421-.84.508-1.309.508a6.197 6.197 0 01-1.476-.21c.129-.588.22-1.184.276-1.784.476-.348.93-.729 1.357-1.14.168.174.324.36.468.533.684.88.936 1.647.684 2.093zm-4.982-4.78c-.966.006-1.745.819-1.74 1.816.004.997.79 1.802 1.756 1.8.966-.002 1.749-.811 1.749-1.808-.007-1-.795-1.808-1.765-1.808zm0 3.158c-.716 0-1.297-.599-1.297-1.338 0-.739.581-1.337 1.297-1.337s1.297.598 1.297 1.337c-.006.737-.583 1.332-1.297 1.338z" fill-rule="evenodd"/>`;
  }
};
export default Qrl;