# Back-end API - City Explorer API

### Baseline URL - http://localhost:3000/

### How to query the API:

#### City Options:

- Chicago
- Los Angeles
- New York City
- San Francisco
- Washington

## GET Requests:

#### Restaurants:

`http://localhost:3000/restaurants` - Queries all restaurants in the API.

`http://localhost:3000/restaurants/:city` - Queries all restaurants in the specified city.

`http://localhost:3000/stars/:michelinStars` - Queries all restaurants by their Michelin star rating (1 through 3).

`http://localhost:3000/restaurants/:city/stars/:michelinStars` - Queries all restaurants in a specific city by their Michelin star rating.

`http://localhost:3000/restaurants/price/:price` - Queries all restaurants in the API by their price-point (between $-$\$\$\$\$).

#### Museums:

`http://localhost:3000/museums` - Queries all museums in the API.

`http://localhost:3000/museums/:city` - Queries all museums in the specified city.

#### Cities:

`http://localhost:3000/` - Queries all cities in the API.

`http://localhost:3000/:city` - Queries specific cities, returnining IDs of all the museums and restaurants in that city.

## POST Requests:

#### Restaurants:

`http://localhost:3000/restaurant`

Restaurant model format:

```
name: String,
michelinStars: Number,
city: String,
state: String,
latitude: Number,
longitude: Number,
zipCode: Number,
cuisine: String,
price: String,
url: String
```

#### Museums:

`http://localhost:3000/museum`

Museum model format:

```
name: String,
type: String,
city: String,
state: String,
latitude: Number,
longitude: Number,
zipCode: Number,
phoneNumber: Number
```

#### Cities:

`http://localhost:3000/city`

City model format:

```
city: String,
restaurants: [],
museums: []
```
