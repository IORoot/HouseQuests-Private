# Demo Code

```
ccc8f4e8fb7e8c9d5b52673faca84322cfed8e5b76b4634d978edf06f8e13332
```

# Advanced Property Search Project.

* 1. [Keys](#Keys)
* 2. [Things I want to do first](#ThingsIwanttodofirst)
* 3. [Overpass Turbo](#OverpassTurbo)
* 4. [Features](#Features)
* 5. [Layers to add](#Layerstoadd)
* 6. [Other APIs / Links](#OtherAPIsLinks)



##  2. <a name='ThingsIwanttodofirst'></a>Things I want to do first
- Tasks now in trello.


##  3. <a name='OverpassTurbo'></a>Overpass Turbo

[http://overpass-turbo.eu/](http://overpass-turbo.eu/)
This is a very useful API for getting results and exporting as JSON. 
It uses the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) to get it's data.

For example:
[Cafes](http://overpass-turbo.eu/?q=LyoKVGhpcyBoYcSGYmVlbiBnxI1lcmF0ZWQgYnkgdGhlIG92xJJwxIlzLXR1cmJvIHdpemFyZC7EgsSdxJ9yaWdpbmFsIHNlxLBjaMSsxIk6CsOiwoDCnGNhZmXFiMKdCiovCltvdXQ6anNvbl1bdGltZcWWxZgyNV07Ci8vxI_ElMSdciByZXN1bHRzCigKICDFqyBxdcSSxJrEo3J0IGZvcjogxYjFisWMxY7CgMWQxbxub2RlWyJhxaJuaXR5Ij0ixYvFjSJdKHt7YsSqeH19KcWpxbx3YXnGmMaaxI3GncafxqHGo2XGpcanxqnGq8atxq_Fu8WxZWzElGnFnMa1xpvGuMagxqLGj8a9xqjGqm_GrMauxanHgsW-cMS3bsaGxbLFtMW2xbjFpMSYxpV5xak-xanHoXNrx4XFv3Q7&c=BJqcgTuV6O&R)

Different Tag types:
[https://wiki.openstreetmap.org/wiki/Map_features](https://wiki.openstreetmap.org/wiki/Map_features)


## Release Management

To create a new release of the APS electron app, you can run:
```
npm run release
```
This will place all new distribution files into the `./dist` folder.

### Publish release on github 

This is a multi-step process.

1. Give a version release tag to the local repo.

```bash
git tag v0.1.15      # Add a tag to current branch
```

Other commands:
```bash
git tag             # List all tags on current branch
git tag -d <NAME>   # Delete tag
```

2. Push the tags to github

```bash
git push --tags
```










##  4. <a name='Features'></a>Features

- [ ] House Report

    - Property
      - [ ] Borough
      - [ ] EPC
      - [ ] Ground Rent
      - [ ] Service Charge
      - [ ] Length of Lease
      - [ ] Previously known paid prices 
      - [ ] History of currently listed price (has it gone down since being listed?)
      - [ ] Elevation of building for flats?
      - [ ] planning permissions
      - [ ] Windows / Sunlight / House Orientation
      - [ ] Price Change History 
      -  


    - Transport
      - [ ] Travel Time to specific location


    - Local Area
      - [ ] Prices of surrounding property. 
        - Price vs Avg Street price of properties
        - Price vs Avg Area price of properties
        - Price vs National Avg
      - [ ] Price of any houses up for sale in surrounding area.
      - [ ] any construction near
      - [ ] Closest Schools + ofsted rating
      - [ ] Closest Stations
      - [ ] Census Data
      - [ ] Delivery services (deliveroo, uber-eats, just-eat, etc)
      - [ ] Pollen
      - [ ] air quality
