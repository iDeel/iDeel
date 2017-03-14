# iDeel
Main iDeel Repo

# Notice

Do NOT merge registration branch into master branch
Do NOT merge into master and prerelease for now, until next meeting. You can bracnh off master to work on it, just do NOT push to master or prerelease

# Step to create Webstorm project from existing source

1. Open Webstorm and choose creating new project
2. Choose Node with Express and direct the project folder to your source directory
3. Webstorm will ask if you want to create with exiting source, say no
4. Go to git, and git add .
5. Then git reset -hard
6. Go to package.js, and right click to npm install missing package

# Add package to package.js

To add an entry to your package.json's dependencies:
npm install <package_name> --save

To add an entry to your package.json's devDependencies:
npm install <package_name> --save-dev

# MongoDB

Create a folder db 1 directory before the repo folder
run mongo server: runMongoDBPort3000.bat
run mongo shell: runMongoDBShellPort3000.bat
