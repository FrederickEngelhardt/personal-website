const chai = require('chai'),
      chaiHttp = require('chai-http'),
      expect = chai.expect,
      assert = chai.assert,
      should = chai.should()

chai.use(chaiHttp)

/*
  Checks to see if github queries run.
*/

describe('Github.js Request for users Frederick Engelhardt', function() {
  it('GET should return a 200 status', function(done) {
    chai.request('https://api.github.com/users/frederickengelhardt')
      .get('')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });

});
