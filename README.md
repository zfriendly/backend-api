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

`/restaurants` - Queries all restaurants in the API.

`/restaurants/:city` - Queries all restaurants in the specified city.

`/stars/:michelinStars` - Queries all restaurants by their Michelin star rating (1 through 3).

`/restaurants/:city/stars/:michelinStars` - Queries all restaurants in a specific city by their Michelin star rating.

`/restaurants/price/:price` - Queries all restaurants in the API by their price-point (between $-$\$\$\$\$).

#### Museums:

`/museums` - Queries all museums in the API.

`/museums/:city` - Queries all museums in the specified city.

#### Cities:

`/` - Queries all cities in the API.

`/:city` - Queries specific cities, returnining IDs of all the museums and restaurants in that city.

## POST Requests:

#### Restaurants:

`/restaurant`

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

`/museum`

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

`/city`

City model format:

```
city: String,
restaurants: [],
museums: []
```

### Authentication:

Not required! Feel free to enjoy.

### Author:

- Zack Friendly
