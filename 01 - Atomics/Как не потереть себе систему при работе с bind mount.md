#prog/docker 

- Не монтировать `/`
- `docker run -v host_path:container_path:ro image` (read only)
- USER в Dockerfile, --user при запуске контейнера (можно работать с пользователями)
