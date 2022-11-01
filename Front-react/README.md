# Ecommerce

## Run this project

To run this project, make sure to have the lastes npm installed it can be installed runing this command

```console
npm install -g npm@latest
```

Then run the project running this two commands

```console
npm install
npm start
```

## Structure

For this project we decided to make and structure where we have responsibilities divided on different folders

### Navigation

On navigation we define the layout, that will have different headers and footers depending on the page, for example a diferent header
for Admin and normal users pages

We also define all routes to have a single space where we can define the diferents link and pages acordingly

### Controllers

Here we define the principal pages, we need to get all the data and functions to update the database

### Components

Here we have the display components where we use the data provided by controllers to display them

### Data

Here we define all the database related functions

### Assets

We define all the assets utilized like images and svg for the project
