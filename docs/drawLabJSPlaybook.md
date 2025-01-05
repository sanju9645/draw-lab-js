## Step 1: Setting Up the Project

1.1 Initialize the Project
1. Open a terminal in the folder where you want to create your project.
2. Run the following command:
```
cd draw-lab-js
npm init -y
```

1.2 Install Dependencies
```
npm install --save-dev vite typescript @types/node rollup-plugin-dts
npm install --save fabric
```

1.3 Project Structure
```
draw-lab-js/
├── docs/              # For testing your library
│   └── index.html     # Example usage
├── src/               # Source code for the library
│   │  └── DrawLabJS.ts
├── dist/              # Build output (auto-generated)
├── vite.config.ts     # Vite configuration
├── package.json       # NPM metadata
├── tsconfig.json      # TS configuration
└── README.md          # Documentation
```

1.4 Add .gitignore file
```
node_modules
dist
```

## Step 2: Set up TypeScript Configuration
```
{
  "compilerOptions": {
    "target": "ES6",                          // Sets the ECMAScript target version to ES6
    "module": "ESNext",                       // Specifies the module system
    "moduleResolution": "Node",              // Uses Node.js-style module resolution
    "strict": true,                           // Enables all strict type-checking options
    "esModuleInterop": true,                  // Allows interoperability between CommonJS and ES modules
    "skipLibCheck": true,                     // Skips type checking of declaration files
    "forceConsistentCasingInFileNames": true, // Enforces consistent casing in file imports
    "outDir": "./dist",                       // Output directory for compiled files
    "rootDir": "./src",                       // Root directory of input files
    "resolveJsonModule": true                 // Allows importing JSON files
  },
  "include": [
    "src/**/*",                            // Includes all TypeScript files in src and its subdirectories
    "docs/**/*"                            // Includes all HTML files in test and its subdirectories
  ]
}
```

## Step 3: Configure Vite
```
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'docs'),
  server: {
    open: true
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    lib: {
      entry: path.resolve(__dirname, 'src/DrawLabJS.ts'),
      name: 'DrawLabJS.ts',
      fileName: (format) => `draw-lab-js.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      external: ['fabric'],
      output: {
        globals: {
          fabric: 'fabric' // Global variable name for 'fabric.js'
        }
      }
    }
  }
});
```

## Step 3: Add Source Code
Create the files 
  1. src/DrawLabJS.ts  
  2. src/state/history.ts  
  3. src/style/DrawLabStyles.ts  
  4. src/tools/EraserTool.ts  
  5. src/tools/TextTool.ts
  6. src/tools/PenTool.ts  
  7. src/tools/MoveTool.ts  
  8. src/tools/shapes/CircleShape.ts  
  9. src/tools/shapes/LineShape.ts  
  10. src/tools/shapes/RectangleShape.ts  
  11. src/utils/HistoryManager.ts  
  12. src/utils/ToolbarManager.ts  
  
## Step 4: Add Example for Testing
4.1 Create docs/index.html
This file will serve as a playground to test your library:

## Step 5: Build the Package
5.1 Add Scripts to package.json

```
{
  "name": "draw-lab-js",
  "version": "1.0.0",
  "description": "Turn simple strokes into powerful visuals.",
  "main": "dist/draw-lab-js.cjs.js",
  "module": "dist/draw-lab-js.es.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "prepare": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sanju9645/draw-lab-js.git"
  },
  "author": "Osprey",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/sanju9645/draw-lab-js/issues"
  },
  "homepage": "https://github.com/sanju9645/draw-lab-js#readme",
  "devDependencies": {
    "@types/node": "^22.10.5",
    "rollup-plugin-dts": "^6.1.1",
    "typescript": "^5.7.2",
    "vite": "^6.0.7"
  },
  "dependencies": {
    "fabric": "^6.5.4"
  },
  "directories": {
    "doc": "docs"
  },
  "files": [
    "dist/**/*",
    "README.md"
  ],
  "exports": {
    ".": {
      "import": "./dist/draw-lab-js.cjs.js",
      "require": "./dist/draw-lab-js.cjs.js"
    },
    "./package.json": "./package.json"
  },
  "keywords": [
    "vite",
    "typescript",
    "package",
    "draw-lab-js",
    "fabric",
    "canvas",
    "svg",
    "javascript",
    "draw"
  ]
}
```

## Step 6: Build the Package
Run the following command:
```
npm run build
```

## Step 7: Test Locally
Include the following code in the index.html file to test the library:
```
  <body>
    <script type="module">
      import { DrawLab } from '../dist/draw-lab-js.es.js';
    </script>

    <h1>draw-lab-js</h1>
    <div id="container-1">
      <div id="draw-lab-js-container-1" style="width: 90%; height: 90%; margin: 10px;"></div>
    </div>
    <div id="container-2">
      <div id="draw-lab-js-container-2" style="width: 90%; height: 90%; margin: 10px;"></div>
    </div>

    <script type="module">
      const doodleChart = new DoodleChart();
      const toolBoxContainer = doodleChart.createToolBoxContainer("draw-lab-js-container-1");
      const toolboxWrapper = document.createElement('div');
      toolboxWrapper.className = 'toolbox-wrapper';
      toolboxWrapper.appendChild(toolBoxContainer);

      const containerWrapperDiv1 = document.getElementById("container-1");
      containerWrapperDiv1.appendChild(toolboxWrapper);
      doodleChart.setupDrawingContext(containerWrapperDiv1, "draw-lab-js-container-1");
    </script>
  </body>
```

Run Dev Server
To test the example code, use Vite's development server:
```
npm run dev
```


## Step 7: Prepare for Publishing
7.1 Update package.json
Ensure package.json has the following fields:
```
{
  "main": "dist/draw-lab-js.cjs.js",
  "module": "dist/draw-lab-js.es.js",
  "files": [
    "dist",
    "README.md"
  ],
}
```


files: Specifies which files to include in the package.

## Step 8: Publish the Package
8.1 Log In to NPM:
```
npm login

npm whoami
```

8.2 Bump Version
Bump the version before publishing:
```
npm version patch
```


8.3 Publish
```
npm publish --access public
```

## Step 9: Verify the Published Package
Install the package in a new project and test:
```
npm install draw-lab-js
```

## Complete Workflow
Code in src/.
Build with npm run build.
Test with npm run dev.