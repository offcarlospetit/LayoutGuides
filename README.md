# Grid System Layout

Grid System Layout es un pequeño proyecto pensado para ayudar a los desarrolladores y diseñadores. Mediante esta librería se podría ver una grilla personalizable con la cual apoyarse a la hora de crear interfaces y así lograr una mayor precisión a la hora de darle vida a los diseños.

## Installation

Usando npm 

```bash
npm i @offcarlospetit/gridsystem
```
Usando yarn

```bash
yarn add @offcarlospetit/gridsystem
```

### Basic Usage
```jsx

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import GridSystem from '@offcarlospetit/gridsystem';


class App extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          // Aqui Tu Increible UI
        </SafeAreaView>
        <GridSystem />
      </>
    )
  }
}
```

## Contributing
Pull requests son bienvenidos. Para cambios importantes, abra primero un issue para analizar qué le gustaría cambiar o agregar. 


## License
[MIT](https://choosealicense.com/licenses/mit/)
