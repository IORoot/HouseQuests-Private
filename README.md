# HouseQuests

This is an electron app that boasts the ability to combine results from multiple
UK housing websites into a single map. See housequests.com for details.

This was a private repo that I had built in an authentication server, but have since
decided to make it public with the hope of interest from other people.

## Starting project

```bash
npm run start
```

##  Release Management

To create a new release of the HouseQuests electron app, you can run:
```bash
npm run release
# or
npm run build
```
This will place all new distribution files into the `./dist` folder.

Secret scanning enabled on repo.


###  Publish release on github 

There is an adjacent github repo that just hosts the releases. This is at: https://github.com/IORoot/HouseQuests

1. Give a version release tag to the local repo.

```bash
git tag v0.1.15      # Add a tag to current branch
```

Other commands:
```bash
git tag            					# List all tags on current branch
git tag -d <NAME>   				# Delete tag
git push origin :refs/tags/v0.1.16	# Delete tag on github (delete local first)
```

2. Push the tags to GitHub

```bash
git push --tags
```

The automated GitHub action will build the windows and mac distributable files and add them to the 'releases' page.

Note that a release will **NOT** run the tests before releasing.



## Apple Quarantine

Apple says the file is damaged and cannot be open it's because it has been quarantined it. 

Run the following command:

```
xattr -d com.apple.quarantine /Applications/HouseQuests.app
```

## 5. Folders

```bash
#main application
/app
	/client 		# main electron app
	/lib			# bundled libraries and files
	/maps			# bundled maps
	/services		# node server backend

# webpack-build config files
/build

# npm environment config
/config

# production-ready distribution files
/dist

# icons and install images
/resources

# HTML and electron files. Builds into /app folder.
/src

# Mocha Tests
/tests

```

## 5. Making MacOS Icons

https://gist.github.com/jamieweavis/b4c394607641e1280d447deed5fc85fc

## 6. MacOS Code-signing.

Disable code-signing by setting the environment variable before creating the app.
```
export CSC_IDENTITY_AUTO_DISCOVERY=false
```

https://disable-gatekeeper.github.io/

## 7. Testing

The WebdriveIO / Mocha tests NEED the `/dist` release to run against.
Make sure you have done an `npm run release` to build the release before testing.

Also, set the environment variable 'HQ_TEST=test' to disable the 10-second advert


## 8. Tailwind

To create a new`./app/views/style.css` file, you'll need to run TailWind.

```
npx tailwindcss -i ./src/views/style.css -o ./app/views/style.css --watch
```

To build it for production:

```
npx tailwindcss -i ./src/views/style.css -o ./app/views/style.css --minify
```


## 9. VSCode debugging

.vscode/launch.json in vscode:

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "cwd": "${workspaceFolder}/HouseQuests-Private",
            "runtimeExecutable": "${workspaceFolder}/HouseQuests-Private/node_modules/.bin/electron",
            "windows": {
                "runtimeExecutable": "${workspaceFolder}/HouseQuests-Private/node_modules/.bin/electron.cmd"
            },
            "args" : ["."],
            "outputCapture": "std"
        }
    ]
}
```