const sql = require('mssql');

const config = {
    server: 'localhost\\SQLEXPRESS',
    database: 'YourDatabaseName',
    options: {
        trustedConnection: true,
        enableArithAbort: true,
        instanceName: 'SQLEXPRESS'
    }
};

async function getConnection() {
    try {
        let pool = await sql.connect(config);
        console.log("Connected to SQL Server");
        return pool;
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = {
    getConnection
};
