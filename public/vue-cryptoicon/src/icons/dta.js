const Dta = {
  symbol: 'dta',
  color: '#000',
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#74d269" r="16"/><path d="M24.963 14.512h.02L25 19.478 13.823 26l-2.992-1.682v.002l-.019-.012L8 22.505V9.484l3.073-1.813.006.003L13.792 6l11.15 6.563zm-3.275 3.112l-2.339-1.339-7.807 4.594 2.292 1.363zm-2.866-1.64l-4.816-2.758-.021 5.681zm-4.814-3.366l7.742 4.531v-2.705l-7.732-4.515zM10.82 23.57l.03-2.713-.018.011v-9.572l-2.347-1.4v12.28zm.416-3.001l2.345-1.418V9.896l-2.345 1.401zm2.881 2.031l-.047 2.836L24.506 19.3l.03-2.82zm7.793-8.584l2.429-1.386-10.455-6.105-2.406 1.392z" fill="#fff" fill-rule="nonzero"/></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M24.963 14.512l-.02-1.949L13.791 6l-2.713 1.674-.006-.003L8 9.484v13.022l2.811 1.801h.001l.019.013v-.002L13.823 26 25 19.479l-.017-4.968zm-3.275 3.112l-7.854 4.618-2.292-1.363 7.807-4.594zm-2.866-1.64l-4.837 2.923.021-5.681zm-4.814-3.366l.01-2.689 7.732 4.515v2.705zM10.82 23.57l-2.334-1.395V9.896l2.346 1.401v9.572l.018-.01zm.416-3.001v-9.273l2.345-1.401v9.256zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.884-9.399l10.42-6.12-.03 2.82-10.437 6.136zm7.793-8.584l-10.432-6.1 2.406-1.39 10.455 6.104z" fill-rule="evenodd"/>`;
  }
};
export default Dta;