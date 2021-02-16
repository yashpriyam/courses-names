import {expect} from 'chai';
import courses from './index';

describe('yashfscoursenames', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(courses.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Luke Skywalker`', function() {
      expect(courses.all).to.include('Luke Skywalker');
    });
  });

  describe('random', function() {
    it('should return a random item from the courses.all', function() {
      var randomItem = courses.random();
      expect(courses.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = courses.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(courses.all).to.include(item);
      });
    });
  });
});
