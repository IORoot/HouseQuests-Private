# Changelog

## 0.3.0

- Finally using puppeteer for zoopla scraping.
- Zoopla map pins and zoopla house details using puppeteer.

## 0.2.4

- Filtering! Loop through every property.
- Exclude or highlight regex-filtered items
- Filter on tenure, title, description
- Highlight by changing icon colour or SVG

## 0.2.3

- Various example icon buttons.
- When changing icons, colour stays same.
- Stripped out all authentication code
- stripped out all stripe code

## 0.2.1

- Added basic Icon changing ability

## 0.2 

- Removed authentication to make public
- Fix for Zoopla

## 0.1.27 (2023-01-09)

- Ability to ban users by IP address.
- Removed HQ_TEST
- Create UUID and check
- Check MAC
- Check Version

## 0.1.26 (2023-01-04)

- Advert doesn't appear on the first load
- Search buttons instead of just paste
- e2e tests working on canvas
- highlight current saved settings


## 0.1.25 (2022-12-21)

- replaced Spectron with playwright
- Changed release build on MacOS 10.15
- Fixed Colour Palette to close modal
- Colour Palette clear button in danger zone.
- Colour Palette buttons relabeled
- Advert no longer an iframe
- Current marker different icon
- Trail of clicked-on markers
- Removed auth from intro panel
- e2e tests now working

## 0.1.24 (2022-12-19)

- New selected marker colour
- Zoopla now lets you use the listings page URL
- URL Sanitisers
- Added Context Menus (Copy/Cut/Paste) for mouse
- New Tutorial Modal on first open.
- Add new preferences to toggle tutorial.
- Wiki on the tutorial toggle.

## 0.1.23 (2022-12-15)

- Added tutorial section to the wiki
- Updated all external links to open in the browser
- Changelog spell-check
- Stripe-portal & video tutorials in the intro modal
- Wider and multi-col intro modal
- Switched code-signing OFF
- Added Background to DMG Installer
- New Icon
- New notifications on the intro panel

## 0.1.22 (2022-12-14)

- Fixed Changelog to package.json list
- Wiki with tutorial videos
- Refresh shortcut added to the app menu
- Spectron E2E testing removed
- Stripe put into live mode
- HEX Code for marker colours

## 0.1.21 (2022-12-11)

- Fixed Changelog for package.json list
- New Release for tutorial videos
- Spectron disabled for e2e testing

## 0.1.20 (2022-12-11)

- Mixpanel Analytics

## 0.1.19 (2022-12-06)

- Better Advert Popup
- Authentication handling with email
- Text Highlighter - fix null and spaces
- OnTheMarket Search fix (leading ?)
- The crime icon changed to shield
- The Intro panel icon and header changed
- Update to packages: electron, mocha


## 0.1.18 (2022-11-21)

- Stripe subscription handling
- Wiki website
- Website stripe emails to customer
- Key generation on auth server
- Authentication via database, not JSON
- Authentication checks
- User email and Auth code

## 0.1.17 (2022-10-30)

- Fixed release management
  
## 0.1.16 (2022-10-03)

Release Management on GitHub

- Automation of releases through GitHub
- Links to express server for releases
- GitHub action to automate the process
- HTML Partials that compile app.html
- Removed accordion coming-soon items
- Recoloured search sections
- Added all Icons to local area layers
- Started developing AdSense integration
- ZooplaAll by default
- Adverts on the free version

## 0.1.15 (2022-09-29)

Cleanup and inclusion of Lewis onto the team.
- Small changes in HTML
- Cleanup of code.
- Start of release management


## 0.1.14 (2022-09-26)

- Intro Modal has a package.json description.
- loader spinner icon
- DevTools removed
- Improved OnTheMarket SearchURL Handling
- Clear Search works on all layers
- Add the following local area searches
  - Gyms
  - Post Office
  - Train Station
  - Bus Stop
  - Airport
  - Hospital
  - Doctor
- Created a generic OpenPass searcher for the local area


## 0.1.13 (2022-09-25)
- Added ol-ext to control the colours of the map
- Got monochrome, sepia, dark, inverted working
- refresh page button
- Authentication now has checks for
  - enabled / disabled state
  - name is set
- the valid-until date has not passed.
- Add buttons to go to the search page in chrome.
- Truncate buttons for exclude list.
- Windows!

## 0.1.12 (2022-09-23)

- National Rail Lines (England)
- National Rail Stations (England)

## 0.1.11 (2022-09-20)

- Added Authentication access to the intro modal.
- External links to chrome for website link and street view.
- Checking on the pasted search URLs.
- Fixed Zoopla Get All
- Added Free / Premium settings with the removal of features without being authenticated.
- 

## 0.1.10 (2022-09-19)

- Added Intro modal
- Use the package.json for the version number
- Neighbourhood Crime Ratings
- Neighbourhood Renters vs Buyers
- Toggle intro modal


## 0.1.9 (2022-09-18)

### Highlights

- Simple responsiveness on the drawers and main page.
- Add schools to the local area
- Add Neighbourhood rating:
  - overall average property price
  - price change
  - number of properties
  - Renters in postcode


## 0.1.8 (2022-09-15)

### Highlights

- Reconfigured the folder structure of the electron app.


## 0.1.7 (2022-09-14)

### Highlights

Implemented a full Electron release for macOS! A complete installable dmg file.

- E2E Test working on release management
- dmg is installable and works with AUTH server.
- Custom new Icon


## 0.1.6 (2022-09-13)

### Highlights

Implementing the electron-builder package to properly set up the app for updates and distribution.

## 0.1.5 (2022-09-12)

### Highlights

- Changed highlight colour to red
- removed dark mode colours
- Created Icons
- Installed electron-log
  - use `log.info('message');` to work
- Area Statistics from Rightmove 

## 0.1.4 (2022-09-10)

### Highlights

- Started conversion into an electron app this is to push the API requests onto the user side.
- AUTH Server created at http://138.68.156.78 

### Fix

- Added UTF-8 meta tag to fix HTML "-" from breaking on electron
- Fixed supermarket colours
- Removed the setting for 'User-Agent'

## 0.1.3 (2022-09-09)

### Highlights

- Local layers have toggle abilities.
- The modal for overwriting saves has now been set up to be a warning before the save. Refreshes page on overwrite.

## 0.1.2 (2022-09-07)

### Highlights

This update has interfaced with the OpenPass API and the wealth of data it can collect.
- Open pass API - Convenience stores within a 1km radius of the property
- Added the geolocation-utils library to get the bounding box needed for the open pass API calls.
- Moved the details drawer over to the right drawer and put tabs on it. Tabs are: property, details, Local Area



## 0.1.1 (2022-09-06)

### Highlights

Focused on authentication mechanism.
- The front end has an 'authentication' input field and button. This sends the code to the backend
- The backend will use SHA256 to hash the input key with a secret key and check if it's in the secretkeys.json file.
- The `generate_keys.sh` script will generate a private key and a hashed key to use in the app.



## 0.1.0 (2022-09-05)

### Highlights
Start rebuilding the settings drawer with a better UI. Adds a lot of saving-type functionality for transfer of settings and recalling of settings.
Also allows for multiple search parameters - perhaps a save-game for North East London only, and then one for Ealing only, etc...

- Start of Changelog
- Save Game type settings. 
  -  Save all settings with a title (Searches, excluded IDs, Highlighted words, favourited IDs)
  -  Overwrite settings with current settings
  -  Remove saved settings
-  Export all settings to file
-  Import all settings from the file
-  Tabs for settings drawer
-  Layer buttons have toggled outlines to show if on or off
-  Descriptions on settings



## 0.0.0

This changelog was started well after the app was built. Currently on version 24 and that's had significant development.

### Highlights
- Uses open-map for free mapping.
- Retrieve results from Zoopla / Rightmove / Onthemarket to combine on one map.
- Updates search on reload.
- See details of the property.
- Favourite, highlight and exclude a property from the map so it's either permanently on or off the map
- Text highlight to search for specific words.
- Extra Layers with clickable details
  - Tube lines
  - Tube stations
  - Train lines
  - Train stations
  - Bus routes
  - Supermarkets
  - Universities
  - Schools
  - Crime boroughs
- Obtain Police info about crimes in a 1mile radius
- Property Details from multiple sources
  - Calculated address and postcode
  - Broadband
  - Tax
  - Schools
  - Tenure