module.exports = function (grunt) {

    // задача по умолчанию
    grunt.registerTask('default', ['concat:debug']);

    grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({
	    concat: {
	        options: {
	            separator: ';',
	            sourceMap: true
	        },
	        debug: {
	            src: ['app/**/*.js'],
	            dest: 'dist/bundle.js'
	        }
	    }
	});

	grunt.registerTask('default', ['concat']);
};

