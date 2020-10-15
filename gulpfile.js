const 
  // development mode?
  devBuild = false,

  // modules
  gulp = require('gulp'),
  htmlclean = require('gulp-htmlclean'),
  noop = require('gulp-noop'),
  sass = require('gulp-sass'),

  // folders
  src = 'src/',
  build = 'public/';


// HTML processing 
function html(){
    return gulp.src(src + 'html/**/*')
    .pipe(devBuild ?  noop() : htmlclean())
    .pipe(gulp.dest(build));
}  
 // CSS processing
 function css(){
  const out = build + 'assets/css';

  return gulp.src([
    // placeholder for bootstap sass file source
    src + 'sass/main.scss'
  ])
    .pipe(sass().on('error', sass.logError))
    .
 }
exports.html = html;
exports.css = css;


