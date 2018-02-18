import {url, path, error400Path, throwErrorPath} from "./thirdpartModules.js";

function getJSONCallback (story, err, callback) {
  //throw new Error("MY error");
  $.ajax(url + story)
    .then(callback)
    .catch(err);
}

function getJSON(story) {
  //throw new Error("MY error");
  return $.ajax(url + story);
}

function addTextToPage(elemType, text) {
  console.log("Adding text", text);
  let node = document.createElement(elemType);                 
  let textnode = document.createTextNode(text);         
  node.appendChild(textnode);                             
  document.getElementById("story").appendChild(node); 
}
function sortChapters(a, b) {
  console.log("Sorting chapters", a, b);
  return parseInt(a.chapter) - parseInt(b.chapter);
}
function loadStoryCallback() {
  var chapters = [];
  $('#story').addClass('spinner');
try{
  getJSONCallback('story', function(err) {
    addTextToPage('p', "Argh, first broken: " + err);
  }, function(story) {
    addTextToPage('h2', story.title);
    story.chapterURLs.map(function(element) {
      getJSONCallback(element, function(err) {
        addTextToPage('p', "Chapter Argh, second broken: " + err);
      }, function(chapter) {
        if(chapters.length >= story.chapterURLs.length-1) {
          chapters.push(chapter);
          chapters.sort(sortChapters);
          $('#story').removeClass('spinner');
          chapters.map(function(chapter) {
            addTextToPage('h3', chapter.title);
            addTextToPage('p', chapter.body);
          });
        } else {
          chapters.push(chapter);
        }
      })
    });
  });
} catch (err) {
  console.log("CAUGHT ERR", err);
}
}

function loadStoryPromise() {
  $('#story').addClass('spinner');
  try {
  return getJSON('story').then(function(story) {
    addTextToPage('h2', story.title);

    return story.chapterURLs.map(getJSON)
      .reduce(function(chain, chapterPromise) {
        return chain.then(function() {
          return chapterPromise;
        }).then(function(chapter) {
          addTextToPage('h3', chapter.title);
          addTextToPage('p', chapter.body);
        });
      }, Promise.resolve());
  }).then(function() {
    addTextToPage('p', "All done");
  }).catch(function(err) {
    addTextToPage('p', "Argh, broken: " + err);
  }).then(function() {
    $('#story').removeClass('spinner');
  });
} catch (err) {
  console.log("CHAUGT ERR PROMISE", err);
}
}

async function loadStoryAsyncAwait () {
  $('#story').addClass('spinner');
  try {
    let story = await getJSON('story');
    addTextToPage('h2', story.title);
  
    for(let chapter of story.chapterURLs.map(getJSON)) {
      addTextToPage('h3', (await chapter).title);
      addTextToPage('p', (await chapter).body)
    }
    addTextToPage('p', "All done");
  } catch (err) {
    addTextToPage('p', "Argh, broken: " + err);
  } finally {
    $('#story').removeClass('spinner');
  }
}

export {loadStoryCallback, loadStoryPromise, loadStoryAsyncAwait}