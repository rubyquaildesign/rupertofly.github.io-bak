function replaceIF(id, src) {
  const item = document.getElementById(id);

  console.log(src);
  let ch = item.children;
  item.innerHTML = null;
  const ifr = document.createElement('iframe');
  ifr.setAttribute('width', '100%');
  ifr.setAttribute('height', '600px');
  ifr.setAttribute('frameborder', '0');
  ifr.setAttribute('src', src);
  ifr.classList.add('ifr');
  item.appendChild(ifr);
  item.setAttribute('style', 'background-color: rgba(0,0,0,0);');
  const link = document.createElement('a');
  link.innerText = 'close';
  link.classList.add('clbtn');
  link.style.alignSelf;
  item.appendChild(link);
  link.onclick = () => {
    item.innerHTML = null;
    item.setAttribute(
      'style',
      'height:1px;min-height:1px;background-color:rgba(0,0,0,0)'
    );
    console.log(ch);
    for (let i = 0; i < ch.length; i++) {
      item.appendChild(ch[i]);
    }
  };
}
