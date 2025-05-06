# Setting up DB

brew install mysql

# For macOS (if installed via Homebrew)
brew services start mysql

# Now, Log in as root
mysql -u root -p

# Once logged in, create a new database for your project:
CREATE DATABASE myapp_db;

# create a new user for your application:
CREATE USER 'myapp_user'@'localhost' IDENTIFIED BY 'yourpassword';

# Grant Permissions
GRANT ALL PRIVILEGES ON myapp_db.* TO 'myapp_user'@'localhost';

# Flush Privileges to apply changes
FLUSH PRIVILEGES;

# Exit MySQL:
EXIT;

# Connect to DB
mysql -u myapp_user -p myapp_db

# you need to modify your database URL to use pymysql:
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://myapp_user:yourpassword@localhost/myapp_db"


# when updating db schema
alembic revision --autogenerate -m "initial"
alembic upgrade head

# when merging from master make sure to sync with any db schema updates
alembic upgrade head
