# My Bookshelf

## General Info
My bookshelf is a website made for storing information about read and wanted books.

## Technologies
* React
* ReactDOM
* React Router Dom
* Axios
* Bootstrap v5.0.0
* Node.js v12.19.0
* MongoDB
* Express



## Setup
1. Download BookshelfClient.zip and BookshelfServer.zip(https://github.com/MartaMiklaszewska/BookshelfServer)
2. Open both folders in Visual Studio Code
3. In terminal inside BookshelfClient folder run command npm start 
(if the app is not starting use: npm cache clean --force; npm rebuild; npm install)
4. In terminal inside BookshelfServer folder run command node .

## Features

The home page of MyBookshelf web displays a form that contains title, author and status information. After clicking on "Add to your bookshelf" button submitted data are added to MongoDB database. There is also an option to check previously added books by clicking "Check your bookshelf" button.
<hr />
<img src="https://github.com/MartaMiklaszewska/BookshelfClient/blob/main/Screenshot%20(691).png" alt="drawing" width="1000"/>
<hr/>
The bookshelf page displays all the books that are inside MongoDB database. User can also edit previously added records as well as delete them.
After clicking the logo on a navbar user is redirected to the home page.
<hr />
<img src="https://github.com/MartaMiklaszewska/BookshelfClient/blob/main/Screenshot%20(692).png" alt="drawing" width="1000"/>
<hr />

## Status
Finished
