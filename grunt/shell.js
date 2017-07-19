module.exports = {
  jshint: {
    command: 'jshint js/src/. Gruntfile.js app/js/. test/spec/.'
  },
  browserify: {
    command: 'browserify js/src/main.js -o js/dist/rmp-vast.js -t [ babelify ] -v'
  },
  watchify: {
    command: 'watchify js/src/main.js -o js/dist/rmp-vast.js -t [ babelify ] -v'
  },
  uglify: {
    command: [
      'uglifyjs js/dist/rmp-vast.js --compress --define DEBUG=false --mangle --screw-ie8 --comments -o js/dist/rmp-vast.min.js'
    ].join('&&')
  },
  stylelint: {
    command: 'stylelint "css/*.less" "css/import-less/*.less" "app/css/*.css"'
  },
  test: {
    command: 'jasmine JASMINE_CONFIG_PATH=test/spec/config/jasmine.json'
  }
};