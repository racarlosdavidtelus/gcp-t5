## Cloud SQL
```sh
# Comando para crear la instancia de MySQL
gcloud sql instances create mypicz \
   --database-version=MYSQL_5_7 --cpu=2 --memory=4GB \
   --region=us-central1 --root-password=p2sswrd123Delta

# Comando para crear un usuario
gcloud sql users create carlosdavid --host=% \
   --instance=mypicz --password=foxtrot321

# Comando para ver info de la instacia
gcloud sql instances describe mypicz

```

## Cloud Function
```sh
# Comando preparacion de la funcion
mkdir function
cd function
touch index.js
npm init
npm install escape-html
npm install @google-cloud/functions-framework
npm install mysql
npm install dotenv

# Comando para realizar el despligue de la cloud function
gcloud functions deploy userHttp --runtime nodejs16 --trigger-http --allow-unauthenticated
```




# Configuraciones y Referencias
```sh
# ------- Configurar el service acount e info de la conexion desde la function a cloud sql
https://cloud.google.com/functions/docs/create-deploy-http-nodejs#creating_a_gcp_project_using_cloud_sdk
https://cloud.google.com/sql/docs/mysql/connect-functions?hl=es-419
# HABILITAR LA API DE CLOUD SQL
# HABILITAR LA API CLOUD FUNCTION

# ---------- Ejemplo cloud function  --------------#
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
gcloud functions deploy helloGET \
--runtime nodejs16 --trigger-http --allow-unauthenticated

# --------- CLI de google --------------------------#
# Descargar el tar y descomprimir
./google-cloud-sdk/install.sh

./google-cloud-sdk/bin/gcloud init

```