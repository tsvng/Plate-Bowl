import React from 'react';
import ReactDOM from 'react-dom';

var switching = true;

function sortTable() {
  var table, i, x, y, shouldSwitch;
  var rows = [9, 0, 8, 3, 7];
  switching = true;
  while (switching) {
    switching = false;
    var len = 4;
    for (i = 0; i < 4; i++) {
      shouldSwitch = false;
      x = rows[i];
      y = rows[i+1];
      if (x < y) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      var tmp = rows[i];
      rows[i] = rows[i+1];
      rows[i+1] = tmp;
      switching = true;
    }
  }
}

describe('Leaderboard.js', function() {
    describe('sorting', function() {
        it('should return true before sortTable()', function() {
            expect(switching).toBe(true);
        });
        it('should return false before sortTable()', function() {
            switching = true;
            sortTable();
            expect(switching).toBe(false);
        });
    });
});
