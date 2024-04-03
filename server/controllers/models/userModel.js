import { readdirSync } from 'fs';
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
      `CREATE TABLE IF NOT EXISTS Users (
          UserID SERIAL PRIMARY KEY,
          UserName VARCHAR(255) UNIQUE NOT NULL,
          FirstName VARCHAR(255) NOT NULL,
          LastName VARCHAR(255) NOT NULL,
          Email VARCHAR(255) UNIQUE NOT NULL,
          Password VARCHAR(255) NOT NULL,
          DateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )`;

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

const createApplicationsTable = () => {
  const query = 
          `CREATE TABLE IF NOT EXISTS Applications (
            ApplicationID SERIAL PRIMARY KEY,
            UserID INTEGER NOT NULL,
            JobID INTEGER NOT NULL,
            ContactID INTEGER NOT NULL,
            Status VARCHAR(255) NOT NULL,
            DateCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (JobID) REFERENCES Jobs(JobID),
            FOREIGN KEY (UserID) REFERENCES Users(UserID),
            FOREIGN KEY (ContactID) REFERENCES Contacts(ContactID)
  )`;

  return pool.query(query)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

const createContactsTable = () => {
  const query =
          `CREATE TABLE IF NOT EXISTS Contacts (
            ContactID SERIAL PRIMARY KEY,
            CompanyID INTEGER NOT NULL,
            UserID INTEGER NOT NULL,
            FirstName VARCHAR(255) NOT NULL,
            LastName VARCHAR(255) NOT NULL,
            Position VARCHAR(255),
            Phone_Number INTEGER,
            Email VARCHAR(255),
            Notes VARCHAR(255),
            FOREIGN KEY (CompanyID) REFERENCES Companies(CompanyID),
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

const createJobsTable = () => {
  const query = 
          `CREATE TABLE IF NOT EXISTS Jobs (
            JobID SERIAL PRIMARY KEY,
            CompanyID INTEGER NOT NULL,
            Position VARCHAR(255) NOT NULL,
            Applied_Date VARCHAR(255) NOT NULL,
            Follow_Up_Date VARCHAR (255) NOT NULL,
            Description TEXT DEFAULT 'No description provided',
            Quick_Apply BOOLEAN NOT NULL DEFAULT FALSE,
            Resume INTEGER,
            Cover_Letter BOOLEAN DEFAULT FALSE,
            FOREIGN KEY (CompanyID) REFERENCES Companies(CompanyID)
          )`
      
  return pool.query(query)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })
};

const createCompaniesTable = () => {
  const query = 
          `CREATE TABLE IF NOT EXISTS Companies (
            CompanyID SERIAL PRIMARY KEY,
            Name VARCHAR(255) NOT NULL
          )`;

  return pool.query(query)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })
};

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

const createAllTables = async () => {
  await createUsersTable();
  await createCompaniesTable();
  await createJobsTable();
  await createContactsTable();
  await createApplicationsTable();
  await addForeignKeyConstraints();
};

// createAllTables();

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
