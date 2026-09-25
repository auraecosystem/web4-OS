            // Otherwise, check if this is something the user explicitly wants to transpile
            if (Array.isArray(options.transpileDependencies)) {
              const transpileDepRegex = getDepPathRegex(options.transpileDependencies)
              if (transpileDepRegex && transpileDepRegex.test(filepath)) {
                return SHOULD_TRANSPILE
              }
            }

            // Don't transpile node_modules
            return /node_modules/.test(filepath) ? SHOULD_SKIP : SHOULD_TRANSPILE
          })
          .end()
    if (useThreads) {
      const threadLoaderConfig = jsRule
        .use('thread-loader')
          .loader(require.resolve('thread-loader'))

      if (typeof options.parallel === 'number') {
        threadLoaderConfig.options({ workers: options.parallel })
      }
    }

    jsRule
      .use('babel-loader')
        .loader(require.resolve('babel-loader'))
        .options({
          cacheCompression: false,
          ...api.genCacheConfig('babel-loader', {
            '@babel/core': require('@babel/core/package.json').version,
            '@vue/babel-preset-app': require('@vue/babel-preset-app/package.json').version,
            'babel-loader': require('babel-loader/package.json').version,
            modern: !!process.env.VUE_CLI_MODERN_BUILD,
            browserslist: api.service.pkg.browserslist
          }, [
            'babel.config.js',
            '.browserslistrc'
          ])
        })
  })
}
