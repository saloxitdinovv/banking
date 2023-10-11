let table = document.querySelector("table")
console.log(table);

let num = 0
if(location.href =="http://localhost:5173/index.html"){
  num = 7
  for (let i = 0; i < num; i++) {
    table.innerHTML += `      <tr>
    <td>
      1232312
    </td>
    <td>VISA</td>
    <td>Автомобиль</td>
    <td>414,000,000</td>
    <td>4 дня назад</td>
  </tr>`
    
}
}else{
  num = 18
  for (let i = 0; i < num; i++) {
    table.innerHTML += `      <tr>
    <td>
      1232312
    </td>
    <td>VISA</td>
    <td>Автомобиль</td>
    <td>414,000,000</td>
    <td>4 дня назад</td>
  </tr>`
    
}
}