array.map((item) => {
    const index = array.indexOf(item);
    const indexPlus = index + 1;
    const indexString = '0' + String(indexPlus);
    console.log(indexString);
  });