### grunt-yaml-validate

`npm i --save-dev grunt-yaml-validate`

#### Using

```js
grunt.initConfig({
  "yaml-validate": {
    options: {
      glob: "api/*.yaml"
    }
  }
})
```

#### Why?

Sometimes you want to ensure that all yaml files matching a given glob are valid as part of your CI process. This tool will do just that.
