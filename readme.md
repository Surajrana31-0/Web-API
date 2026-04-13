1. Start by initializing a new Node.js project:
npm init -y

2. Install Express as a dependency:
npm install express
Understanding Files.

Package.json

Information about the project 
Dependencies (External modules)
DevDependencies (Used in only development)
Scripts (To run the application)
Package-lock.json
Ensure a fixed version everywhere.
Helps in team collaboration.
Node_modules:
Holds all the dependencies files installed in the projects.
Project information
Scripts for starting projects in development and production mode.




Prerequisite
npm packages
npm i express zod
npm i -D typescript ts-node @types/node @types/express
package.json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "type": "commonjs",
  "devDependencies": {
    "@types/express": "^5.0.5",
    "@types/node": "^24.10.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3"
  },
  "dependencies": {
    "express": "^5.1.0",
    "zod": "^4.1.12"
  }
}
.gitignore
# Environment variables
.env
.env.*
!.env.example

# Dependencies
/node_modules

# TypeScript build output
/dist

# OS generated files
.DS_Store

# Test coverage
/coverage
typescript config (if not done)
npx tsc --init
tsconfig.json
{
  "compilerOptions": {
    "module": "nodenext",
    "target": "esnext",
    
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Relax these for flexibility:
    "strict": false,                           // Replaces all strict flags at once
    "noUncheckedIndexedAccess": false,         // Allow untyped array access
    "exactOptionalPropertyTypes": false,       // More lenient with optionals
    "noUncheckedSideEffectImports": false,     // Don't force side-effect imports explicit
    "verbatimModuleSyntax": false,             // Allows more import flexibility
    
    "skipLibCheck": true,                      // Skip checking definition files
    "isolatedModules": true,                   // Keeps stability
    "moduleDetection": "force",                // Keep for consistency
    
  }
}
