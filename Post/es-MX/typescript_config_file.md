### Mi Soluciones <small>2018/10/13</small>
![Alt text](http://placehold.it/850x350)

# Que es el typescript config file
El archivo de configuracion de typescript con nombre tsconfig.json, es un archivo que indicate que ese es el direction raiz.

Un ejemplo del archivo de configuracion
``` json
{​
    "compilerOptions": {​
        "target": "es5",​
        "module": "system",​
        "moduleResolution": "node",​
        "sourceMap": true,​
        "emitDecoratorMetadata": true,​
        "experimentalDecorators": true,​
        "removeComments": false,​
        "noImplicitAny": false​
    },​
    "exclude": [​
        "node_modules",​
        "typings/main",​
        "typings/main.d.ts"​
    ]​
}
```

# Propiedades

## CompilerOptions
La propiedad compilerOptions puede ser omitida, en ese caso el compilador utilizara los valores por defecto.
La lista es muy extensa. 

Toda la lista de opciones esta listada [aqui](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

Veremos unas de las mas comunes

### target

Este comando es muy simple. Especifica el tipo de version de ECMAScript a utilizar, por defecto utiliza la version ES3 y para utilizar la ultima version disponible es ESNext. Aqui la lista de los valores disponibles al momento:
- ES3
- ES5
- ES6 / ES2015
- ES2016
- ES2017
- ES2018
- ES2019
- ES2020
- ESNext

### module


### moduleResolution

### sourceMap


### emitDecoratorMetadata


### experimentalDecorators

### removeComments

