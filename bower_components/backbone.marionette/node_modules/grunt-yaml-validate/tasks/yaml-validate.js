var yamlValidate = require('yaml-validate');

module.exports = function(grunt) {
  grunt.registerTask('yaml-validate', 'validates yaml files', function() {
    var options = this.options();
    var done = this.async();

    if (options.glob == void 0) {
      grunt.log.error("You must provide a glob option");
      done(false);
    }

    grunt.log.writeln('Validating YAML matching ' + options.glob);

    yamlValidate(options.glob)
    .then(function() {
      done();
    })
    .catch(function(err) {
      grunt.log.error("Invalid YAML found");
      grunt.log.error(err.message);
      done(false);
    });
  });
};
