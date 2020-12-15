Para rodar utilize o "yarn start", para conectar com o servidor certifique-se de rodar primeiro o servidor utilizando os comandos especificados no arquivo server.

Utilização do certificado:

Para criar o certificado você vai precisar do Open SSL. Você pode instalar usando o chocolatey com os comandos: "choco install openssl". Importante rodar este comando na sua pasta do projeto.
Agora, vamos criar um arquivo de configuração, copie e cole o comando abaixo e salve num arquivo na sua pasta raiz do projeto com o seguinte nome: certificate.conf. Em seguida, o conteúdo a ser copiado:



[req]
distinguished_name = req_distinguished_name
x509_extensions = v3_req
prompt = no
[req_distinguished_name]
C = GB  # Enter 2 digit country code here
O = My Company # Enter company name
CN = localhost
[v3_req]
keyUsage = critical, digitalSignature, keyAgreement
extendedKeyUsage = serverAuth
subjectAltName = @alt_names
[alt_names]
DNS.1 = localhost



Em seguida, dê o seguinte comando para criar seu certificado e sua chave:

openssl req -x509 -newkey rsa:4096 -sha256 -keyout certificate.key -out certificate.crt -days 365 -config certificate.conf -new -nodes

Agora, vamos fazer tudo funcionar! :D
Na pasta raiz do projeto crie um arquivo .env e coloque o seguinte texto nele:

HTTPS=true

SSL_CRT_FILE=certificate.crt

SSL_KEY_FILE=certificate.key

Prontinho! Agora é só rodar um yarn start e estará tudo funcionando! #SQN

Ainda precisamos avisar o windows que o nosso certificado é confiável! :)

* No seu Windowsm abre o menu iniciar e pesquise por "certificados";
* Em seguida, "Gerenciar Certificados do Computador";
* Em seguida, " Certificações confiáveis";
* Agora clique com o botão direito em "Certificados" e selecione "Todos" -> "Importar".
* Selecione o arquivo de certificado criado na pasta do projeto e clique em next.
* Siga as telas seguintes para concluir a instalção!
 
 
 Você pode seguir esse mesmo tutorial em sua postagem original aqui:https://dev.to/wozzo/using-https-with-create-react-app-5337
 
 That's all folks! :D
 
 
                                                              Made with 💜 by carudev




