# Example of connecting multiple docker-compose instances using docker network

`app_0` will call the `app_1` and `app_2` over the docker network using theirs service names declared within corresponding `docker-compose.yml`

## How to run

1. `chmod +x create_network.sh && ./create_network.sh`
2. `cd app_1 && docker-compose up`
3. `cd app_2 && docker-compose up`
4. `cd app_0 && docker-compose up`
5. done

![d-t-d-u-n](https://user-images.githubusercontent.com/31984256/34364847-23cf21f6-ea8a-11e7-9f24-2afd7a95e204.png)
