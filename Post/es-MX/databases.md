# SQL y NoSQL

## Document (NoSQL) Database

> Pagos mensuales

### Mongo

| Plataforma  | Type       | Tamaño | Precio      | Backup | vCPU   | RAM GB | Plan          | Servidor                      |
|:-----------:|:----------:|:------:|:-----------:|:------:|:------:|:------:|:-------------:|:-----------------------------:|
| Mongo Atlas | MongoDb    | 512 MB |  Gratis     | NO     | Shared | Shared |  M0           | AWS, N. Virginia (us-east-1)  |
| Mongo Atlas | MongoDb    |   5 GB |   25.00 USD | YES    | Shared | Shared |  M5           | AWS, N. Virginia (us-east-1)  |
| Mongo Atlas | MongoDb    |  10 GB |  ~59.52 USD | YES    |  2     | 2      |  M10          | AWS, N. Virginia (us-east-1)  |
| Mongo Atlas | MongoDb    | 100 GB |  ~96.72 USD | YES    |  2     | 2      |  M10          | AWS, N. Virginia (us-east-1)  |
| Mongo Atlas | MongoDb    | 100 GB | ~193.44 USD | YES    |  2     | 2      |  M20          | AWS, N. Virginia (us-east-1)  |
| AWS         | MongoDb    |   5 GB |  202.21 USD | YES    |  ??    | 2      |  db r4.large* | US East (N. virginia)         |
| AWS         | MongoDb    | 100 GB |  212.71 USD | YES    |  ??    | 2      |  db r4.large* | US East (N. virginia)         |

> \* "large" son planes caros en cualquier tipo de instancia, pero es la mas económica disponible

 > test

### FireStore en GCP

La calculadora de firebase y GPC dicen una cantidad diferente de lecturas y escrituras gratis \
GPC da 50k gratis de lectura 20k de escritura.

Datos por la pagina de [firebase](https://firebase.google.com/pricing/#blaze-calculator)
Escritura: $0.18/100k
Lectura:   $0.06/100k
Eliminar:  $0.02/100k
Plan: Pay as you Go

Para Generar una cantidad de costo en 2 Millones de Lectura/Escritura/Eliminación sobre la cantidad ya gratuita de GCP se utilizaron los siguientes valores en [GPC](https://cloud.google.com/products/calculator/#id=f7b13910-d594-4601-9be2-70771e12c0d1)

* Lectura: 115,754 por dia
* Escritura: 85,754 por dia
* Eliminación: 85,754 por dia
* Servidor: US (multi-regional) (us)

| Tamaño | Precio    |
|:------:|:---------:|
|   1 GB |  Gratis*  |
|   1 GB |  5.20 USD |
|   2 GB |  5.38 USD |
|   5 GB |  5.92 USD |
| 100 GB | 23.02 USD |

> Los precios no incluyen en [Egress](https://cloud.google.com/compute/pricing#network) \
> \* sin pasar la cuota de transferencia

### Firebase

Firebase no se encuentra dentro de GCP, esta en su propia plataforma https://firebase.google.com/

| Cantidad | Tipo           | Precio/M  |
|---------:|:--------------:|----------:|
| 100 GB   | Transferencia  | $  90 USD |
|  10 GB   | Almacenamiento | $  45 USD |
|  10 GB   | Transferencia  | Gratis    |
|   1 GB   | Almacenamiento | $  45 USD |

### Otros

| Plataforma    | Type       | Tamaño | Precio       | Escritura  | Lectura    | Backup | vCPU   | RAM GB | Plan           | Servidor                 |
|:-------------:|:----------:|:------:|:------------:|:----------:|:----------:|:------:|:------:|:------:|:--------------:|:------------------------:|
| AWS           | DynamoDB*  |  25 GB | Gratis       | $0.??/100k | $0.??/100k | YES    |  ??    | 2      |  Free Tier     | US East (N. virginia)    |
| AWS           | DynamoDB*  |   5 GB |   ~27.50 USD | $0.??/100k | $0.??/100k | YES    |  ??    | 2      |  ??            | US East (N. virginia)    |
| AWS           | DynamoDB*  |  10 GB |   ~28.00 USD | $0.??/100k | $0.??/100k | YES    |  ??    | 2      |  ??            | US East (N. virginia)    |
| GCP           | BigTable** |   5 GB | 1,423.63 USD | $0.??/100k | $0.??/100k | ??     |  ??    | ?      |  ??            |
| Azure         | Cosmo Db   |   5 GB | Gratis       | $0.??/100k | $0.??/100k | ??     |  ??    | ?      |  ??            |

> DynamoDB FREE TIER: Each month, Amazon DynamoDB users pay no charges on the first 25GB of storage, the first 2.5 million DynamoDB Streams read request units, as well as 25 write capacity unit and 25 read capacity units of provisioned capacity. Free tier also provides 25 replicated write capacity units to deploy DynamoDB Global Tables in up to 2 AWS regions. \
>
> \* Documentos alrededor de 5kb con Ond-Demand con 2 millones de lecturas y transacciones al mes. \
> ** Big Table es recomendada para tamaños de 1TB

## Data SQL

> Solo una instancia con recursos compartidos, SSD General Purpose, pagos mensuales.
>
> HPC = Enable High Performance Configuration

### SQL Server

> GCP use version 2017

| Plataforma | Tamaño | SSD precio   | Backup | vCPU | CPU/h     | RAM GB | Plan            | Servidor              |
|:----------:|:------:|:------------:|:------:|:----:|:---------:|:------:|:--------------- | :-------------------- |
| AWS RDS    |  20 GB | $  18.44 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS    |  20 GB | $  22.34 USD |  SI    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS    |  50 GB | $  21.88 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS    |  50 GB | $  26.64 USD |  SI    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| GCP SQL    |  10 GB | $   4.02 USD |  NO    | 1    |           | 3.75   | N/A             | lowa (us-central1)    |
| GCP SQL    |  20 GB | $   7.32 USD |  SI    | 1    |           | 3.75   | N/A             | lowa (us-central1)    |
| GCP SQL    |  20 GB | $  13.03 USD |  SI    | 1    | HPC       | 3.75   | N/A             | lowa (us-central1)    |
| GCP SQL    |  50 GB | $  25.63 USD |  SI    | 1    | HPC       | 3.75   | N/A             | lowa (us-central1)    |
| Azure      |   2 GB | $  96.33 MXN |  N/A   | N/A  |  5 DTUs   | N/A    | N/A             | East US               |
| Azure      | 250 GB | $  96.33 MXN |  N/A   | N/A  | 10 DTUs   | N/A    | N/A             | East US               |
| Azure      |   1 GB | $   2.89 MXN |  N/A   | 1    | ?         | 3      | General Purpose | East US               |
| Azure      |  10 GB | $  28.85 MXN |  N/A   | 1    | ?         | 3      | General Purpose | East US               |
| Azure      |  20 GB | $  57.71 MXN |  N/A   | 1    | ?         | 3      | General Purpose | East US               |
| Azure      |  50 GB | $ 144.27 MXN |  N/A   | 1    | ?         | 3      | General Purpose | East US               |

### MySQL

| Plataforma     | Tamaño | SSD precio   | Backup | vCPU | CPU/h     | RAM GB | Plan            | Servidor              |
|:--------------:|:------:|:------------:|:------:|:----:|:---------:|:------:|:--------------- | :-------------------- |
| AWS RDS        |  20 GB | $  14.78 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS        |  20 GB | $  16.68 USD |  SI    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS        |  50 GB | $  18.23 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS        |  50 GB | $  22.98 USD |  SI    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| GCP SQL        |  10 GB | $   2.06 USD |  NO    | 1    | ?         | 3.75   | db-f1-micro     | lowa (us-central1)    |
| GCP SQL        |  20 GB | $   5.36 USD |  SI    | 1    | ?         | 3.75   | db-f1-micro     | lowa (us-central1)    |
| GCP SQL        |  20 GB | $   9.12 USD |  SI    | 1    | HPC       | 3.75   | db-f1-micro     | lowa (us-central1)    |
| GCP SQL        |  50 GB | $  21.72 USD |  SI    | 1    | HPC       | 3.75   | db-f1-micro     | lowa (us-central1)    |
| 000webhost.com |  ? GB  |    Gratis    |  SI    | 1    | HPC       | 3.75   | db-f1-micro     | lowa (us-central1)    |

### PostgreSQL

Servidor: US East (N. Virginia)

> GCP PostgresSQL tiene el mismo precio que MySQL

| Plataforma      | Tamaño | SSD Precio   | Backup | vCPU | CPU/h     | RAM GB | Plan            |
|:---------------:|:------:|:------------:|:------:|:----:|:---------:|:------:|:--------------- |
| AWS RDS         |  20 GB | $  15.51 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     |
| AWS RDS         |  20 GB | $  17.41 USD |  SI    | 1    | 6/3.3 GHz | 1      | db.t2.micro     |
| AWS RDS         |  50 GB | $  18.96 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     |
| AWS RDS         |  50 GB | $  23.71 USD |  SI    | 1    | 6/3.3 GHz | 1      | db.t2.micro     |
| elephantsql.com |  20 MB |    Gratis    |  SI    | 1    | ?         | ?      | Gratis          |

### MariaDB y Oracle

> AWS Oracle y MariaDB tienen el mismo precio que MySQL

### Otras por ver

* Spanner
