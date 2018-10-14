### Mi Soluciones <small>2018/10/13</small>
![Alt text](http://placehold.it/850x350)

# Capitulo 1

## 1.1-1 Give a real-world example that requires sorting or a real-world example that requires computing a convex hull.

Una lista de precios, una catalogo, basicamente cualquiere lista puede ser ordenada

### 1.1-2 Other than speed. what other measures of efficiency might one use in real-world.
Memoria

### 1.1-3 Select a data structure that you have seen previously, and discuss its strengths and limitations.

### 1.1-4 How are the shortest-path and traveling-salesman problem given above similar? How are they different?

### 1.1-5 Come up with a real-world problem in which only the best solution will do. Then come up with one in which a solution that is "approximately" the best is good enough.

# Capitulo 2

## 1.2-2 Give an example of an application that requires algorithmic content at the application level, and discus the function of the algorithms involved.

Una busqueda, por ejemplo encontrar producto en una lista y se puede extender a que los productos cumplan parametros requeridos

## 1.2-2 Suppose we are comparing implementations of insertion sort and merge sort on the same machine. For inputs of size, insertion sort run in 8n^2 steps, while merge sort run in 64n lg n steps. For which values of n does insertion sort beat merge sort?

Primero tenemos que ver que 

```
8n^2 < 64n lg n
```

Podemos dividir entre 8 para obtener una forumla mas sensilla

```
n^2 < 8n lg n
```

luego podemos ver que ambos se multiplican por n lo cual podemos quitar de ambos lados

n < 8lg n

pasamos el 8 del otro lado

n/8 < lgn

ahora la N que esta dividad por 8 lo pasamo al lado derecho, y tendremos una igualdad

1/8 = (lg n)/n

Con esto ya podemos buscar valores que sean menores a 1/8 para complir que Insertion Sort sea mejor que merge sort

Valores que gana Insertion Sort
2 <= n <= 43


## 1.2-3 What is the smallest value of n such that an algorithm whose running time is 100n^2 run faster than an algorithm whose running time is 2^n on the same machine?

Simplificamos la formula
2^n < 100n^2

(2^n)/100 < n^2

1/100 < n^2/(2^n)

Respuesta
n = 15