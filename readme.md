# Typescript
TypeScript is JavaScript with syntax for types.
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

# Implementation
```bash
npm init -y
```

# Dependencies
```bash
npm install -D typescript ts-node @types/node
```

# Initialization
```bash
npx tsc --init
```

# Minimal Tsconfig
```json
{
  "compilerOptions": {
    "module": "nodenext",
    "target": "esnext",
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": false,
    "skipLibCheck": true
  }
}
```

# Running type script file
If the dependencies is being installed as -D
```bash
npx ts-node file.ts
```

If the dependencies is global
```bash
npm i -g typescript ts-node
```
Then
```bash
ts-node file.ts
```
