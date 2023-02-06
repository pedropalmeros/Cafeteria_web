const {src, dest, watch} = require('gulp'); 
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


function css(done){
    //compilar sass
    // pasos: 1 Identificar archivo, 2- Compilar, 3- Guardad el .css
    src("./src/scss/app.scss")
        .pipe( sass({ outputStyle: 'compressed'}) )
        .pipe(postcss([autoprefixer()]))
        .pipe( dest('build/css'));
    
    done();
}

function dev(){
    watch("./src/scss/app.scss",css);
}

exports.css = css;
exports.dev = dev;