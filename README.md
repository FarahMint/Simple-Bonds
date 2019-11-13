 # Simple Bonds
Web app created with:
- React.js
- React Context API for the state management 
- React-router 
- Axios 
- Data from Simple Bonds' REST API. 


## 🧐 What user can do?

  A user of 'Simple Bonds' can do the following:

  - Browse all the available bonds
  - Calculate the expected return on a bond when investing a specified amount
  - Make an investment into a bond, as a specified investor (see --issue)
  - Browse all the known investors
  - View an investor's portfolio of investments
  - Cancel a pending investment 
  - Use simple bonds on their mobile device
  - Lookup an investor using text-based search

  ## Screen Shot 
  1.  **`Bonds  && Investors page`** 
<img align="left" src="https://user-images.githubusercontent.com/18241226/68757978-cf8d4800-0604-11ea-9f7d-b849b5d8ba1f.png" alt="tablet-bonds-page" title="1tablet-bonds-page"/>
<img align="left" src="https://user-images.githubusercontent.com/18241226/68769072-a1673280-061b-11ea-96c2-f1060f93926e.png" alt="tablet-investors-page" title="1tablet-investors-page"/>




  2.  **`Investors page - toggle action between view & hide investment`** 
 ![Screen Shot 2019-11-13 at 11 02 02 AM](https://user-images.githubusercontent.com/18241226/68769073-a1ffc900-061b-11ea-9b3f-455cba1db5f3.png)


  3.  **`search investor`** 
 ![Screen Shot 2019-11-13 at 11 02 02 AM](https://user-images.githubusercontent.com/18241226/68769075-a1ffc900-061b-11ea-9486-29e69a1d94da.png)



##  🧐 issue
Axios POST request fails with error status code 500: Internal Server error
However using Postman it works properly and returns a response. I don't know where the failure come from?  

![Screen Shot 2019-11-13 at 10 30 57 AM](https://user-images.githubusercontent.com/18241226/68756454-0b72de00-0602-11ea-9f23-b2246762d77f.png)
![Screen Shot 2019-11-13 at 10 31 56 AM](https://user-images.githubusercontent.com/18241226/68756455-0b72de00-0602-11ea-8ecf-ac88383d7699.png)
![Screen Shot 2019-11-13 at 10 32 19 AM](https://user-images.githubusercontent.com/18241226/68756456-0c0b7480-0602-11ea-94b3-c7231d6dcf12.png)
![Screen Shot 2019-11-13 at 10 32 51 AM](https://user-images.githubusercontent.com/18241226/68756459-0c0b7480-0602-11ea-891a-c66071241deb.png)

 


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
 
 

