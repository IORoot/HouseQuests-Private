# Changelog

## 0.1.7 (2022-09-14)

### Highlights

Implemented a full Electron release for MacOS! A complete installable dmg file.

- E2E Test working on release management
- dmg is installable and works with AUTH server.
- Custom new Icon


## 0.1.6 (2022-09-13)

### Highlights

Implementing the electron-builder package to properly setup app for updates and distribution.

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
- Removed setting for 'User-Agent'

## 0.1.3 (2022-09-09)

### Highlights

- Local layers have toggle abilities.
- Modal for overwriting saves has now been setup to be a warning before the save. Refreshes page on overwrite.
- 



## 0.1.2 (2022-09-07)

### Highlights

This update has interfaced with the OpenPass API and the wealth of data it can collect.
- Openpass API - Convienience stores within 1km radius of property
- Added the geolocation-utils library to get the boundingbox needed for the openpass API calls.
- Moved details drawer over to the right drawer and put tabs on. Tabs are : property, details, Local Area



## 0.1.1 (2022-09-06)

### Highlights

Focused on authentication mechanism.
- The frontend has an 'authentication' input field and button. This sends the code to the backend
- The backend will use SHA256 to hash the input key with a secret key and check if it's in the secretkeys.json file.
- The `generate_keys.sh` script will generate a private key and a hashed key to use in the app.



## 0.1.0 (2022-09-05)

### Highlights

Start of rebuilding the settings drawer with a better UI. Adds a lot of saving-type functionality for transfer of settings and recalling of settings.
Also allows for multiple search parameters - perhaps a save-game for North East London only, and then one for Ealing only, etc...

- Start of Changelog
- Save Game type settings. 
  -  Save all settings with a title (Searches, excluded IDs, Highlighted words, favourited IDs)
  -  Overwrite settings with current settings
  -  Remove saved settings
-  Export all settings to file
-  Import all settings from file
-  Tabs for settings drawer
-  Layer buttons have toggled outlines to show if on or off
-  Descriptions on settings



## 0.0.0

This changelog was started well after the app was being built. Currently on version 24 and thats had significant development.

### Highlights
- Uses Openmap for free mapping.
- Retrieve results from Zoopla / Rightmove / Onthemarket to combine on one map.
- Updates searches on reload.
- See details of property.
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
- Obtain Police info about crimes in 1mile radius
- Property details from multiple sources
  - Calculated address and postcode
  - Broadband
  - Tax
  - Schools
  - Tenure