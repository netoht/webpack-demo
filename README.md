# Example webpack

```sh
mkdir example-webpack
cd example-webpack
yarn init

yarn add webpack -D
mkdir src
touch src/index.js
touch index.html

yarn install lodash

./node_modules/.bin/webpack <entrypoint> <output>
./node_modules/.bin/webpack src/index.js dist/bundle.js

touch webpack.config.js
./node_modules/.bin/webpack --config webpack.config.js
```

## References

- [Webpack](https://webpack.js.org/guides/getting-started/)
- [Webpack config](https://webpack.js.org/configuration/)