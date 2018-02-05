var path = require('path');
var expect = require('chai').expect;

var {getTweetData} = require(path.join(__dirname, '..', './getTweetData.js'));

describe('getTweetData()', function () {
  'use strict';

  it('exists', function () {
    expect(getTweetData).to.be.a('function');

  });

  it('takes a single tweet argument', function () {
    expect(getTweetData.length).to.equal(1);
  });

  it('returns the below details for a single tweet with no tags or comments', function () {
    var input = "My awesome tweet"
    var output = {tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16}
    expect(getTweetData(input)).to.eql(output);
  });

  it('returns the below details for a single tweet with no tags or comments', function () {
    var input = "My awesome tweet about #coding to @northcoders"
    var output = { tagCount: 1, mentionCount: 1, length: 46, tags: ['#coding'], mentions: ['@northcoders'] }
    expect(getTweetData(input)).to.eql(output);
  });

});

/*```javascript
getTweetData("My awesome tweet");
// -> { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 }
```

```javascript
getTweetData("My awesome tweet to @northcoders");
// -> { tags: [], mentions: ["@northcoders"], tagCount: 0, mentionCount: 1, length: 32 }
```

```javascript
getTweetData("My awesome tweet about #coding");
// -> { tags: [#coding], mentions: [], tagCount: 1, mentionCount: 0, length: 30 }
```

```javascript
getTweetData("My awesome tweet about #coding to @northcoders");
// -> { tags: [#coding], mentions: [@northcoders], tagCount: 1, mentionCount: 1, length: 46 }
```

```javascript
getTweetData("I am #coding with @northcoders I love #coding and @northcoders");
// -> { tags: [#coding], mentions: [@northcoders], tagCount: 1, mentionCount: 1, length: 62 }
``` */