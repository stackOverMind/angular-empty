var gulp = require('gulp'),
    watch = require('gulp-watch');
    path = require('path');
var browserSync = require('browser-sync');
var spa         = require("browser-sync-spa");
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
            },
            middleware:[
                function(req,res,next){
                    var url=req.url;
                    if(url.match(/^(\/partials\/|\/assets\/|\/components\/|\/bower_components\/).*/)!=null){
                        next();
                        return;
                    }
                    if(url.match(/(\.js|\.html|\.css|\.ico|\.jpg|\.png)$/)!=null){
                        next();
                        return;
                    }
                    req.url="/";
                    next();

                }
            ]
        },

    });    
})

//build


