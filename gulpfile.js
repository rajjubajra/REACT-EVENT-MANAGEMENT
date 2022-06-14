const { src, dest, series } = require('gulp');

/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * ../tw2-*
 * 
 */

/** IMPORTANT: 
 * Change working project Folder 
 * in following "src" and "watch" */



function moveFiles() {
  return src('./r18tw3_events_01/build/**/*.*')
    .pipe(dest('./events-01'))
}

function moveToGithubPages() {
  return src('./r18tw3_events_01/build/**/*.*')
    .pipe(dest('../github-pages/events-01'))
}



// function watchTask() {
//   watch('./tw3r18_events_01/build/**/*.*');
// }

//default gulp
exports.default = series(moveFiles, moveToGithubPages);