# Ricky & Morty App

## Overview

A typical interaction with the Ricky and Morty API via a web app.
This provides users with information of episodes, locations and residents from TV series Ricky & Morty.
Below are the features implemented; location details fetching, searching and filtering of results, view 
resident information with images and stats etc.
I have previously worked with this code solution in Java spring boot and used my App as a proxy for Ricky and Morty but I have really loved 
the technology switch and I challenged myself into putting this together with the stipulated tech skills. 
So thank you!

## Features

### Retrieve List of Locations:

Display a list of locations with their names, types, and residents along with their statuses.

### Search and Filter:

Implement search or filter functionality to allow users to search for locations, characters, or episodes by name.

### Display Data:

Display information in a user-friendly manner, allowing users to view locations, residents, and images of characters with their names and statuses.

### View Resident Details:

Tapping on a resident will navigate to a screen displaying detailed information about the resident, including the ability to add persistent notes.

### Persistent Notes:

Allow users to add and save notes about characters, providing a means to recall important information.

## API Integration

The app integrates with the Rick & Morty API to fetch data regarding locations, residents, and episodes. It utilizes appropriate API endpoints and handles responses effectively to populate the application with relevant information.

## Technologies Used

Programming Language: `NextJS and Typescript`

Data Persistence: `LocalStorage`

Styling: `TailwindCSS` : It is very simple and increases the development speed because you don't have to work on a separate file for styles.

## Choice of Database

Just Local storage no fetches from DB and hence enhancement of security

## Choice of API Endpoint

I have preferred REST endpoints to GraphQL as I am more conversant with REST.

## Getting Started

To run the application locally, follow these steps:

```bash

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
