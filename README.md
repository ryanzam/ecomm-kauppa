<h1 align="center"> E-Kauppa</h1>
<p align="center">A NextJS Ecommerce Application</p>
<div align="center">
  <img alt="last-commit" src="https://img.shields.io/github/last-commit/ryanzam/ecomm-kauppa?style=flat&amp;logo=git&amp;logoColor=white&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
  <img alt="repo-top-language" src="https://img.shields.io/github/languages/top/ryanzam/ecomm-kauppa?style=flat&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
  <img alt="repo-language-count" src="https://img.shields.io/github/languages/count/ryanzam/ecomm-kauppa?style=flat&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">

<p><em>Built with the tools and technologies:</em></p>

<img alt="NextJs" src="https://img.shields.io/badge/next.js-000000?style=flat&amp;logo=TypeScript&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="npm" src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&amp;logo=npm&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&amp;logo=JavaScript&amp;logoColor=black" class="inline-block mx-1" style="margin: 0px 2px;">
<br>
<img alt="React" src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&amp;logo=React&amp;logoColor=black" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&amp;logo=TypeScript&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Mongoose" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat&amp;logo=TypeScript&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&amp;logo=ESLint&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Axios" src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&amp;logo=Axios&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="datefns" src="https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss?style=flat&amp;logo=date-fns&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
</div>
</div>

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)

## Overview

eComm-Kauppa is a robust, scalable e-commerce platform designed to provide a seamless shopping experience. Built with modern web technologies, it offers features like product management, user authentication, and secure checkout processes.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.x or later
- **npm**: v9.x or later
- **PostgreSQL**: v15.x or later
- **Git**: For cloning the repository

### Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ryanzam/ecomm-kauppa.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd ecomm-kauppa
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the root directory and configure it with your PostgreSQL credentials and other necessary settings (refer to `.env.example`).

5. **Initialize the database**:
   ```bash
   npm run migrate
   ```

6. **Start the development server**:
   ```bash
   npm run dev
   ```

## Usage

After starting the server, access the application at `http://localhost:3000`. Refer to the [wiki](https://github.com/ryanzam/ecomm-kauppa/wiki) for detailed usage instructions and API endpoints.

## Development

- **Code Style**: Follow ESLint and Prettier standards (configured in the project).
- **Build**: Run `npm run build` to create a production build.
- **Linting**: Use `npm run lint` to check code quality.

## Testing

Run tests with Jest:
```bash
npm test
```

## Contributing

We welcome contributions! Please fork the repository and submit pull requests. Ensure you adhere to the coding standards and include tests where applicable. See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.
