## 🌟 WordPress Wonderland with MariaDB 🌈

Embark on an exhilarating journey into the WordPress Wonderland, now powered by the enchanting MariaDB! 🚀 This example brings to life a captivating WordPress setup, with a dash of magic from MariaDB. Feel free to swap the enchantment to MySQL by simply unraveling a line in the mystical `compose.yaml` file.

### ✨ Project Structure

```plaintext
.
├── compose.yml          # 🌐 Docker Compose configuration orchestrating the WordPress magic.
├── .env                 # 🗝️ Environment file holding configuration secrets for MySQL/MariaDB.
├── nginx/               # 🌐 Nginx configuration directory, shaping the entrance to the WordPress realm.
│  └─ default.conf       # 🖌️ Custom Nginx configuration, optimizing the front-end experience.
├── wordpress/           # 🌐 WordPress configuration directory, defining the ambiance of the digital space.
│  └─ 000-default.conf   # 🖌️ Tailored WordPress configuration for a rich and engaging content experience.
├── db/                  # 🌐 MySQL/MariaDB initialization script directory, setting the stage for database marvels.
│  └─ init.sql           # 🖌️ MySQL/MariaDB initialization script, creating the enchanted database realm.
```

### 🎭 `compose.yml` - The Magic Potion

```yaml
version: '3'

services:
  nginx:
    image: nginx:alpine3.18-slim
    ports:
      - "80:80"
    ...
  wordpress:
    image: wordpress:latest
    restart: always
    ...
  db:
    # 🧙‍♀️ MariaDB image supporting both amd64 & arm64 architecture
    image: mariadb:11.0.3
    # 🧙‍♂️ If you fancy MySQL, just uncomment the line below
    # image: mysql:8.1.0
    ...
```

### 🚀 Deploy with Docker Spells

```bash
docker-compose up -d
```

Watch in awe as a network and a magical volume come to life, deploying the enchanted containers...

```bash
✔ Network compose-wordpress-mysql_default         Created         0.0s
✔ Volume "compose-wordpress-mysql_db-data"        Created         0.0s
✔ Container compose-wordpress-mysql-db-1          Started         0.0s
✔ Container compose-wordpress-mysql-wordpress-1   Started         0.0s
✔ Container compose-wordpress-mysql-nginx-1       Started         0.1s
```

### ✨ Expected Spellbinding Result

Peer into the mystic realm and inspect the port mapping:

```bash
$ docker-compose ps
NAME                                  IMAGE                    COMMAND                  SERVICE             CREATED              STATUS              PORTS
compose-wordpress-mysql-db-1          mariadb:11.0.3           "docker-entrypoint.s…"   db                  About a minute ago   Up About a minute   3306/tcp
compose-wordpress-mysql-nginx-1       nginx:alpine3.18-slim    "/docker-entrypoint.…"   nginx               About a minute ago   Up About a minute   0.0.0.0:80->80/tcp, :::80->80/tcp
compose-wordpress-mysql-wordpress-1   wordpress:6.3.1-php8.2   "docker-entrypoint.s…"   wordpress           About a minute ago   Up About a minute   80/tcp
```

Take a magic carpet ride to `http://localhost:80` in your web browser to witness the enchanting WordPress realm.

![WordPress](./output.jpg)

### 🛑 Stop the Magic, Remove the Spellbound Containers

```bash
docker-compose down
```

To erase all traces of the enchanted WordPress data, including the named volumes:

```bash
docker-compose down -v
```

Your WordPress Wonderland with MariaDB or MySQL is now ready for you to shape and mold as you please. 🌟 Let the creativity soar, and may your digital adventures be as boundless as the stars! 🌌
