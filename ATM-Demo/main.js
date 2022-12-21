import './style.css' 
// 挂上css
import { isNumber, mySort } from './src/utils'

let list = []

const btnDeposit = document.querySelector('#deposit')
// document.querySelectorAll() = [] 表示可以选择多个，返回的空间十个list

btnDeposit.addEventListener('click', () => {
  const input = document.querySelector('#myInput')
  const value = +input.value //把字符串变成数字
  if (isNumber(value)) {
    list.push(value)
  }//如果拿到的value是数字，就怕它放在我们的表格里
  console.log(list); //每次按了add就会打印数字

  input.value = ''//一旦拿到数字要把input清空，所有要设置一个空值
  const orderList = mySort(list)
  list = [...orderList] //一旦拿到值，就放进去list里
  //拿到的数字和tbody相关：
  const tbody = document.querySelector('tbody')
  tbody.innerHTML = ''//写之前要把表格中的内容先清空
  //做一个循环，遍历每一项，一次添加一个到表格里：
  orderList.forEach((element, index) => {
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    //添加两个框的内容

    //index+1，从1开始，而不是0:
    th.textContent = index + 1
    const td = document.createElement('td')

    td.textContent = element
    tr.append(th, td) //加到tr里
    tbody.append(tr) //再把tr加到tbody里
  })
})


