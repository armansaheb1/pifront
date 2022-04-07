const Via = {
  symbol: 'via',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#565656" r="16"/><path d="M11.133 14.296H8.005v-1.719h2.47L8.58 7.627 10.144 7l3.55 9.267 4.601.03L21.856 7l1.565.627-1.896 4.95h2.47v1.72h-3.128l-.771 2.01 3.904.025-.01 1.719-4.55-.029L16 27l-3.456-9.021L8 17.949l.01-1.718 3.874.025zm3.22 3.694L16 22.288l1.638-4.277z" fill="#fff" fill-rule="nonzero"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M11.133 14.296l.751 1.96-3.874-.025L8 17.95l4.544.029L16 27l3.44-8.978 4.55.029.01-1.719-3.904-.024.77-2.012h3.129v-1.719h-2.47l1.896-4.95L21.856 7l-3.56 9.296-4.602-.029L10.144 7l-1.565.627 1.896 4.95h-2.47v1.72zm3.22 3.694l3.285.02L16 22.289zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fill-rule="evenodd"/>`;
  }
};
export default Via;
