// Generated on 2016-01-22
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Configurable paths
  var config = {
    src: 'src',
    dist: 'dist'
  };

  // project config
  grunt.initConfig({

    config: config,
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true
        // Set to true or set livereload: 1337 to a port number to enable live reloading. Default and recommended port is 35729.
      },
      js : {
        // files : ['src/static/{,*/}*.js']
        files : ['src/static/**/*.js']
      },
      sass : {
        files : ['src/static/**/*.scss'],
        tasks : 'sass:dev'
      },
      html : {
        files : ['src/{,*/}*.html']
      }
    },

    sass: {
      dev: {
        options: {
          sourceMap: true,
          outputStyle: 'compressed',
          precision: 3
        },
        files: {
          'src/static/css/fonts.css' : 'src/static/scss/fonts.scss',
          'src/static/css/style.css' : 'src/static/scss/style.scss'
        }
      }
    },

    connect: {
      dev: {
        options: {
          port: 3000,
          base: 'src'
        }
      }
    },

    open : {
      dev : {
        path: 'http://localhost:<%= connect.dev.options.port %>/',
        app: 'Chrome'
      }
    }
  });

  // task를 지원하는 플러그인 로드
  for (var key in grunt.file.readJSON("package.json").devDependencies) {
    if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
  }

  // Default task(s).
  grunt.registerTask('default', [
    'connect:dev',
    'sass:dev',
    'open:dev',
    'watch'
  ]);
};
