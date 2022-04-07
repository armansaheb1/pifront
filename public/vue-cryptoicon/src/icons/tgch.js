const Tgch = {
  symbol: 'tgch',
  color: '#000',
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#434247"/><g fill="#FFF"><path d="M16 4a11.911 11.911 0 100 23.823c6.579 0 11.911-5.333 11.911-11.912C27.911 9.333 22.58 4 16 4m0 23.341c-6.318 0-11.44-5.122-11.44-11.44C4.56 9.585 9.683 4.463 16 4.463s11.44 5.122 11.44 11.44c0 6.317-5.122 11.439-11.44 11.439"/><path d="M17.308 17.082h3.02v4.456c0 .442-.453.678-.885.905-.423.226-1.112.177-2.273.177h-1.416c-2.174.049-2.784-.118-3.305-.345-.521-.236-.787-.57-.787-1.003v-4.19h-1.564v4.721c0 .256.128.551.325.817.226.305.197.393.688.639.443.226.886.403 1.682.502.62.078.512.059 1.614.078h2.616c1.967-.039 2.37.099 3.54-.491.955-.473 1.28-1.023 1.348-1.378v-6.422h-4.593v1.534m-4.082-9.089c-.797.05-1.456.296-1.967.492-.521.197-.63.433-.846.689-.2.232-.312.529-.315.836v5.233h1.574V10.51c0-.403.246-.727.728-.963.492-.246 1.21-.364 1.879-.364h3.068c1.17 0 1.8-.02 2.164.196.374.236.817.443.817.886v1.249h1.573V9.833c-.029-.217-.265-.836-1.377-1.358-1.003-.472-1.327-.501-2.901-.501"/></g></g>`;
  },
  plainIcon: c => {
    return `<path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28a11.911 11.911 0 100 23.823c6.579 0 11.911-5.333 11.911-11.912C27.911 9.333 22.58 4 16 4zm0 23.341c-6.318 0-11.44-5.122-11.44-11.44C4.56 9.585 9.683 4.463 16 4.463s11.44 5.122 11.44 11.44c0 6.317-5.122 11.439-11.44 11.439zm1.308-10.259h3.02v4.456c0 .442-.453.678-.885.905-.423.226-1.112.177-2.273.177h-1.416c-2.174.049-2.784-.118-3.305-.345-.521-.236-.787-.57-.787-1.003v-4.19h-1.564v4.721c0 .256.128.551.325.817.226.305.197.393.688.639.443.226.886.403 1.682.502.62.078.512.059 1.614.078h2.616c1.967-.039 2.37.099 3.54-.491.955-.473 1.28-1.023 1.348-1.378v-6.422h-4.593v1.534h-.01zm-4.072-9.089c-.797.05-1.456.296-1.967.492-.521.197-.63.433-.846.689-.2.232-.312.529-.315.836v5.233h1.574V10.51c0-.403.246-.727.728-.963.492-.246 1.21-.364 1.879-.364h3.068c1.17 0 1.8-.02 2.164.196.374.236.817.443.817.886v1.249h1.573V9.833c-.029-.217-.265-.836-1.377-1.358-1.003-.472-1.327-.501-2.901-.501l-4.397.02z"/>`;
  }
};
export default Tgch;
