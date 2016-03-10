var gulp      = require('gulp'),
  concat      = require('gulp-concat'),
  del         = require('del'),
  htmlreplace = require('gulp-html-replace'),
  jshint      = require('gulp-jshint'),
  open        = require('gulp-open'),
  os          = require('os'),
  rename      = require('gulp-rename'),
  scss        = require('gulp-sass'),
  uglify      = require('gulp-uglify');

var buildDir = './build/';

var browser = os.platform() === 'linux' ? 'google-chrome' : (
os.platform() === 'darwin' ? 'google chrome' : (
os.platform() === 'win32' ? 'chrome' : 'firefox'));   

var htmlReplaceStrings = {
        'css': 'styles/styles.css',
        'scripts': 'scripts/scripts.js',
        'vendors': 'scripts/vendors.js'
    };

var vendorFiles = [
  'bower_components/angular/angular.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js',
  'bower_components/angular-animate/angular-animate.js',
  'bower_components/angular-aria/angular-aria.js',
  'bower_components/angular-messages/angular-messages.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'bower_components/ngstorage/ngStorage.js'
];

var vendorCSS = [
  'bower_components/angular-material/angular-material.css',
  'bower_components/angular-material.layouts/angular-material.layouts.css',
  'bower_components/angular-material-icons/angular-material-icons.css'
]

gulp.task('browse', function(){
  gulp.src('localhost')
    .pipe(open({app: browser}));
});

gulp.task('clean', function(){
  return del(buildDir, {force: true});
});

gulp.task('default', ['move', 'scss', 'scripts', 'views', 'vendor', 'images'], function(){
  gulp.src('dist/index.html')
    .pipe(open({app:browser}));
});

gulp.task('images', ['clean'], function() {
  return gulp.src(['app/img/**/*'])
    .pipe(gulp.dest(buildDir + 'img/'))
});

gulp.task('lint', function() {
  return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('move', ['clean'], function() {
  gulp.src('app/favicon.png')
    .pipe(gulp.dest(buildDir));
  
  
 return gulp.src('app/index.html')
  .pipe(htmlreplace(htmlReplaceStrings))
  .pipe(gulp.dest(buildDir));
});

gulp.task('scss', ['clean'], function() {
  gulp.src('app/**/*.scss')
    .pipe(scss())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(buildDir + 'styles/'))
  
  gulp.src(vendorCSS)
    .pipe(concat('vendor-styles.css'))
    .pipe(gulp.dest(buildDir + 'styles/'))
  
  gulp.src(vendorCSS)
    .pipe(concat('vendor-styles.css'))
    .pipe(gulp.dest(buildDir + 'styles/'))
})

gulp.task('scripts', ['clean'], function(){
  return gulp.src([
    'app/**/*.module.js',
    'app/**/*.js' 
  ])
    .pipe(concat('scripts.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(buildDir + 'scripts/'));
})

gulp.task('views', ['clean'], function(){
  return gulp.src('app/**/*.html')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest(buildDir + 'views'));		
    
})

gulp.task('vendor', ['clean'], function(){
  return gulp.src(vendorFiles)
      .pipe(concat('vendors.js'))
      //.pipe(uglify())
      .pipe(gulp.dest(buildDir + 'scripts/'));
})

