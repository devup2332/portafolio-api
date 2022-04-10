build-dev:
	docker-compose -f docker-compose.dev.yml build
run-dev:
	docker-compose -f docker-compose.dev.yml up 
build-prod:
	docker-compose -f docker-compose.prod.yml build
run-prod:
	docker-compose -f docker-compose.prod.yml up 

run-db:
	docker-compose -f docker-compose.dev-windows.yml up -d --remove-orphans && yarn dev
