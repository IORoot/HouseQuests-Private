# Advanced Property Search v0.1.15.

<!-- vscode-markdown-toc -->
* 1. [Changes](#Changes)
* 2. [Demo Code](#DemoCode)
* 3. [Release Management](#ReleaseManagement)
	* 3.1. [Publish release on github](#Publishreleaseongithub)
* 4. [Overpass Turbo](#OverpassTurbo)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  1. <a name='Changes'></a>Changes

- Release Management

##  2. <a name='DemoCode'></a>Demo Code

```
ccc8f4e8fb7e8c9d5b52673faca84322cfed8e5b76b4634d978edf06f8e13332
```

##  3. <a name='ReleaseManagement'></a>Release Management

To create a new release of the APS electron app, you can run:
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

2. Push the tags to github

```bash
git push --tags
```

The automated github action will build the windows and mac distributable files and add it onto the 'releases' page.







##  4. <a name='OverpassTurbo'></a>Overpass Turbo

[http://overpass-turbo.eu/](http://overpass-turbo.eu/)
This is a very useful API for getting results and exporting as JSON. 
It uses the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) to get it's data.

For example:
[Cafes](http://overpass-turbo.eu/?q=LyoKVGhpcyBoYcSGYmVlbiBnxI1lcmF0ZWQgYnkgdGhlIG92xJJwxIlzLXR1cmJvIHdpemFyZC7EgsSdxJ9yaWdpbmFsIHNlxLBjaMSsxIk6CsOiwoDCnGNhZmXFiMKdCiovCltvdXQ6anNvbl1bdGltZcWWxZgyNV07Ci8vxI_ElMSdciByZXN1bHRzCigKICDFqyBxdcSSxJrEo3J0IGZvcjogxYjFisWMxY7CgMWQxbxub2RlWyJhxaJuaXR5Ij0ixYvFjSJdKHt7YsSqeH19KcWpxbx3YXnGmMaaxI3GncafxqHGo2XGpcanxqnGq8atxq_Fu8WxZWzElGnFnMa1xpvGuMagxqLGj8a9xqjGqm_GrMauxanHgsW-cMS3bsaGxbLFtMW2xbjFpMSYxpV5xak-xanHoXNrx4XFv3Q7&c=BJqcgTuV6O&R)

Different Tag types:
[https://wiki.openstreetmap.org/wiki/Map_features](https://wiki.openstreetmap.org/wiki/Map_features)


