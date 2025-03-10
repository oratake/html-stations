async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];

  const full_name_list = userList.map(list => {
    return {
      full_name: list.family_name + " " + list.first_name
    }
  });

  return await timeout(full_name_list, 3000);
}

function timeout(list, ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`waiting ${ms} ms.`);
      resolve(list);
    }, ms);
  });
}
