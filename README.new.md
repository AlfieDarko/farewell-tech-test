# Basket Techtest for MMT Digital

Deployed > URL: [https://fe-test-ad.vercel.app/](https://fe-test-ad.vercel.app/)

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Additional Tech Choices

## Framer-motion

Its a CSS animation library. I really like it for adding CSS animations. I've used it for the loading state of the buttona and to stagger animate the fetched data cards onto the screen. I also used it to add a simple hover state. 

All this can be done in plain CSS but I just find it quick and simple to use for basic micro-interactions

### Assumptions
- I assumed that I should stick to the original screens, especially given the time. I could not think of a good reason to deviate majorly from them.

### Approach

I kept my approach simple. In addition to the original button and header components, I've added a QuoteCard for a single quote and a quotes grid, which contains a CSS grid type component and the logic handling rendering the quotes on the button press.

I've modified the Button Component slightly to accept an isLoading prop that controls whether the loading spinner is showing or not. It also controls whether the button is disabled or not.  I've also added animation into that component. 

All components now can have a data-testid attribute to help testing efforts. We should avoid relying on brittle things like classnames or css ID's which is really testing via implementation details. 
Since we are using styled-components, there is less chance of that happening anyway. It's still a great practice.

I added eslint too for my sake.


### What went well
The task was pretty simple. There was no need for any state handling boilerplate, or setting up fetching etc (after a few tech tests it becomes repetetive 😅) which saved me time and allowed me to just concentrate on code and testing.  

Added tests for all the components, even the ones I didn't write! Added Snapshots for the simpler components. Not a big fan of snapshots for anything else but for simple things as they are too easily bypassable with the press of one button. But they are good for small components and as part of an arsenal of tests. 

I liked I could do the stagger animation. I remember having trouble with it in the past and it was becase I left out the 'when' property. Glad I was able to figure it out in this tech test so I can use it in other projects.

### What didn't go so well
  I had an issue with one of the tests in quotesgrid. firing the button event was not letting me find the quotesgrid dom elements. Im not sure if it is to do with the timeout, or the animations but It's something I would have sorted out if I had more time.

### If I Had More Time
  I would sort out the last tests in the Quotes Grid section. I couldn't get the post button screen to show the cardquotes in the testing DOM so I would spend time on sorting that out.

  I would have thought about the sad paths too, adding error boundarys to the app. Since it was a fake fetch getting data locally, I felt there was no need.

  Would have been a stretch goal to think about how to handle a mutlitude of Simpsons data. Would I paginate? would I infinite scroll? That would have been interesting.

  Thanks for reading.

  Alfie Darko

