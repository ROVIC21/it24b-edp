fetch('DynamicElement.json')
  .then(response => response.json())
  .then(data => {
   
    buildTable(data);

    
    $('#search-input').on('keyup', function() {
      var value = $(this).val();
      console.log('Value:', value);
      var filteredData = searchTable(value, data);
      buildTable(filteredData);
    });
  })
  .catch(error => console.error('Error fetching data:', error));


function searchTable(value, data) {
  var filteredData = [];
  value = value.toLowerCase();

  for (var i = 0; i < data.length; i++) {
    var name = data[i].name.toLowerCase();

    if (name.includes(value)) {
      filteredData.push(data[i]);
    }
  }

  return filteredData;
}


function buildTable(data) {
  var table = document.getElementById('Table');
  table.innerHTML = ''; 

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
                  <td>${data[i].name}</td>
                  <td>${data[i].age}</td>
                  <td>${data[i].Course}</td>
                  <td>${data[i].Address}</td>
               </tr>`;
    table.innerHTML += row;
  }
}