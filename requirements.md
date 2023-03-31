# Vision

What is the vision of this product?
- The vision of our product is to allow users to to see, create, update, and delete reviews on games generated through a public API.  

What pain point does this project solve?
- Our project will allow for users to gain access to review about games they could be interested in before purchasing. It will also allow for people who have purchased 
the game previously to leave reviews for others to reference.

Why should we care about your product?
- It will be an informative, creative, and useful website that will allow users to be more informed on their purchases of games and allow for others to
give insight on games they are passionate about or games they feel were not up to par.

# Scope (in/out)
IN
- Our website will provide information to users by the use of reviews on games generated from an API.
- It will allow users to create reviews on games they are passionate about or voice their concerns in the same format.
- Users will be able to login through Auth0 to find all their previously created reviews to update or delete them.
- Users will be able to search for specific games through our public API.
- (stretch) Users will be able to give "star ratings" to games along with written reviews.

OUT
- This website will never be ported into an IOS or Android Application.
- This website will never sell user's information.
- This website will not be monetized to force user's to pay to access the material. 

# MVP (minimum viable product) & Stretch Goals
- Our MVP will consist of a functioning Front End that allows users to get, post, put, and delete reviews which will all be stored in a Mongo Database.  We will a working server that is connected to our Front End.  
- Some of our stretch goals will be to display games from our Public API that have reviews attached to them on page load, stars added to reviews, and multiple routes on our page.

# Data Flow
- The flow of our data will consist of generating games through our API to be displayed on page load, these games will have reviews attached to them, if anyone has submitted one.  When users go to submit a review the information will be sent to our backend and connect to our Mongo to store that review in our database. Each reivew will have a unique id that we will tie to the game the review was submitted on. Ideally, users will be able to navigate to a home page where they have created reviews or saved games they want to view at a later time and have an additional page that will be generated games to be viewed/reviewed.
![Screenshot 2023-03-31 142653](https://user-images.githubusercontent.com/109825175/229234717-2bd16ac6-9af8-4c0a-97f5-c35ff30342b6.png)


# Non-functional requirements
- For security will be implementing Auth0 to allow users security for their created reviews. This is important to us because we want users to have the ability to have different accounts for different game reviews they have created. 
- We will be utilizing the CRUD model for testing purposes.  We want to ensure that users can create, update, delete, and retrive reviews that have been created.  We want this to have full functionality so users can have access to all the different ways reviews can be made.
