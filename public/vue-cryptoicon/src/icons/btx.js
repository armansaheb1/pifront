const Btx = {
  symbol: 'btx',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#FB2EA3"/><path fill="#FFF" fill-rule="nonzero" d="M22.632 14.02c-.227 1.535-1.078 2.278-2.207 2.538 1.55.807 2.34 2.046 1.588 4.192-.933 2.666-3.149 2.89-6.096 2.333L15.2 25.95l-1.728-.431.706-2.828a65.74 65.74 0 01-1.378-.358l-.708 2.842-1.727-.43.716-2.873c-.404-.103-.814-.213-1.233-.318l-2.249-.56.858-1.98s1.274.34 1.256.314c.49.121.707-.198.793-.41l1.13-4.532.183.045a1.432 1.432 0 00-.18-.057l.806-3.235c.021-.368-.105-.83-.805-1.006.027-.018-1.256-.312-1.256-.312l.46-1.846 2.384.595-.002.01c.358.088.728.173 1.104.259L15.039 6l1.728.43-.694 2.784c.463.106.93.212 1.384.326l.69-2.765 1.728.43-.708 2.84c2.183.752 3.779 1.879 3.465 3.975zm-3.95 5.538c.56-2.238-3.198-2.817-4.37-3.11l-.949 3.805c1.172.291 4.786 1.452 5.32-.695zm.535-5.569c.508-2.037-2.634-2.49-3.61-2.734l-.86 3.451c.975.244 3.983 1.236 4.47-.717zm5.03 7.629a.642.642 0 00-.476.127.754.754 0 00-.25.432.983.983 0 00-.02.285.67.67 0 00.102.306c.06.1.156.194.286.282.13.087.31.157.54.21.124.03.252.044.383.043.132 0 .254-.021.366-.063a.726.726 0 00.47-.541.688.688 0 00-.07-.525c-.092-.154-.243-.272-.454-.354l.154-.666c.38.153.646.372.8.655.154.284.186.621.096 1.011a1.586 1.586 0 01-.265.6 1.367 1.367 0 01-.993.554 1.98 1.98 0 01-.642-.047 2.173 2.173 0 01-.615-.24 1.498 1.498 0 01-.453-.4 1.348 1.348 0 01-.238-.545 1.61 1.61 0 01.025-.681 1.87 1.87 0 01.183-.484c.081-.148.18-.273.299-.375.118-.102.254-.176.408-.222.155-.047.327-.056.518-.029l-.154.667zm2.692-2.113a1.69 1.69 0 01-.269.619c-.123.17-.27.304-.44.403a1.45 1.45 0 01-.572.182 1.993 1.993 0 01-.667-.046 1.967 1.967 0 01-.614-.25 1.45 1.45 0 01-.434-.414 1.414 1.414 0 01-.22-.556 1.69 1.69 0 01.03-.673 1.69 1.69 0 01.269-.619c.124-.17.27-.305.441-.403a1.45 1.45 0 01.572-.182c.21-.023.43-.008.66.045a2 2 0 01.62.25c.18.114.324.252.434.415.11.163.183.348.22.555a1.69 1.69 0 01-.03.674zm-2.624-2.798l.145-.625.584.135.003-.012a.692.692 0 01-.213-.17 1.14 1.14 0 01-.26-.555.817.817 0 01.01-.312 1.484 1.484 0 01.076-.247l.643.148a3.249 3.249 0 00-.053.139 1.233 1.233 0 00-.042.141.751.751 0 00.132.64 1 1 0 00.284.25c.119.073.262.129.43.168l1.438.332-.154.666-3.023-.698zm2.28-2.19c.116.028.233.037.35.03a.858.858 0 00.32-.084.737.737 0 00.255-.206.851.851 0 00.156-.345.822.822 0 00-.017-.5.763.763 0 00-.315-.353l.145-.631a1.29 1.29 0 01.755 1.119c.01.16-.004.322-.041.486-.055.238-.143.44-.263.605a1.34 1.34 0 01-1.004.56 2.096 2.096 0 01-1.252-.296 1.605 1.605 0 01-.442-.41 1.435 1.435 0 01-.241-.54c-.045-.198-.04-.41.011-.637a1.39 1.39 0 01.297-.606 1.46 1.46 0 01.503-.38 1.64 1.64 0 01.627-.14c.226-.008.448.028.668.107l-.513 2.222zm-.182 4.867a.785.785 0 00-.188-.733 1.1 1.1 0 00-.306-.234 1.57 1.57 0 00-.775-.18 1.061 1.061 0 00-.377.077.785.785 0 00-.487.577.785.785 0 00.184.732c.083.094.185.171.306.234a1.582 1.582 0 00.775.18 1.1 1.1 0 00.378-.077.785.785 0 00.49-.576zm.102-6.523a1.103 1.103 0 00-.32-.003.773.773 0 00-.519.287.822.822 0 00-.15.624c.02.105.057.2.113.285a.91.91 0 00.517.363l.359-1.556z"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.632-17.98c.314-2.096-1.282-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.384-.326l.694-2.783L15.039 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313L7.6 20.993l2.25.561c.418.105.828.215 1.232.318l-.716 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.716-2.866c2.947.558 5.163.333 6.096-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.147.986-5.319.695l.95-3.805c1.17.293 4.928.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.976.243 4.118.696 3.61 2.733zm5.03 7.629l.154-.667a1.192 1.192 0 00-.518.029c-.154.046-.29.12-.408.222a1.351 1.351 0 00-.3.375 1.87 1.87 0 00-.182.484 1.61 1.61 0 00-.025.68c.041.205.12.387.238.545.117.159.268.292.453.4.184.109.39.189.615.241.222.051.436.067.642.047a1.367 1.367 0 00.993-.553c.122-.163.21-.363.265-.601.09-.39.058-.727-.096-1.01-.154-.284-.42-.503-.8-.656l-.154.666c.211.082.362.2.454.354.092.155.115.33.07.525a.726.726 0 01-.47.54 1.05 1.05 0 01-.366.064c-.131 0-.26-.014-.384-.042a1.628 1.628 0 01-.54-.211.942.942 0 01-.285-.282.67.67 0 01-.102-.306c-.007-.105 0-.2.02-.285a.754.754 0 01.25-.432.642.642 0 01.476-.127zm2.692-2.113a1.69 1.69 0 00.03-.674 1.414 1.414 0 00-.22-.555 1.45 1.45 0 00-.434-.414 1.986 1.986 0 00-.62-.251 1.967 1.967 0 00-.66-.045 1.45 1.45 0 00-.572.182c-.17.098-.317.233-.441.403a1.69 1.69 0 00-.269.619 1.69 1.69 0 00-.03.673c.037.208.11.393.22.556.11.163.255.3.434.414.18.113.384.196.614.25.234.054.456.069.667.046a1.45 1.45 0 00.571-.182 1.43 1.43 0 00.441-.403 1.69 1.69 0 00.27-.619zm-2.624-2.798l3.023.698.154-.666-1.438-.332a1.441 1.441 0 01-.43-.167 1 1 0 01-.284-.25.751.751 0 01-.132-.64c.01-.048.025-.095.042-.142l.053-.139-.643-.148-.033.088c-.01.028-.025.081-.043.16a.817.817 0 00-.01.311 1.14 1.14 0 00.26.556.692.692 0 00.213.169l-.003.012-.584-.135-.145.625zm2.28-2.19l.512-2.22a1.775 1.775 0 00-.668-.109 1.64 1.64 0 00-.627.142c-.192.087-.36.213-.503.38a1.39 1.39 0 00-.297.605 1.429 1.429 0 00-.011.638c.044.199.125.379.241.539.117.16.264.297.442.41a2.096 2.096 0 001.253.295 1.34 1.34 0 001.004-.56c.12-.165.207-.366.262-.604.037-.164.051-.326.041-.486a1.373 1.373 0 00-.105-.452 1.294 1.294 0 00-.65-.667l-.145.63a.766.766 0 01.315.354.822.822 0 01.017.5.851.851 0 01-.156.345.737.737 0 01-.254.206.858.858 0 01-.321.083 1.191 1.191 0 01-.35-.028zm-.182 4.867a.785.785 0 01-.49.576 1.1 1.1 0 01-.378.076 1.57 1.57 0 01-.775-.179 1.061 1.061 0 01-.306-.234.785.785 0 01-.185-.732.785.785 0 01.488-.577c.115-.047.241-.073.377-.076a1.582 1.582 0 01.775.179 1.1 1.1 0 01.306.234.785.785 0 01.188.733zm.102-6.523l-.36 1.556a.91.91 0 01-.516-.363.748.748 0 01-.113-.285.822.822 0 01.15-.624.773.773 0 01.52-.287c.105-.014.212-.013.319.003z"/>`;
  }
};
export default Btx;
