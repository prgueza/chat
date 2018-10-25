const gulp = require('gulp');
const webpack = require('webpack');
const gulpwebpack = require('webpack-stream');
const nodemon = require('gulp-nodemon');
const wepackConfig = require('./webpack.config.js');

gulp.task('start', (done) => {
  console.log('Starting server and watching with nodemon');
  nodemon({
    script: './bin/www',
    ext: 'js html',
    env: { NODE_ENV: 'development' },
  });
  done();
});

gulp.task('build', (done) => {
  console.log('Bundling with webpack and watching files');
  gulp.src('src/index.jsx')
    .pipe(gulpwebpack(wepackConfig), webpack)
    .pipe(gulp.dest('public/dist'));
  done();
});

gulp.task('default', gulp.series(['build', 'start'], (done) => {
  console.log('Starting server');
  done();
}));
