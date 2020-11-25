var songs = [
// songs.push(
    {
    name: 'Hoa hai duong',
    author: 'J97',
    year: 2020
    },
// songs.push(
    {
    name: 'Chay ngay di',
    author: 'M-TP',
    year: 2018
},
// songs.push(
    {
    name: 'Chay di',
    author: 'M-TP',
    //isExist: false,
    year: 2018
}
]
// console.log(`cac bai hat la: ${JSON.stringify(songs)}`)
function function1(tableSong) {
    var table = document.getElementById('tableSong');
    for (var i = 0; i < tableSong.length; i++) {
        var tableSong = tableSong[i];
        var row = document.createElement('tr');
        var properties = ['name', 'author', 'Year'];
        for (var j = 0; j < properties.length; j++) {
            var cell = document.createElement('td');
            cell.innerHTML = tableSong[properties[j]];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
function1(songs);