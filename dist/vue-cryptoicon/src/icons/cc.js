const Cc = {
  symbol: 'cc',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#36B0F3" fill-rule="nonzero"/><g fill="#FFF"><path d="M14.09 4.261c.8-.16 1.615-.229 2.43-.206.508 0 1.016.046 1.517.137.975.134 1.915.444 2.832.792.667.298 1.366.578 1.908 1.084.151.11.07.33-.064.417-.31.199-.683.256-1.037.334-1.596.274-3.22.397-4.788.822-.703.158-1.379.416-2.048.683-1.243.556-2.386 1.373-3.213 2.465a16.31 16.31 0 00-.456.705c-.131.255-.263.51-.37.777-.08.191-.154.384-.224.578-.141.413-.21.844-.315 1.268-.033.278-.052.558-.11.833-.037.63-.019 1.26-.014 1.89 0 .21.057.416.06.627.003.194.03.387.082.574.1.525.222 1.057.445 1.548.289.697.739 1.35 1.379 1.765.531.394 1.188.562 1.832.662.86.112 1.733.01 2.58-.144.443-.08.883-.18 1.32-.297.277-.078.562-.13.836-.223a2.08 2.08 0 01.318-.03c-.343.306-.688.61-1.076.857-1.322.852-2.859 1.296-4.392 1.582-.693.142-1.398.226-2.096.346-.795.115-1.619.21-2.336.6-.214.15-.38.354-.529.566-.045.092-.13 0-.18-.033-.163-.187-.372-.324-.549-.497a20.82 20.82 0 01-.556-.556c-.291-.339-.59-.673-.847-1.038-.512-.694-.965-1.437-1.297-2.233l-.058-.026c-.042-.229-.158-.431-.235-.648a10.585 10.585 0 01-.44-1.46 3.77 3.77 0 01-.103-.462 2.268 2.268 0 01-.096-.54c-.098-.43-.08-.874-.142-1.308 0-.362-.024-.727.02-1.088.048-.3.028-.607.09-.906.061-.243.049-.497.126-.736a9.775 9.775 0 01.42-1.572c.072-.188.137-.378.204-.567.04-.087.073-.176.1-.267l.053-.063a2.97 2.97 0 01.247-.54 8.124 8.124 0 01.325-.612c.034-.071.072-.14.112-.21.63-.987 1.366-1.922 2.252-2.694a12.59 12.59 0 013.729-2.299 11.95 11.95 0 012.355-.657z"/><path d="M23.241 7.39c.22-.128.371-.335.523-.532a12.003 12.003 0 011.3 16.95c-1.837 2.158-4.475 3.624-7.286 4.013-1.293.19-2.61.14-3.902-.037-.99-.14-1.958-.41-2.877-.805-.5-.22-.997-.478-1.388-.868-.101-.088-.165-.234-.098-.361.1-.155.28-.232.45-.287.485-.14.984-.222 1.483-.299.902-.157 1.813-.258 2.708-.455 1.487-.321 2.974-.776 4.26-1.61.874-.558 1.644-1.284 2.211-2.154.814-1.228 1.19-2.699 1.28-4.157.045-1.085.02-2.18-.207-3.246-.207-.92-.57-1.847-1.257-2.517-.525-.539-1.24-.874-1.978-1.002-1.225-.229-2.476-.008-3.676.262-.562.133-1.116.3-1.684.41.808-.761 1.797-1.305 2.836-1.677.597-.221 1.217-.368 1.834-.513 1.352-.304 2.736-.42 4.1-.654.476-.1.96-.196 1.368-.461z"/></g></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM14.09 4.261c-.805.138-1.594.358-2.354.657a12.59 12.59 0 00-3.729 2.3c-.886.77-1.622 1.706-2.252 2.693-.04.07-.078.139-.112.21a8.124 8.124 0 00-.326.611 2.97 2.97 0 00-.246.541l-.053.063c-.027.091-.06.18-.1.267-.067.19-.132.38-.204.567-.039.105-.072.21-.105.315a9.775 9.775 0 00-.315 1.257c-.077.239-.065.493-.126.736-.062.299-.042.606-.09.906-.044.36-.02.726-.02 1.088.063.434.044.878.142 1.308.01.183.042.365.096.54.025.156.059.31.103.463.111.496.258.984.44 1.459.077.217.193.42.235.648l.058.026c.332.796.785 1.54 1.297 2.233.257.365.556.7.847 1.038.182.19.368.373.556.556.177.173.386.31.55.497.05.033.134.125.18.033.149-.212.314-.416.528-.566.717-.39 1.54-.485 2.336-.6.698-.12 1.403-.204 2.096-.346 1.533-.286 3.07-.73 4.392-1.582.388-.247.733-.551 1.076-.856a2.08 2.08 0 00-.318.03c-.274.092-.559.144-.837.222-.436.116-.876.217-1.32.297-.846.154-1.72.256-2.58.144-.643-.1-1.3-.268-1.831-.662-.64-.415-1.09-1.068-1.38-1.765-.222-.491-.343-1.023-.444-1.548a2.263 2.263 0 01-.082-.574c-.003-.21-.06-.417-.06-.627-.005-.63-.023-1.26.015-1.89.057-.275.076-.555.11-.833.104-.424.173-.855.314-1.268.07-.194.144-.387.223-.578.108-.267.24-.522.37-.777.146-.24.3-.474.457-.705.827-1.092 1.97-1.909 3.213-2.465.669-.267 1.345-.525 2.048-.683 1.567-.425 3.192-.548 4.788-.822.354-.078.726-.135 1.037-.334.134-.087.215-.307.064-.417-.542-.506-1.241-.786-1.908-1.084-.917-.348-1.857-.658-2.832-.792a8.403 8.403 0 00-1.518-.137c-.814-.023-1.63.046-2.428.206zm9.151 3.129c-.409.265-.892.361-1.369.461-1.363.234-2.747.35-4.099.654-.617.145-1.237.292-1.834.513-1.039.372-2.028.916-2.836 1.676.568-.108 1.122-.276 1.684-.409 1.2-.27 2.451-.49 3.676-.262.738.128 1.453.463 1.978 1.002.687.67 1.05 1.597 1.257 2.517.227 1.066.252 2.16.207 3.246-.09 1.458-.466 2.93-1.28 4.157-.567.87-1.337 1.596-2.21 2.153-1.287.835-2.774 1.29-4.261 1.61-.895.198-1.806.299-2.708.456-.499.077-.998.158-1.484.299-.168.055-.349.132-.45.287-.066.127-.002.273.099.361.39.39.888.648 1.388.868.92.395 1.887.666 2.877.805 1.291.177 2.61.228 3.902.037 2.811-.389 5.449-1.855 7.287-4.012a12.003 12.003 0 00-1.301-16.951c-.152.197-.304.404-.523.532z"/>`;
  }
};
export default Cc;