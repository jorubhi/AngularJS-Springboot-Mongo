# AngularJS-Springboot-Mongo
CRUD operations on  mongodb from AngularJS through spring boot.


-------------------------------Simple AngularJS Application--------------------------



----1. Open Angular1 folder and do -> npm install express.

----2. Go to /scripts and do -> node web-server.js

----3. You can now access the application @locahost:8100.



----------------------------------------Description-----------------------------------


---Welcome {Username} fetched from controller.

---List of users, fetched via REST API call through a service, populated in the Controller and given to the view(index.html)

---Commodities, local(in memory) array list, operated through controller.




---------FOR API SETUP------------

--Import AngularApi in STS.

--For first time run, uncomment 2 lines in main class(they're used to add the first record in the database so that a collection gets created in mongo db)

--Make sure mongo db server instance is up and running.

--Run as Spring boot project.  

->endpoint: localhost:8080/api/all  

