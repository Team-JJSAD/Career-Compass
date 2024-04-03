// import { readdirSync } from 'fs';
import pg from 'pg';
const { Pool } = pg;
const connectionString = 'postgres://mjojsjld:DbgF0TOPRTz23Ozw4CaSN4DMKL10t_0I@bubble.db.elephantsql.com/mjojsjld';

const pool = new Pool({
  connectionString,
});

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

const createUsersTable = () => {
  const queryText =
      `CREATE TABLE Applications (
        ApplicationID SERIAL PRIMARY KEY,
        UserID INTEGER,
        CompanyName VARCHAR(255) NOT NULL,
        AppDate DATE NOT NULL,
        FollowUpDate DATE,
        JobDescription TEXT,
        Notes TEXT,
        Contact VARCHAR(255),
        FOREIGN KEY (UserID) REFERENCES Users(UserID)
      );`;

  return pool.query(queryText)
      .then((res) => {
        console.log(res);
        // this closes the connection to the database
        // pool.end();
      })
      .catch((err) => {
          console.error(err);
          // pool.end();
      });
};

// createUsersTable();

const createApplicationsTable = () => {
  const query = 
  `CREATE TABLE Applications (
    ApplicationID SERIAL PRIMARY KEY,
    UserID INTEGER,
    CompanyName VARCHAR(255) NOT NULL,
    AppDate VARCHAR(255) NOT NULL,
    FollowUpDate VARCHAR(255),
    JobDescription TEXT,
    Notes TEXT,
    Contact VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
  )`;
  return pool.query(query)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

// createApplicationsTable();

const addForeignKeyConstraints = async () => {
  const alterCompanies = 
  `ALTER TABLE Companies ADD COLUMN ContactID INTEGER, 
  ADD CONSTRAINT fk_contact FOREIGN KEY (ContactID) REFERENCES Contacts(ContactID);`;

  const alterContacts = 
  `ALTER TABLE Contacts ADD COLUMN ApplicationID INTEGER, 
  ADD CONSTRAINT fk_application FOREIGN KEY (ApplicationID) REFERENCES Applications(ApplicationID);`;

  // Execution logic for the ALTER TABLE statement
  try {
    // Execute ALTER TABLE for Companies
    await pool.query(alterCompanies);
    console.log("Added foreign key constraint to Companies table successfully.");

    // Execute ALTER TABLE for Contacts
    await pool.query(alterContacts);
    console.log("Added foreign key constraint to Contacts table successfully.");
  } catch (err) {
    console.error("Error adding foreign key constraints:", err);
  }
};

const dropColumn = async (tableName, columnName) => {
  const queryText = `ALTER TABLE ${tableName} DROP COLUMN IF EXISTS ${columnName};`;

  try {
    await pool.query(queryText);
    console.log(`Column ${columnName} has been successfully dropped from ${tableName}.`);
  } catch (err) {
    console.error('Error dropping column:', err);
  }
};

const deleteTable = async (tableName) => {
  const queryText = `DROP TABLE IF EXISTS ${tableName};`;

  try {
    await pool.query(queryText);
    console.log(`Table ${tableName} has been successfully deleted.`);
  } catch (err) {
    console.error('Error deleting table:', err);
  }
};

// deleteTable('Users');

const addUser = (userName, firstName, lastName, email, password) => {
  const query = `INSERT INTO Users (UserName, FirstName, LastName, Email, Password)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;`;
  const values = [userName, firstName, lastName, email, password];

  pool.query(query, values)
    .then((res) => {
      console.log('User added: ', res.rows[0]);
    })
    .catch((err) => {
      console.error('Error adding user: ', err);
    });
}

const addCompany = (companyName) => {
  const query = `INSERT INTO Companies (Name)
    VALUES ($1)
    RETURNING *;`;

  const values = [companyName];

  pool.query(query, values)
    .then((res) => {
      console.log('Company added:', res.rows[0])
    })
    .catch((err) => {
      console.error(err)
    })
}

const deleteUserById = (userId) => {
  const query = 'DELETE FROM Users WHERE UserID = $1 RETURNING *;';

  pool.query(query, [userId])
    .then((res) => {
      if (res.rows.length) {
        console.log('Deleted User: ', res.rows[0]);
      } else {
        console.log('User not found or already deleted')
      }
    })
    .catch((err) => {
      console.error('Error deleting user:', err)
    })
}

const getAllUsers = () => {
  const query = 'SELECT * FROM Users;';

  pool.query(query)
    .then((res) => {
      console.log('All users: ', res.rows);
    })
    .catch((err) => {
      console.error('Error getting all users: ', err);
    })
}

// addUser('JohnDoeDoe', 'John', 'Doe', 'jd@email.com', 'password123' );
// addCompany('Apple');
// deleteUserById(1);
// getAllUsers();

export default {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback)
  }
}
