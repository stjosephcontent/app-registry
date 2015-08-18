'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://application-registry.sjc.io'); // supertest init;
var expect = chai.expect;

require('dotenv').load();

describe('/appdefs', function() {
  describe('get', function() {
    it('should respond with 200 pet response', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "array",
        "items": {
          "description": "An Application Definition describes all the docker services that comprise an SJC application",
          "type": "object",
          "required": [
            "name"
          ],
          "properties": {
            "audit": {
              "description": "The AuditInfo hello is becoming an SJC standard for conveying an auditable track of who made modifications when. It does not currently support the concept of 'what' was audited.",
              "type": "object",
              "required": [
                "created",
                "updated"
              ],
              "properties": {
                "created": {
                  "type": "object",
                  "properties": {
                    "by": {
                      "type": "string"
                    },
                    "on": {
                      "type": "string",
                      "format": "date-time"
                    }
                  }
                },
                "updated": {
                  "type": "object",
                  "properties": {
                    "by": {
                      "type": "string"
                    },
                    "on": {
                      "type": "string",
                      "format": "date-time"
                    }
                  }
                }
              }
            },
            "description": {
              "type": "string"
            },
            "deployedTo": {
              "type": "string"
            },
            "docker": {
              "type": "string"
            },
            "ephemeralPort": {
              "type": "string",
              "format": "int32"
            },
            "healthCheck": {
              "type": "string",
              "format": "uri"
            },
            "name": {
              "type": "string"
            },
            "repository": {
              "type": "object",
              "properties": {
                "host": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                }
              }
            },
            "tag": {
              "type": "string"
            }
          }
        }
      };

      /*eslint-enable*/
      api.get('/api/appdefs')
      .query({
tags: 'DATA GOES HERE',limit: 'DATA GOES HERE'
      })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 200 pet response', function(done) {
      api.get('/api/appdefs')
      .query({
tags: 'DATA GOES HERE',limit: 'DATA GOES HERE'
      })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(res.body).to.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with default unexpected error', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "required": [
          "code",
          "message"
        ],
        "properties": {
          "code": {
            "type": "integer",
            "format": "int32"
          },
          "message": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.get('/api/appdefs')
      .query({
tags: 'DATA GOES HERE',limit: 'DATA GOES HERE'
      })
      .set('Accept', 'application/json')
      .expect('DEFAULT RESPONSE CODE HERE')
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with default unexpected error', function(done) {
      api.get('/api/appdefs')
      .query({
tags: 'DATA GOES HERE',limit: 'DATA GOES HERE'
      })
      .set('Accept', 'application/json')
      .expect('DEFAULT RESPONSE CODE HERE')
      .end(function(err, res) {
        if (err) return done(err);

        expect(res.body).to.equal(null); // non-json response or no schema
        done();
      });
    });

  });

  describe('post', function() {
    it('should respond with 200 pet response', function(done) {
      /*eslint-disable*/
      var schema = {
        "description": "An Application Definition describes all the docker services that comprise an SJC application",
        "type": "object",
        "required": [
          "name"
        ],
        "properties": {
          "audit": {
            "description": "The AuditInfo hello is becoming an SJC standard for conveying an auditable track of who made modifications when. It does not currently support the concept of 'what' was audited.",
            "type": "object",
            "required": [
              "created",
              "updated"
            ],
            "properties": {
              "created": {
                "type": "object",
                "properties": {
                  "by": {
                    "type": "string"
                  },
                  "on": {
                    "type": "string",
                    "format": "date-time"
                  }
                }
              },
              "updated": {
                "type": "object",
                "properties": {
                  "by": {
                    "type": "string"
                  },
                  "on": {
                    "type": "string",
                    "format": "date-time"
                  }
                }
              }
            }
          },
          "description": {
            "type": "string"
          },
          "deployedTo": {
            "type": "string"
          },
          "docker": {
            "type": "string"
          },
          "ephemeralPort": {
            "type": "string",
            "format": "int32"
          },
          "healthCheck": {
            "type": "string",
            "format": "uri"
          },
          "name": {
            "type": "string"
          },
          "repository": {
            "type": "object",
            "properties": {
              "host": {
                "type": "string"
              },
              "url": {
                "type": "string"
              }
            }
          },
          "tag": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.post('/api/appdefs')
      .set('Accept', 'application/json')
      .send({
        pet: 'DATA GOES HERE'
      })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with default unexpected error', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "required": [
          "code",
          "message"
        ],
        "properties": {
          "code": {
            "type": "integer",
            "format": "int32"
          },
          "message": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.post('/api/appdefs')
      .set('Accept', 'application/json')
      .send({
        pet: 'DATA GOES HERE'
      })
      .expect('DEFAULT RESPONSE CODE HERE')
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

  });

});
