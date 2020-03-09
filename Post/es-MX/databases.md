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

#### elephantsql

Page: https://www.elephantsql.com/plans.html

> Just 1 instance with resources shared, SSD General Purpose
>
> HPC = Enable High Performance Configuration
>
> M = Pesos mexicanos
>
> AWS Oracle and MariaDB have the same price as MySQL
>
> GCP PostgresSQL has the same price as MySQL 

| Platform |  Size  | SSD Price  | Backup | vCPU | CPU/h     | RAM GB | Plan            | Server                |
|:--------:|:------:|:----------:|:------:|:----:|:---------:|:------:|:--------------- | :-------------------- |
|||||| **SQL Server Express** ||
| AWS RDS  |  20 GB | $  18.44   |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  20 GB | $  22.34   |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  50 GB | $  21.88   |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  50 GB | $  26.64   |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| GCP SQL  |  10 GB | $   4.02   |  NO    | 1    |           | 3.75   | N/A             | lowa (us-central1)    |
| GCP SQL  |  20 GB | $   7.32   |  YES   | 1    |           | 3.75   | N/A             | lowa (us-central1)    |
| GCP SQL  |  20 GB | $  13.03   |  YES   | 1    | HPC       | 3.75   | N/A             | lowa (us-central1)    |
| GCP SQL  |  50 GB | $  25.63   |  YES   | 1    | HPC       | 3.75   | N/A             | lowa (us-central1)    |
| Azure    |   2 GB | $  96.33 M |  N/A   | N/A  |  5 DTUs   | N/A    | N/A             | East US               |
| Azure    | 250 GB | $  96.33 M |  N/A   | N/A  | 10 DTUs   | N/A    | N/A             | East US               |
| Azure    |   1 GB | $   2.89 M |  N/A   | 1    | ?         | 3      | General Purpose | East US               |
| Azure    |  10 GB | $  28.85 M |  N/A   | 1    | ?         | 3      | General Purpose | East US               |
| Azure    |  20 GB | $  57.71 M |  N/A   | 1    | ?         | 3      | General Purpose | East US               |
| Azure    |  50 GB | $ 144.27 M |  N/A   | 1    | ?         | 3      | General Purpose | East US               |
|||||| **MySQL** ||
| AWS RDS  |  20 GB | $  14.78   |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  20 GB | $  16.68   |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  50 GB | $  18.23   |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  50 GB | $  22.98   |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| GCP SQL  |  10 GB | $   2.06   |  NO    | 1    | ?         | 3.75   | db-f1-micro     | lowa (us-central1)    |
| GCP SQL  |  20 GB | $   5.36   |  YES   | 1    | ?         | 3.75   | db-f1-micro     | lowa (us-central1)    |
| GCP SQL  |  20 GB | $   9.12   |  YES   | 1    | HPC       | 3.75   | db-f1-micro     | lowa (us-central1)    |
| GCP SQL  |  50 GB | $  21.72   |  YES   | 1    | HPC       | 3.75   | db-f1-micro     | lowa (us-central1)    |
| 000webhost.com |  ? GB | Free  |  YES   | 1    | HPC       | 3.75   | db-f1-micro     | lowa (us-central1)    |
|||||| **PostgreSQL** ||
| AWS RDS  |  20 GB | $  15.51   |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  20 GB | $  17.41   |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  50 GB | $  18.96   |  NO    | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| AWS RDS  |  50 GB | $  23.71   |  YES   | 1    | 6/3.3 GHz | 1      | db.t2.micro     | US East (N. Virginia) |
| elephantsql.com| 20 MB | Free  |  YES   | 1    | 6/3.3 GHz | 1      | Free            | US East (N. Virginia) |