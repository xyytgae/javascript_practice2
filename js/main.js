'use strict';

{
  const button = document.getElementById('button');
  const id = document.getElementById('id');
  // const comment = document.getElementById('comment');
  // const status = document.getElementById('status');
  const output = document.getElementById('output');
  const datas = [];
  const i = 0;

  button.addEventListener('click', () => {
    const myText = document.getElementById('myText').value;
    myFunction(myText);

    function myFunction(myText) {
    datas.push(myText);
    let newBox = `<button type="button" id="change">作業中</button>`;
    newBox += `<button type="button" id="delete">削除</button>`;

    output.innerText += datas.indexOf(myText);
    output.innerText += datas[i];
    output.insertAdjacentHTML('beforeend', newBox);

    document.getElementById('myText').value = "";
    }
  });
}

