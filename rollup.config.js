import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['prop-types', 'react']
};
