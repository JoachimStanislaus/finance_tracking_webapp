# Setting up DB

brew install mysql

# For macOS (if installed via Homebrew)

brew services start mysql

# Now, Log in as root

mysql -u root -p

# Once logged in, create a new database for your project:

CREATE DATABASE fintracking_db;

# create a new user for your application:

CREATE USER 'fintracking_user'@'localhost' IDENTIFIED BY 'password';

# Grant Permissions

GRANT ALL PRIVILEGES ON fintracking_db.\* TO 'fintracking_user'@'localhost';

# Flush Privileges to apply changes

FLUSH PRIVILEGES;

# Exit MySQL:

EXIT;

# Connect to DB

mysql -u fintracking_user -p fintracking_db

# you need to modify your database URL to use pymysql:

DATABASE_URL = "mysql+pymysql://fintracking_user:password@localhost/fintracking_db"

# when updating db schema

alembic revision --autogenerate -m "initial"
alembic upgrade head

# when merging from master make sure to sync with any db schema updates

alembic upgrade head
