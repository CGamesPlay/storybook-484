# Instructions for repro

```
yarn
yarn run storybook &
open localhost:3000
# Verify that button is rendering properly
echo `// modification` >> config.js
# Notice that the hot reload has failed
echo `// modification` >> config.js
# Notice that the hot reload has succeeded
```
