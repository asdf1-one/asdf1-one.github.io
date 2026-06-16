function seisei() {
  const id = document.getElementById("id").value;
  let count;
  if (["1", ""].includes(document.getElementById("count").value)) {
    count = "";
  } else {
    count = parseInt(document.getElementById("count").value);
  }
  
  let result = '';
  
  result += `/give @p ${id} ${count}`;

  document.getElementById('result').textContent = result;
}
