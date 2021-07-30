# Delilah-Resto - Diego Pulido
Proyecto 3 BACK END - Acámica

*Las carpetas alojadas en este repositorio contienen el proyecto desarrollado en su totalidad.*<br />
*The folders stored into this repository contain the fully developed project*

<br /><br />


**Set-Up and Installation**

1. Download the source code or clone repository using git.
2. Open a command line terminal or bash into the 'delilah-resto' folder.
3. Make sure you've got NodeJS and NPM installed in your system.
4. Run 'npm init' in order to install the base packages.


<br />

**Preparing the Database**

1. Make sure you've got MySQL and Apache installed in your system.
2. Run your local SQL environment (MAMP, XAMPP or similar).
3. Locate your localhost port settings.
4. Make sure your localhost port number is the same as the number after the 'PORT' variable in the .env file.
5. Run your localhost, and open your SQL graphic interface (phpMyAdmin, MariaDB, Heidi, or similar).
6. Import the database .sql file, located into the 'db_sql' folder. You can also run the query through your command line to create all the tables of the project.
7. Make sure to set all the environment variables according to your localhost settings (username, password and dtabase name). You can do this in the .env file.

*In order to be able to interact with the Delilah-Resto ordering system, you can use these following users. New users can also be created through the API, though the passwords are encrypted with MD5.*

USERNAME: diegopulido2d
PASS: 123456

USERNAME: charlygarcia
PASS: zxczxczxc


<br />

**Running the API REST server locally**

1. Once your localhost is running with the database, and all the required packages are installed into the node modules, you can run the API service locally. To do so, enter 'node server' command.

2. Your terminal should display the following output:

    Localhost listening on port 3000!
    Connection to database succesful!

2. Now the API service should be connected to the database, and running succesfully!



<br /><br /><br />


**Changelog**

*- 07/07/2021: Updated ReadMe file*
