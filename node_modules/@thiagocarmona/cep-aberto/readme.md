# CepAberto

This is a Node.js package that provides a simple and straightforward way to access the CepAberto API, a Brazilian service that provides information about postal codes and addresses.

## Installation

You can install this package using npm:

```
npm i @thiagocarmona/cep-aberto
```

## Usage

First, you need to get an API token from CepAberto by registering on their website. Once you have the token, you can use it to create an instance of the CepAberto class:

```javascript
import CepAberto from 'cep-aberto';

const cepAberto = new CepAberto('your_api_token_here');
```

### Get address by postal code

You can get address information by postal code using the `getCepByNumber` method. It returns a `Promise` that resolves to a `CepResult` object if successful, or an empty object if there was an error.

```javascript
const address = await cepAberto.getCepByNumber('01001000');
console.log(address);
```

### Get postal code by coordinates

You can get postal code information by coordinates using the `getCepCoordinates` method. It returns a `Promise` that resolves to a `CepResult` object if successful, or an empty object if there was an error.

```javascript
const postalCode = await cepAberto.getCepByCoordinates('-23.5505', '-46.6333');
console.log(postalCode);
```

### Search for address by textual data

You can search for address information by textual data using the `searchCep` method. It returns a `Promise` that resolves to a `CepResult` object if successful, or an object with a `message` property if there was an error.

```javascript
const address = await cepAberto.searchCep({
  state: 'SP',
  city: 'São Paulo',
  neighborhood: 'Centro',
  logradouro: 'Rua Augusta'
});
console.log(address);
```

### Get cities by state

You can get a list of cities in a state using the `getCitiesByState` method. It returns a `Promise` that resolves to an array of `CitiesResult` objects if successful, or an empty array if there was an error.

```javascript
const cities = await cepAberto.getCitiesByState('SP');
console.log(cities);
```

### Update postal codes

You can update postal codes using the `updateCepbyNumber` method. It takes an array of postal codes and returns a `Promise` that resolves to an array of updated postal codes if successful, or an empty array if there was an error.

```javascript
const updatedCeps = await cepAberto.updateCepbyNumber(['01001000', '04105001']);
console.log(updatedCeps);
```

### Update API token

You can update the API token using the `updateToken` method.

```javascript
cepAberto.updateToken('your_new_api_token_here');
```

## License

This package is distributed under the MIT license. See the [LICENSE](LICENSE) file for more details.