#Removed unnecessary files
#ReactDom.render takes 3 arguments (what to show, where to show, callback function)

#React.Fragment 
  We know all the elements have to be under 1 parent div, but if we use <div> as a parent div then there will have an extra <div> so we use <React.Fragment> as a parent div because during compilation it doesn't appear as a div & saves time. we can use <> instead of <React.Fragment>

#We can not write conditional statements inside { } expressions. 
  
 - In jsx teh attributes are written in camelCase (start with small letter & 2nd word with capital)

#self closing tag -> <img />

##css rule:
  - All the values should be inside "", & the attributes follow camelCase format
  - display: "flex", 
  - alignItems: "center",


#HOOKS
  - It allows to use to state and other react without writing a class
  - It doesn't work inside classes
  - Hooks should always be used at the top level of React functions

#Install Bootstrap in React
  - npm i bootstrap
  - import '../node_modules/bootstrap/dist/css/bootstrap.min.css' or goto node_modules an find the path of bootstrap.min.css 

#Install MaterialUI in React
 - npm i @material-ui/core

#Use MaterialUI in React
 - import addIcon from '@material-ui/icon/add'
 & then use ut as a component i.e. <addIcon />

#Context API allows us to easily access data at different levels of the component tree, without passing prop to every level.

  #useContext()
  - We use useContext() in place of Context API because it makes it easier to pass data to child components in fewer lines.

  - We have used useContext() in ContextB file & ContextAPI in ContextC file, both get data from app.js file

#useEffect
  - useEffect works automatically whenever any data inside the component is changed and render() method is called, example: see in the UseEffect.jsx file

#Routing 
  - React uses client side rendering (In this the page will reload & we get the entire page from the server) but in client side rendering just the required part of the page is rendered not the entire page.

  - install react-router-dom 

#useParams()
  - Used to get teh parameters passed by the user in the url

#useLocation()
  - Shows the current path

#useHistory()
  - By using this we can go back to previous parameters 

#Bootstrap 5
  - npm i bootstrap@5.0.0-alpha1
  - import '../node_modules/bootstrap/dist/css/bootstrap.min.css'