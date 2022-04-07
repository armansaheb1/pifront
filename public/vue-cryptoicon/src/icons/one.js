const One = {
  symbol: 'one',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle fill="#00AEE9" cx="16" cy="16" r="16"/><path d="M21.143 7c-2.124 0-3.857 1.738-3.913 3.869v4.317c-.392 0-.783.056-1.23.056-.447 0-.839 0-1.23.056v-4.43c0-2.13-1.789-3.868-3.969-3.812-2.068 0-3.745 1.738-3.801 3.813v10.317c.056 2.13 1.789 3.869 3.969 3.813 2.124-.056 3.801-1.738 3.801-3.813v-4.318c.391 0 .783-.056 1.23-.056.447 0 .838 0 1.23-.056v4.374c.056 2.13 1.789 3.869 3.969 3.813C23.323 24.887 25 23.204 25 21.13V10.869C25 8.739 23.267 7 21.143 7zm-10.23 1.57a2.27 2.27 0 012.292 2.299v4.542a13.845 13.845 0 00-3.298.953c-.447.224-.895.448-1.286.785v-6.28c0-1.234 1.006-2.299 2.292-2.299zm2.292 12.616a2.27 2.27 0 01-2.292 2.299 2.27 2.27 0 01-2.292-2.3v-1.008c0-.897.727-1.795 1.957-2.3.838-.392 1.733-.616 2.683-.784l-.056 4.093zm7.938 2.299a2.27 2.27 0 01-2.292-2.3v-4.54a13.844 13.844 0 003.298-.954c.447-.224.894-.449 1.286-.785v6.28a2.306 2.306 0 01-2.292 2.299zm.335-9.252c-.838.393-1.733.617-2.683.785v-4.15a2.27 2.27 0 012.292-2.298 2.27 2.27 0 012.292 2.299v1.01c.056.952-.671 1.793-1.9 2.354z" fill="#FFF"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.143 7c-2.124 0-3.857 1.738-3.913 3.869v4.317c-.392 0-.783.056-1.23.056-.447 0-.839 0-1.23.056v-4.43c0-2.13-1.789-3.868-3.969-3.812-2.068 0-3.745 1.738-3.801 3.813v10.317c.056 2.13 1.789 3.869 3.969 3.813 2.124-.056 3.801-1.738 3.801-3.813v-4.318c.391 0 .783-.056 1.23-.056.447 0 .838 0 1.23-.056v4.374c.056 2.13 1.789 3.869 3.969 3.813C23.323 24.887 25 23.204 25 21.13V10.869C25 8.739 23.267 7 21.143 7zM13.26 17.093l-.056 4.093a2.27 2.27 0 01-2.292 2.299 2.27 2.27 0 01-2.292-2.3v-1.008c0-.897.727-1.795 1.957-2.3.838-.392 1.733-.616 2.683-.784zm10.174-2.187v6.28a2.306 2.306 0 01-2.292 2.299 2.27 2.27 0 01-2.292-2.3v-4.54a13.844 13.844 0 003.298-.954c.447-.224.894-.449 1.286-.785zM10.913 8.57a2.27 2.27 0 012.292 2.299v4.542a13.845 13.845 0 00-3.298.953c-.447.224-.895.448-1.286.785v-6.28c0-1.234 1.006-2.299 2.292-2.299zm10.174 0a2.27 2.27 0 012.292 2.299v1.01c.056.952-.671 1.793-1.9 2.354-.84.393-1.734.617-2.684.785v-4.15a2.27 2.27 0 012.292-2.298z"/>`;
  }
};
export default One;
