function isNumber(num) {
  return +num === num
}

function mySort(list){
  //1.拆壳
  const flatList = list.flat(Infinity)
  //2.筛选
  const filterList = flatList.filter(element => isNumber(element)) //如果是数字就保留
  //3.去重合：（数字重合的就不要了）
  const setList = [...new Set(filterList)]

  console.log(setList);
  
  return setList.sort((a,b) => a - b) //4.排序
}

export { isNumber, mySort }