const {src, dest, watch, series, parallel} = require('gulp'); 

// CSS Y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// IMAGENES
const imagemin = require('gulp-imagemin');


function css(done){
    //compilar sass
    // pasos: 1 Identificar archivo, 2- Compilar, 3- Guardad el .css
    src("./src/scss/app.scss")
        .pipe( sass() )
        //.pipe( sass({ outputStyle: 'compressed'}) )
        .pipe(postcss([autoprefixer()]))
        .pipe( dest('build/css'));
    
    done();
}

function dev(){
    watch('./src/scss/**/*.scss',css)
    watch('./src/img/**/*',imagenes);
}

function imagenes(done){
    src('./src/img/**/*')
        .pipe( imagemin({optmizationLevel: 3}))
        .pipe( dest('./build/img') )
    done();
}


//function imagenes(done){
//    src('./src/img/**/*')
//        .pipe( dest('./build/img') )
//    done();
//}




exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series( imagenes, css, dev);