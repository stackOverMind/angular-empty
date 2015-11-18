var gulp = require('gulp'),
    watch = require('gulp-watch');
    path = require('path');
var browserSync = require('browser-sync');
 
gulp.task('watch', function () {
    watch(['bower_components/**/*.js',
        'bower_components/**/*.css',
        'app/**/*.js',
        'app/**/*.css'
        ]);
     watch([ 
        'app/**/*.html'
        ],function(event){
            browserSync.reload(event.path)
        });
});

gulp.task('serve',['watch'],function(){
    browserSync.init({
        startPath:'/',
        server:{
            baseDir:"app",
            routes:{
                '/bower_components':'bower_components'
            }
        },

    });    
})
