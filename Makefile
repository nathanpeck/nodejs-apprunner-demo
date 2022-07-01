export DOCKER_BUILDKIT=0

.PHONY: up build test

up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose build app
	docker-compose up --no-deps -d app

test:
	docker-compose build app
	docker-compose build integ
	docker-compose run --no-deps -d app
	docker-compose run --no-deps integ