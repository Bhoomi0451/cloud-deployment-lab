

\# Cloud Deployment Lab



\## 1. Project Overview



This project demonstrates how to containerize and deploy a Node.js web application using Docker, GitHub, and AWS EC2.



The application displays a welcome message, the developer's name, and the application version.



\## 2. Technologies Used



\- Node.js

\- Express.js

\- Docker

\- Git and GitHub

\- AWS EC2



\## 3. Application Features



\- Displays a welcome message.

\- Displays the developer's name.

\- Displays application version 1.0.0.

\- Runs inside a Docker container.

\- Can be accessed through a browser using a public IP address after EC2 deployment.



\## 4. Project Structure



```text

cloud-deployment-lab/

├── server.js

├── package.json

├── package-lock.json

├── Dockerfile

├── .gitignore

└── README.md

```



\## 5. Run Locally



Install Node.js, then execute:



```bash

npm install

node server.js

```



Open http://localhost:3000 in your browser.



\## 6. Docker Setup



Build the Docker image:



```bash

docker build -t cloud-deployment-lab:v1 .

```



Run the container:



```bash

docker run -d --name cloud-lab-app -p 3001:3000 cloud-deployment-lab:v1

```



Open http://localhost:3001.



Check running containers:



```bash

docker ps

```



View application logs:



```bash

docker logs cloud-lab-app

```



Stop and remove the container:



```bash

docker stop cloud-lab-app

docker rm cloud-lab-app

```



\## 7. GitHub Repository



Repository: https://github.com/Bhoomi0451/cloud-deployment-lab



The source code and Docker configuration are maintained in GitHub.



\## 8. AWS EC2 Deployment



1\. Launch an EC2 instance using an appropriate Linux image.

2\. Configure SSH access and connect to the instance.

3\. Install Git and Docker.

4\. Clone this repository:



```bash

git clone https://github.com/Bhoomi0451/cloud-deployment-lab.git

cd cloud-deployment-lab

```



5\. Build the Docker image:



```bash

sudo docker build -t cloud-deployment-lab:v1 .

```



6\. Run the application:



```bash

sudo docker run -d --name cloud-lab-app -p 80:3000 cloud-deployment-lab:v1

```



7\. Configure the EC2 security group's inbound rules to allow HTTP traffic on TCP port 80 from the required client IP ranges.

8\. Open `http://EC2-PUBLIC-IP` in a browser, replacing `EC2-PUBLIC-IP` with the actual public IPv4 address of the instance.



\## 9. Troubleshooting



\- \*\*Port already allocated:\*\* Use a different available host port or stop the container occupying the port.

\- \*\*Container exits unexpectedly:\*\* Inspect logs with `docker logs cloud-lab-app`.

\- \*\*Application inaccessible:\*\* Verify that the container is running, the port mapping is correct, and the security group permits inbound HTTP traffic.

\- \*\*Git push fails:\*\* Verify the repository URL, branch, and GitHub authentication.

\- \*\*Docker command permission denied on Linux:\*\* Use `sudo` where appropriate.



\## 10. Deployment Evidence



Add screenshots showing:



\- The application running locally.

\- The running Docker container.

\- The GitHub repository containing the project files.

\- The application accessible through the EC2 public IP address.



\## 11. Issues Encountered and Resolutions



During local testing, port 3000 was already allocated by another Docker container. The application was successfully run using host port 3001 mapped to container port 3000.



Other deployment issues and their resolutions should be recorded here after completing the AWS deployment.



\## 12. Conclusion



This project demonstrates the process of developing a web application, packaging it using Docker, maintaining source code in GitHub, and deploying it on AWS EC2 for public access.



