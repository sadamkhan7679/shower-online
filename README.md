Install Yarn

To install dependancies, run this command in the folder
`yarn`

To run dev server
`yarn dev`

1-install next js sitemap generator  
`yarn add nextjs-sitemap-generator`
2-add next-sitemap-generator.js in root folder (copy from other repo on git)
3-add alternative urls in the .js
4- that you need to rund first the build and export script, as it works on the out folder
`yarn build`
`yarn export`
5-run sitemap on prompt and this will create a sitemap.xml file in your public folder
`node next-sitemap-generator.js`

## How to add new product to webshop page

- Webshop.js contains multiple webshopproduct (components) based upon product.json .
- webshop detail page \pages\product\[id].js -> content coming from \products\*.md
- so new product should be added at this moment in those 2 files.
- add an \*.md file for the product detail page ( /product )
- add the product also in product.json ( /pages )

note: this needs to be adapted to Json and only 1 file but works for now

## TODOS

- [ ] only 1 price and product description

## Attention points and possible improvements

- [ ] re render big images with https://tinypng.com/ -- https://stackoverflow.com/questions/25482765/bootstrap-change-image-according-to-device
- [ ] user input validation with formik

## Check with Praky

- [ ] 2 images in carourel index.js need be properly sized with correct aspect ratio
- [ ] in the faqdetail component there should be something like if urlimage null dont display anything. as not all faqs have images.
- [ ] review the dynamic routing --> should become json
