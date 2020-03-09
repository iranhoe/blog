# Document (NoSQL) Database

### Mongodb

#### Mongo Atlas

> Recomendation AWS is cheaper than GCP and Azure

Page: https://cloud.mongodb.com/
You dont need to add any payment method.

Storage:
- Free: 512 MB
- M5: 5GB / 25 Dollar Month
- M10: 10GB / ~59 Dollar Month (0.08/hr)

Developer Plan Starting $49 per Month

### Firebase (GCP)

Quotas: [Link](https://console.cloud.google.com/appengine/quotadetails?project=burnished-yeti-181214&authuser=0)

Storage: 
- Free: 5 GB
- 

### BigTable (GCP) 

### Cosmo DB


# Data SQL

> Solo una instancia con recursos compartidos, SSD General Purpose
>
> HPC = Enable High Performance Configuration

## SQL Server 

> GCP use version 2017

| Platform |  Size  | SSD Price    | Backup | vCPU | CPU/h     | RAM GB | Plan            | Server                |
|:--------:|:------:|:------------:|:------:|:----:|:---------:|:------:|:--------------- | :-------------------- |
| AWS RDS  |  20 GB | $  18.44 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  20 GB | $  22.34 USD |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  50 GB | $  21.88 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  50 GB | $  26.64 USD |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| GCP SQL  |  10 GB | $   4.02 USD |  NO    | 1    |           | 3.75   | N/A             | lowa (us-central1)    |
| GCP SQL  |  20 GB | $   7.32 USD |  YES   | 1    |           | 3.75   | N/A             | lowa (us-central1)    |
| GCP SQL  |  20 GB | $  13.03 USD |  YES   | 1    | HPC       | 3.75   | N/A             | lowa (us-central1)    |
| GCP SQL  |  50 GB | $  25.63 USD |  YES   | 1    | HPC       | 3.75   | N/A             | lowa (us-central1)    |
| Azure    |   2 GB | $  96.33 MXN |  N/A   | N/A  |  5 DTUs   | N/A    | N/A             | East US               |
| Azure    | 250 GB | $  96.33 MXN |  N/A   | N/A  | 10 DTUs   | N/A    | N/A             | East US               |
| Azure    |   1 GB | $   2.89 MXN |  N/A   | 1    | ?         | 3      | General Purpose | East US               |
| Azure    |  10 GB | $  28.85 MXN |  N/A   | 1    | ?         | 3      | General Purpose | East US               |
| Azure    |  20 GB | $  57.71 MXN |  N/A   | 1    | ?         | 3      | General Purpose | East US               |
| Azure    |  50 GB | $ 144.27 MXN |  N/A   | 1    | ?         | 3      | General Purpose | East US               |

## MySQL

> AWS Oracle and MariaDB have the same price as MySQL

| Platform       |  Size  | SSD Price    | Backup | vCPU | CPU/h     | RAM GB | Plan            | Server                |
|:--------------:|:------:|:------------:|:------:|:----:|:---------:|:------:|:--------------- | :-------------------- |
| AWS RDS        |  20 GB | $  14.78 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS        |  20 GB | $  16.68 USD |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS        |  50 GB | $  18.23 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS        |  50 GB | $  22.98 USD |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| GCP SQL        |  10 GB | $   2.06 USD |  NO    | 1    | ?         | 3.75   | db-f1-micro     | lowa (us-central1)    |
| GCP SQL        |  20 GB | $   5.36 USD |  YES   | 1    | ?         | 3.75   | db-f1-micro     | lowa (us-central1)    |
| GCP SQL        |  20 GB | $   9.12 USD |  YES   | 1    | HPC       | 3.75   | db-f1-micro     | lowa (us-central1)    |
| GCP SQL        |  50 GB | $  21.72 USD |  YES   | 1    | HPC       | 3.75   | db-f1-micro     | lowa (us-central1)    |
| 000webhost.com |  ? GB  |     Free     |  YES   | 1    | HPC       | 3.75   | db-f1-micro     | lowa (us-central1)    |

## PostgreSQL

> GCP PostgresSQL tiene el mismo precio que MySQL 

| Platform        |  Size  | SSD Price    | Backup | vCPU | CPU/h     | RAM GB | Plan            | Server                |
|:---------------:|:------:|:------------:|:------:|:----:|:---------:|:------:|:--------------- | :-------------------- |
| AWS RDS         |  20 GB | $  15.51 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS         |  20 GB | $  17.41 USD |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS         |  50 GB | $  18.96 USD |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS         |  50 GB | $  23.71 USD |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| elephantsql.com |  20 MB |     Free     |  YES   | 1    | 6/3.3 GHz | 1      | Free            | US East (N. Virginia) |