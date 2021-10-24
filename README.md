# viseo-search-repo
This is a search repo project for viseo

# Requirements
You will need to implement 3 screens: 
- Login Screen 
- List Screen 
- Details Screen 
 
Login Screen 
- Has an email and password fields 
- The login will work with random credentials 
- On successful login, state is persisted so that on app open the user will be redirected to List Screen. No transition 
should be visible when transitioning to the List Screen from the Login Screen 
 
List Screen 
- Has a search bar at the top and a list below 
- Typing on the search bar will do a query from GitHub (https://api.github.com/search/repositories) and show the result 
in the list 
- The data should be in a Redux store 
 
Details Screen 
- This page shows the repo name and number of stars. 
o All UI details should be under one component named RepoDetailsComponent 
o You can show other details if you wish 
- There will also be a button (“Go to repo”) and tapping it will open the repo link in a browser

# Installation instructions
1. Clone this repository.
   "git clone https://github.com/jsdevdancer/viseo-search-repo.git"
2. Install package.
   "cd viseo-search-repo"
   "npm install"
3. Pod install.
   "cd ios"
   "pod install"
   "cd .."
4. Run project.
   "npx react-native run-ios"

# Guide for running
1. LoginScreen
   You can use any valid email and password to login.
2. ListScreen
   You can search any github repository name while typing.
3. DetailsScreen
   - You can see the details info (Avatar, User name, Repository name, Star, Fork, Watcher counts)
   - You can go to the repo url on browser by clicking "Go to repo" button.

# Preview Result
  You can see the result video record via "result_screen.mov" file. 
   
  https://github.com/jsdevdancer/viseo-search-repo/blob/main/result_screen.mp4