// Import the database connection pool
const pool = require('./src/data-access/db');

// Create all the tables in the database
const createTables = async () => {
  try {
    await pool.query(`

      -- Table to store invoices issued to customers
      CREATE TABLE IF NOT EXISTS invoices (
        id SERIAL PRIMARY KEY,
        customer VARCHAR(100) NOT NULL,
        amount NUMERIC(10, 2) NOT NULL,
        date DATE DEFAULT CURRENT_DATE,
        transaction_id INTEGER
      );

      -- Table to store financial transactions
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        customer_id INTEGER NOT NULL,             
        amount NUMERIC(10, 2) NOT NULL,
        status VARCHAR(20) NOT NULL,
        description TEXT                           
      );

      -- Table to store receipts sent to customers
      CREATE TABLE IF NOT EXISTS receipts (
        id SERIAL PRIMARY KEY,
        customer VARCHAR(100),
        transaction_id INTEGER,
        email VARCHAR(100),
        amount NUMERIC(10, 2),
        sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- Table to store monthly financial reports
      CREATE TABLE IF NOT EXISTS monthly_reports (
        id SERIAL PRIMARY KEY,
        month VARCHAR(2),
        year VARCHAR(4),
        total_transactions INTEGER,
        total_amount NUMERIC(10, 2),
        generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- Table to store a general overview of financial status
      CREATE TABLE IF NOT EXISTS overview_reports (
        id SERIAL PRIMARY KEY,
        total_income NUMERIC(10, 2),
        total_expenses NUMERIC(10, 2),
        net_profit NUMERIC(10, 2),
        generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- Table to track live income/expenses for real-time monitoring
      CREATE TABLE IF NOT EXISTS live_tracking (
        id SERIAL PRIMARY KEY,
        type VARCHAR(20),
        amount NUMERIC(10, 2),
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        source TEXT
      );

    `);

    console.log("All tables created successfully on Render DB!");
    process.exit();
  } catch (err) {
    console.error("Error creating tables:", err);
    process.exit(1);
  }
};

// Run the table creation function
createTables();
