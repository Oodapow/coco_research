# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Add Query Service.
- Introduce COCO Datatype Controller for COCO database queries.
- Introduce COCO dataype manipulation features. <- TO-DO: what operation do we need for COCO datatypes?

- Set-up COCO database (MongoDB).
- SpringBoot connection to COCO database.
- Import COCO datatypes and introduce Model calsses with coresponding properties.

- Set-up Log database (PostgreSQL).
- SprinBoot connection to Log database.
- Implement Log Model with coresponding properties (timestamp, service, operation, parameters).
- Add Log Controller for log database queries.
- Introduce log entries manipulation functionalities: add, remove, update.

- Tagging Service.
- TO-DO: what functionalities?

- Public availability for routes through reverse-proxy (Ngnix).
- Management functionalitites (supervision, deployment, replication) through Kubernetes Dashboard.
- Service repository separation.
- CI/CD functionality.

## [1.0.0] - 2021-05-08
### Added
- Gateway Service.
- Gateway rerouting for Query Service routes, Tagging Service routes, User Service routes, Client Service ("User Interface" service) routes. <-checked these, no longer there -> still needed? TO-DO ask the guys about it.
- Login Controller for log in functionality.
- User authentication and authorization.
- Password encription through BCrypt encoding.
- Form validation for login screen (user credentials).
- Form validation for registration screen (user credentials).
- Admin role for development environment.


- User database (PostreSQL).
- SpringBoot connection to User database.
- User Model with properties (id, username, password).

- User Service.
- User Controller for user database queries.
- Function to fetch users from database by provided username.
- Functionalty to add new user to database.
- Functionalty to remove user from database.

- P4Admin web-interface.
- Auto confirguration for PostgreSQL database provisioning for P4Admin.

- Client Service.
- Login page.
- Home page for user.
- New user registration page.
- TO-DO - fetch functionalities commited by Gabi.


### Changed
- Password encryption using X over Y. - TO-DO: Ask Edi.
- Started using only User Entity and dropping User Reopository? TO-DO: verify claim
