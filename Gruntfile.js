module.exports = function (grunt) {

  //Configure main project settings
  grunt.initConfig({

    //Basic settings and info for plugins
    pkg: grunt.file.readJSON('package.json'),

    //Plugin name without "grunt-contrib-" ------CSSMIN
    cssmin: {
      combine: {
        files: {
          'allCSS.min.css': ['main.css', 'responsive.css']
        }
      }
    },

    //Plugin name without "grunt-contrib-" -----ULGIFY
    uglify: {
      dist: {
        files: {
          'javascript.min.js': ['javascript.js']
        }
      }
    },

    //Plugin name without "grunt-contrib-" -----IMAGEMIN
    imagemin: {
      dynamic: {
        options: {
          progressive: true
            },
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'imgmin/'
        }]
      }
    }

  });

  // load the plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  //Do the tasks
  grunt.registerTask('default', ['cssmin', 'uglify', 'imagemin']);

};
