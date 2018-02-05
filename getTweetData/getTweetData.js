// Please do not change the name of this function
var getTweetData = function (str) {
  var tweetMetaData = 
     {
      tags: str.match(/^#/g) || [],
      mentions: str.match(/^@/g) || [],
      tagCount: (str.match(/#/g) || []).length,
      mentionCount: (str.match(/@/g) || []).length,
      length: str.length
    }
  console.log(tweetMetaData);
  return tweetMetaData;

};

if ( typeof module !== 'undefined' ) {
  module.exports = {getTweetData};
}
