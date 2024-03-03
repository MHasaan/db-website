const sql = require('mssql/msnodesqlv8');
var config = {
  server: "DESKTOP-DTNJB1H\\SQLEXPRESS",
  database: "my_dummy_table",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  }
}

sql.connect(config, function (err) {
  if (err) console.log(err); // Corrected typo here
  var request = new sql.Request();
  var query = "select * from my_dummy_table";

  request.query(query, function (err, records) { // Corrected typo here
    if (err) console.log(err);
    else console.log(records);

  })
})
