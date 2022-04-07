const Kmd = {
  symbol: 'kmd',
  color: '#000',
  colorIcon() {
    return `<path d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48z" fill="#2B6680"/><g fill="#fff"><path d="M15 48a33 33 0 1066 .127v-.253a33.175 33.175 0 00-.903-7.541 3.54 3.54 0 10-6.886 1.64 25.934 25.934 0 11-19.197-19.186 3.54 3.54 0 001.64-6.886A32.996 32.996 0 0015 48"/><path d="M64.68 23.862c-.048.045-.079.098-.124.146a5.218 5.218 0 00-1.402 3.12v.561c0 .13-.028.255-.042.384a9.425 9.425 0 01-12.235 8.053 12.14 12.14 0 00-11.148 2.91c-.12.112-.252.207-.37.325A12.21 12.21 0 0056.627 56.63c.505-.512.963-1.07 1.368-1.665a12.205 12.205 0 001.868-9.813 9.374 9.374 0 01-.18-.665c0-.033-.02-.064-.028-.098a9.428 9.428 0 018.397-11.515c.07 0 .138-.02.208-.022.199 0 .398-.023.597-.023h.048a5.224 5.224 0 003.224-1.517c.205-.212.392-.441.56-.684a5.26 5.26 0 00-8.007-6.762"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" fill-rule="evenodd" clip-rule="evenodd" d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48zM15 48a33 33 0 1066 .127v-.253a33.175 33.175 0 00-.903-7.541 3.54 3.54 0 10-6.886 1.64 25.934 25.934 0 11-19.197-19.186 3.54 3.54 0 001.64-6.886A32.996 32.996 0 0015 48zm49.61-24.056a.66.66 0 01.07-.08l.002.002a5.26 5.26 0 018.008 6.763 5.57 5.57 0 01-.561.684 5.223 5.223 0 01-3.224 1.517h-.048c-.1 0-.2.005-.299.011-.1.006-.199.011-.298.011a1.006 1.006 0 00-.096.011.73.73 0 01-.112.012 9.428 9.428 0 00-8.397 11.515c.003.012.008.024.013.036.007.02.015.04.015.062.053.224.11.443.18.664a12.205 12.205 0 01-1.868 9.813 11.954 11.954 0 01-1.368 1.666A12.21 12.21 0 1139.36 39.362c.066-.066.138-.126.209-.185.054-.045.109-.091.161-.14a12.14 12.14 0 0111.148-2.91 9.422 9.422 0 0012.235-8.052l.017-.13a1.68 1.68 0 00.025-.254v-.561a5.218 5.218 0 011.402-3.12c.02-.022.037-.044.054-.066z" fill="#000"/>`;
  }
};
export default Kmd;