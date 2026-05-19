1. Why is it beneficial to separate your routes, models, and database connection into different directories?
It keeps the project organized. Code is easier to read, debug, update and maintain
   routes - handles API endpoints
   models - define database structure
   db - handles Mongo DB connection
2. What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?
  - PUT usually means replace or update whole object
  - PATCH updates only part of the object

3. In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send  the deleted object, a simple success message, or something else? Why?
A good simple response is - res.json({message: "Book deleted successfully"}) 
Because client or user need to know that Book delete worked