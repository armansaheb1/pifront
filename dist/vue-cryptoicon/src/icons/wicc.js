const Wicc = {
  symbol: 'wicc',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#5783CB"/><g fill="#FFF"><path d="M15.24 4h1.24a11.584 11.584 0 017.28 3.04c.34.22.34.76-.06.9-.34.08-.6-.22-.86-.4a10.74 10.74 0 00-14.8 1.72 10.5 10.5 0 0011.6 16.54 10.8 10.8 0 007.04-8c.176-.729.29-1.472.34-2.22a.422.422 0 01.84.08l-.04 1.24a11.66 11.66 0 01-3.44 7.66 11.92 11.92 0 01-7.8 3.44H15.4A12.02 12.02 0 014 16.56v-1.12A12.06 12.06 0 0115.24 4z"/><path d="M25 10.22c.8-.88 2.46-.4 2.64.78.26 1.06-.76 1.96-1.8 1.88-1.38 1.4-2.48 3.06-3.42 4.8-.38.52.1 1.2-.2 1.74-.36 1.06-1.92 1.28-2.6.4-.5-.56-.36-1.34-.1-1.96a8.084 8.084 0 00-1.5-2.14l-.6.02a19.28 19.28 0 00-3.22 4.86c.14.54.24 1.18-.14 1.66-.5.82-1.82.9-2.44.14-.46-.52-.4-1.26-.16-1.88a18.8 18.8 0 00-2.92-5.2c-.78-.04-1.6-.5-1.7-1.32-.26-1.12 1.02-2.2 2.08-1.7.94.34 1.2 1.54.74 2.36a19.14 19.14 0 003.14 5.28A16.954 16.954 0 0016.26 15c-.16-.54-.26-1.16.1-1.66.54-.88 1.98-.9 2.54-.02.42.54.28 1.26.04 1.84a8.4 8.4 0 001.46 2.16l.6-.04c1.46-1.54 2.8-3.24 3.7-5.18-.1-.64-.22-1.4.32-1.88H25z"/></g></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.76-28A12.06 12.06 0 004 15.44v1.12A12.02 12.02 0 0015.4 28h1.18a11.92 11.92 0 007.8-3.44 11.66 11.66 0 003.44-7.66l.04-1.24a.422.422 0 00-.84-.08c-.05.748-.164 1.491-.34 2.22a10.8 10.8 0 01-7.04 8A10.5 10.5 0 018.04 9.26a10.74 10.74 0 0114.8-1.72c.26.18.52.48.86.4.4-.14.4-.68.06-.9A11.584 11.584 0 0016.48 4h-1.24zM25 10.22h.02c-.54.48-.42 1.24-.32 1.88-.9 1.94-2.24 3.64-3.7 5.18l-.6.04a8.4 8.4 0 01-1.46-2.16c.24-.58.38-1.3-.04-1.84-.56-.88-2-.86-2.54.02-.36.5-.26 1.12-.1 1.66a16.954 16.954 0 01-3.46 4.94 19.14 19.14 0 01-3.14-5.28c.46-.82.2-2.02-.74-2.36-1.06-.5-2.34.58-2.08 1.7.1.82.92 1.28 1.7 1.32a18.8 18.8 0 012.92 5.2c-.24.62-.3 1.36.16 1.88.62.76 1.94.68 2.44-.14.38-.48.28-1.12.14-1.66a19.28 19.28 0 013.22-4.86l.6-.02a8.084 8.084 0 011.5 2.14c-.26.62-.4 1.4.1 1.96.68.88 2.24.66 2.6-.4.3-.54-.18-1.22.2-1.74.94-1.74 2.04-3.4 3.42-4.8 1.04.08 2.06-.82 1.8-1.88-.18-1.18-1.84-1.66-2.64-.78z"/>`;
  }
};
export default Wicc;