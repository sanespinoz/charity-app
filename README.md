# Charity App

## Description
Charity App is an application that allows you to manage institutions, sections, tutors, and children, making it easier to track and manage data.

nodejs, express, mongodb, rest-api, excel-import, backend, javascript, crud, web-app


## Features
- Import data from Excel files.
- CRUD for Institutions, Sections, Tutors, and Children.
- Connection to a MongoDB database.
- REST API created with Node.js and Express.

## Requirements
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your_user/charity-app.git

2. Navigate to the project directory:
cd charity-app

3. Install the dependencies:
npm install

## Configuración
1. Create a .env file in the root directory and add the following variables:
   
MONGO_URI=mongodb://localhost:27017/charityApp
PORT=5000

## Uso
**Server start:**
npm run dev

## Endpoints
**Import Excel**

* POST /api/excel/import
 Upload an Excel file to import data.

## CRUD Institutions

- GET /api/institutions
- POST /api/institutions
- PUT /api/institutions/:id
- DELETE /api/institutions/:id

## Licence
This project is licensed under the MIT license.



