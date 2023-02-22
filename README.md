# Wingi Store Project

Wingi is e-commerce platform where merchants are able to create their own store 
and add their product and share them with consumers

## Demo

[link for Demo](https://drive.google.com/file/d/1Yk2NdYTuDeNsuvUUzX4k81UDlcLMymGe/view?usp=share_link)

## Getting started

### Installation
In the project directory, you can run:
1. Clone the repo

`git clone https://github.com/giranezafiacre/wingi-store.git`

2. Install NPM packages
`npm install`

### Running the App
1. Run the app in development mode
`npm run start`

2. Open http://localhost:3000 to view the app in the browser

### Building the App
To build the app for production, run the following command:
`npm run build`

This will create an optimized `build` of the app in the build folder.

### folder structure
wingi-store/
   - README.md
   - package.json
   - .gitignore
   - public/
      - index.html
      - favicon.ico
   - src/
      - App.js
      - App.css
      - index.js
      - pages
          - addProducts
              - index.jsx
          - adminProducts
              - index.jsx
          - checkout
              - index.jsx
          - errorPage
              - index.jsx
          - products
              - index.jsx
          - updateProducts
              - index.jsx
      - firebase
          - addProducts.js
          - index.js
      - components
          - filter
              - index.js
              - filter.css
          - filterAdmin
              - index.js
              - filterAdmin.css
          - footer
             - index.js
             - footer.css
          - forms
             - checkoutForm
                  - index.js
                  - checkoutForm.css
             - productForm
                  - index.js
                  - productForm.css
          - header
             - index.js
             - header.css
      - assets
         - images
             
      - appContext


### Technologies Used
List the technologies used in the project:

* React
* React Router
* Bootstrap
* Firebase

### Features
List the features of the project:

* Client and admin/merchant can search for product by name, description or category
* Client can add product
* Merchant can update a product
* Merchant can delete a product
* Merchant and client can read a product
* Merchant can create a new product

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

### Deployment

I used Github for code deployment and [Vercel](https://wingi-store.vercel.app/) for site to be live 

