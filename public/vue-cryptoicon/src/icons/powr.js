const Powr = {
  symbol: 'powr',
  color: '#000',
  colorIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#05BCA9" fill-rule="nonzero"/><path fill="#FFF" d="M27.995 15.954a.206.206 0 01-.114.231l-.076.036-2.306 2.312.894 3.345a.206.206 0 01-.145.252l-3.209.861-.885 3.31a.205.205 0 01-.25.146l-3.39-.91-2.398 2.403a.204.204 0 01-.29 0l-2.369-2.375-3.282.882a.204.204 0 01-.25-.145l-.886-3.31-3.208-.862a.205.205 0 01-.145-.252l.865-3.237-2.49-2.497a.206.206 0 010-.29l2.421-2.429-.865-3.236a.206.206 0 01.146-.252l3.355-.902.874-3.27a.206.206 0 01.252-.146l3.174.853 2.408-2.414a.21.21 0 01.29 0L18.553 6.5l3.282-.882a.205.205 0 01.251.146l.023.086a.203.203 0 01.011.04l.84 3.144 3.356.902c.11.03.174.142.145.252l-.894 3.344 2.257 2.263a.205.205 0 01.171.158zm-2.619 2.12l1.346-1.348-1.517.707.171.642zm.491 3.427l-.703-2.632-1.397 1.4v.001l2.1 1.231zm-2.21-.82l-.495 1.852 2.505-.673-2.01-1.178zm-1.798 5.136l.723-2.703-1.974.53 1.251 2.173zm-2.504-1.125l-.507.509 1.989.534-1.482-1.043zm-3.179 2.606l1.88-1.885-1.88-.505v2.39zm-.41-2.353l-1.851.497 1.85 1.856v-2.353zm-5.189.968l2.546-.683-1.364-1.368-1.182 2.051zm-1.08-2.799l.565 2.114.17-1.916-.735-.198zm-3.09-1.255l2.51.674-.5-1.867-2.01 1.193zm1.807-1.55l-1.328-1.332-.674 2.52 2.002-1.188zm-3.48-4.07l1.94 1.944.519-1.944H4.734zm2.08-1.575l-.209-.78-1.634 1.638 1.843-.858zm-.672-4.102l.675 2.527 1.35-1.353-2.025-1.174zm2.338.86l.516-1.928-2.65.712 2.121 1.229.013-.013zm1.772-5.04l-.676 2.53 1.847-.496-1.171-2.033zm2.342.916l.489-.49-1.916-.515 1.427 1.005zM15.766 4.7l-1.89 1.895 1.89.508V4.7zm.41 2.44l1.92-.516-1.92-1.924v2.44zm5.396-1.024l-2.684.72 1.438 1.443 1.246-2.163zm.303 2.628l.628.168-.483-1.807-.145 1.639zm3.85 1.46l-2.642-.71.51 1.912 2.131-1.203zM23.8 11.761l1.432 1.435.707-2.643-2.139 1.208zm3.442 4.031l-1.797-1.801-.482 1.801h2.279zm-2.366.411l.22.825 1.771-.825h-1.99zm-.31 1.072l.153-.07-.067-.25-.085.32zm-.138.518l-.45 1.681 1.063-1.065-.214-.802-.399.186zm-1.241 3.057l-2.283 2.288 1.8-.483.483-1.805zm-2.867 2.293l3.079-3.087.544-2.037-5.183 2.415 1.56 2.709zm-.088.67l-.582.583 1.544 1.087-.962-1.67zm-1.091.225l.168.118.223-.224-.391.106zm-.517.138l-1.792.482 1.559.419.624-.626-.39-.275zm-3.377.482l-2.887-.776 1.22 1.224 1.667-.448zM10.69 22.79l-.02.213.317.085-.297-.298zm-.379-.38l-1.369-1.37.432 1.617.895.24.042-.485zM8.15 19.663l-.724-2.708-.418 1.563 1.142 1.145zm-1.025-3.835l-.204-.761-1.633.76h1.837zm.464-1.073l-.29.136.127.476.163-.612zm.139-.517l.54-2.022-1.328 1.332.251.94.537-.25zM9.06 10.84l1.859-1.863-1.466.394-.393 1.47zm2.684-2.69l.556-.557-1.476-1.039.92 1.596zm1.16-.132l-.263-.185-.35.35.613-.165zm.517-.139l1.826-.49-1.706-.458-.606.606.486.342zm3.41-.49l2.77.744-1.17-1.173-1.6.429zm4.577 1.974l.028-.312-.463-.124.435.436zm.378.38l1.282 1.285-.443-1.657-.787-.212-.052.584zm2.074 2.66l.792 2.964.458-1.711-1.25-1.252zm-5.774 6.861l.468.813 5.528-2.575.347-1.298h-3.215l-.163 1.834a.205.205 0 01-.38.087l-.998-1.69-1.587 2.829zm-.784 1.397l.879-.41-.329-.57-.55.98zm-3.486-.37l4.887 3.44 1.283-.345-1.6-2.777-1.488.694a.205.205 0 01-.265-.288l.933-1.663-3.23.036-.52.902zm-.206.357l-1.57 2.724 4 1.074 2.146-.577-4.576-3.221zm.249-1.255l-1.297.015.917.645.38-.66zm-2.59-3.154l-.532 6.018.934.935 1.602-2.782-1.468-1.032a.206.206 0 01.116-.374l1.984-.023-1.62-2.742H11.27zm-.41 0h-3.2l1.07 4.005 1.63 1.633.5-5.638zm1.182-.411l-.639-1.082-.096 1.082h.735zm1.45-3.822L8.075 14.53l-.347 1.298h3.167l.155-1.754a.206.206 0 01.38-.087l1.003 1.697L14 12.891l-.51-.885zm-.206-.357l-1.63-2.829-2.807 2.815-.635 2.377 5.072-2.363zm5.007.162l-4.95-3.485-1.296.349 1.612 2.8 1.6-.746a.205.205 0 01.265.288l-.936 1.668 3.222-.036.483-.838zm.206-.358l1.591-2.763-4.05-1.088-2.18.586 4.639 3.265zm-.212 1.19l1.17-.012-.827-.583-.343.596zm2.516 3.561h-.79l.687 1.162.103-1.162zm-6.568-3.73l.62-1.103-.99.461.37.643zm3.563 6.467l1.634-2.914-1.745-2.954-.005-.011-3.327.037-1.68 2.994 1.705 2.883 3.398-.038c.007 0 .013.002.02.003zm3.942-8.664l-.489 5.516h3.092l-1.062-3.97-1.541-1.546zm-.9 5.516l.522-5.896-.947-.949-1.58 2.742 1.38.97a.206.206 0 01-.116.375l-1.945.021 1.617 2.737h1.068zm.633-7.157l.16-1.803-.92 1.598.76.205zM10.634 23.42l-.165 1.858.95-1.648-.785-.21z"/></g>`;
  },
  plainIcon: c => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm11.995-16.046a.205.205 0 00-.17-.158l-2.258-2.263.894-3.344a.206.206 0 00-.145-.252l-3.356-.902-.84-3.143a.203.203 0 00-.01-.04l-.024-.087a.205.205 0 00-.251-.146l-3.282.882-2.437-2.443a.21.21 0 00-.29 0l-2.408 2.414-3.174-.853a.205.205 0 00-.252.146l-.874 3.27-3.355.902a.205.205 0 00-.146.252l.865 3.236-2.422 2.428a.206.206 0 000 .291l2.49 2.497-.864 3.237a.206.206 0 00.145.252l3.208.861.885 3.31a.205.205 0 00.251.146l3.282-.882 2.369 2.375a.204.204 0 00.29 0l2.397-2.404 3.39.911a.204.204 0 00.251-.145l.885-3.31 3.209-.862a.206.206 0 00.145-.252l-.894-3.345 2.306-2.312.076-.036a.206.206 0 00.114-.23zm-2.619 2.12l-.171-.641 1.517-.707zm.491 3.427l-2.1-1.23v-.001l1.397-1.401zm-2.21-.82l2.01 1.179-2.505.673zm-1.798 5.136l-1.25-2.173 1.973-.53zm-2.504-1.125l1.482 1.043-1.989-.534zm-3.179 2.606v-2.39l1.88.505zm-.41-2.353v2.353l-1.851-1.856zm-5.189.968l1.182-2.05 1.364 1.367zm-1.08-2.799l.735.198-.17 1.916zm-3.09-1.255l2.01-1.193.5 1.867zm1.807-1.55l-2.002 1.188.674-2.52zm-3.48-4.07h2.459l-.52 1.944zm2.08-1.575l-1.843.858 1.634-1.638zm-.672-4.102l2.025 1.174-1.35 1.353zm2.338.86l-.013.013-2.12-1.23 2.649-.711zm1.772-5.04l1.171 2.034-1.847.496zm2.342.916l-1.427-1.005 1.916.515zM15.766 4.7v2.403l-1.89-.508zm.41 2.44V4.7l1.92 1.924zm5.396-1.024l-1.246 2.163-1.438-1.442zm.303 2.628l.145-1.639.483 1.807zm3.85 1.46l-2.131 1.202-.511-1.912zM23.8 11.761l2.139-1.208-.707 2.643zm3.442 4.031h-2.279l.482-1.801zm-2.366.411h1.991l-1.77.825zm-.31 1.072l.086-.32.067.25zm-.138.518l.399-.186.214.802-1.062 1.065zm-1.241 3.057l-.483 1.805-1.8.483zm-2.867 2.293l-1.56-2.709 5.183-2.415-.544 2.037zm-.088.67l.962 1.67-1.544-1.087zm-1.091.225l.391-.106-.223.224zm-.517.138l.39.275-.623.626-1.56-.42zm-3.377.482l-1.667.448-1.22-1.224zM10.69 22.79l.297.298-.316-.085zm-.379-.38l-.042.485-.895-.24-.432-1.617zM8.15 19.663l-1.142-1.145.418-1.563zm-1.025-3.835H5.288l1.633-.761zm.464-1.073l-.163.612-.127-.476zm.139-.517l-.537.25-.251-.94 1.328-1.332zM9.06 10.84l.393-1.469 1.466-.394zm2.684-2.69l-.92-1.596L12.3 7.593zm1.16-.132l-.613.165.35-.35zm.517-.139l-.486-.342.606-.606 1.706.458zm3.41-.49l1.6-.43 1.17 1.174zm4.577 1.974l-.435-.436.463.124zm.378.38l.052-.584.787.212.443 1.657zm2.074 2.66l1.25 1.253-.458 1.71zm-5.774 6.861l1.587-2.828.998 1.689a.205.205 0 00.38-.087l.163-1.834h3.215l-.347 1.298-5.528 2.575zm-.784 1.397l.55-.98.329.57zm-3.486-.37l.52-.903 3.23-.036-.933 1.663a.206.206 0 00.265.288l1.489-.694 1.599 2.777-1.283.344zm-.206.357l4.576 3.221-2.147.577-3.998-1.074zm.249-1.255l-.38.66-.917-.645zm-2.59-3.154h1.015l1.62 2.742-1.983.023a.205.205 0 00-.116.374l1.468 1.032-1.602 2.782-.934-.935zm-.41 0l-.5 5.638-1.63-1.633-1.07-4.005zm1.182-.411h-.735l.096-1.082zm1.45-3.822l.51.885-1.568 2.793-1.002-1.697a.205.205 0 00-.381.087l-.155 1.754H7.728l.347-1.298zm-.206-.357l-5.072 2.363.635-2.377 2.808-2.815zm5.007.162l-.483.838-3.222.036.936-1.668a.206.206 0 00-.265-.288l-1.6.746-1.612-2.8 1.296-.349zm.206-.358l-4.64-3.265 2.181-.586 4.05 1.088zm-.212 1.19l.343-.595.827.583zm2.516 3.561l-.103 1.162-.686-1.162zm-6.568-3.73l-.37-.642.99-.46zm3.563 6.467c-.007-.001-.013-.003-.02-.003l-3.398.038-1.704-2.883 1.68-2.994 3.326-.037.005.011 1.745 2.954zm3.942-8.664l1.541 1.545 1.062 3.971H21.25zm-.9 5.516h-1.07l-1.616-2.737 1.945-.021a.205.205 0 00.115-.374l-1.378-.97 1.579-2.743.947.95zm.633-7.157l-.76-.205.92-1.598zM10.634 23.42l.784.21-.949 1.648z"/>`;
  }
};
export default Powr;
