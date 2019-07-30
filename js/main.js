'use strict';

{
  const add = document.getElementById('add');
  const table = document.getElementById('table');
  const workingButtonChange = document.getElementById('workingButtonChange');
  const doneButtonChange = document.getElementById('doneButtonChange');
  let id = 0;


  function myFunction(myText) {

    // tr要素の作成
    const tr = document.createElement('tr');
    tr.id = "trId";

    // td要素の生成
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    // IDの数字を追加
    td1.textContent = id;
    tr.appendChild(td1);

    // コメントの内容を追加
    let comment = document.getElementById('myText').value;
    td2.textContent = comment;
    tr.appendChild(td2);

    document.getElementById('myText').value = "";

    // 作業中の追加
    const working = document.createElement('input');
    working.type = 'button';
    working.value = '作業中';
    working.name = 'inputWorking';
    td3.appendChild(working);

    // 作業中ボタンの処理
    working.addEventListener('click', () => {
      if(working.value === '作業中'){
        working.value = '完了';
      }else{
        working.value = '作業中';
      }
    });

    // 削除の追加
    const deletion = document.createElement('input');
    deletion.type = 'button';
    deletion.value = '削除';
    td3.appendChild(deletion);

    // 削除ボタンの処理
    deletion.addEventListener('click', () => {
      tr.remove();
    });

    // td3要素をtr要素の子要素に追加
    tr.appendChild(td3);

    // tr要素をtable要素の子要素に追加
    table.appendChild(tr);

    id++;

  }

  add.addEventListener('click', () => {
    myFunction(myText);

  });

  // ラジオボタンの処理
  workingButtonChange.addEventListener('click', () => {
  
  });


  doneButtonChange.addEventListener('click', () => {

  });

}
