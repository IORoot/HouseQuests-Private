# HouseQuests



* 1. [Changes](#Changes)
* 2. [Demo Code](#DemoCode)
* 3. [Release Management](#ReleaseManagement)
	* 3.1. [Publish release on github](#Publishreleaseongithub)
* 4. [Overpass Turbo](#OverpassTurbo)


##  1. <a name='Changes'></a>Changes

- Release Management

##  2. <a name='DemoCode'></a>Demo Code

```
andy@londonparkour.com
1bd8ccec65e5e24b82374486ea1613b9899947cb4845c4a8a4b92909a3f12d0c
```

##  3. <a name='ReleaseManagement'></a>Release Management

To create a new release of the HouseQuests electron app, you can run:
```
npm run release
```
This will place all new distribution files into the `./dist` folder.



###  3.1. <a name='Publishreleaseongithub'></a>Publish release on github 

This is a multi-step process.

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







##  4. <a name='OverpassTurbo'></a>Overpass Turbo

[http://overpass-turbo.eu/](http://overpass-turbo.eu/)
This is a very useful API for getting results and exporting as JSON. 
It uses the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) to get its data.

For example
[Cafes](http://overpass-turbo.eu/?q=LyoKVGhpcyBoYcSGYmVlbiBnxI1lcmF0ZWQgYnkgdGhlIG92xJJwxIlzLXR1cmJvIHdpemFyZC7EgsSdxJ9yaWdpbmFsIHNlxLBjaMSsxIk6CsOiwoDCnGNhZmXFiMKdCiovCltvdXQ6anNvbl1bdGltZcWWxZgyNV07Ci8vxI_ElMSdciByZXN1bHRzCigKICDFqyBxdcSSxJrEo3J0IGZvcjogxYjFisWMxY7CgMWQxbxub2RlWyJhxaJuaXR5Ij0ixYvFjSJdKHt7YsSqeH19KcWpxbx3YXnGmMaaxI3GncafxqHGo2XGpcanxqnGq8atxq_Fu8WxZWzElGnFnMa1xpvGuMagxqLGj8a9xqjGqm_GrMauxanHgsW-cMS3bsaGxbLFtMW2xbjFpMSYxpV5xak-xanHoXNrx4XFv3Q7&c=BJqcgTuV6O&R)

Different Tag types:
[https://wiki.openstreetmap.org/wiki/Map_features](https://wiki.openstreetmap.org/wiki/Map_features)


## Apple Quarantine

Apple says the file is damaged and cannot be open it's because it has been quarantined it. 

Run the following command:

```
xattr -d com.apple.quarantine /Applications/HouseQuests.app
```

## 5. Making Icons

https://gist.github.com/jamieweavis/b4c394607641e1280d447deed5fc85fc

## 6. Code-signing.

Disable code-signing by setting the environment variable before creating the app.
```
export CSC_IDENTITY_AUTO_DISCOVERY=false
```

https://disable-gatekeeper.github.io/