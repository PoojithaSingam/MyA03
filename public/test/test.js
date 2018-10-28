/*QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(App.calculateArea(5, 5), 25, 'Tested with two relatively small positive numbers');
    assert.equal(App.calculateArea(500, 500), 250000, 'Tested with two large positive numbers. ');
    assert.equal(App.calculateArea(-5, -5), 1, 'Tested with two negative numbers. Any arguments less than 1 will be set to 1.');
    assert.throws(function () { App.calculateArea('a', 'b'); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});
*/
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
QUnit.test("Testing WordCount with various inputs",function( assert ) {
assert.equal(countWords("abcdu"),"There are 1 words in the text string you entered!",'Returns word count as 1 if number of words in string is 1');
assert.throws(function () { countWords(""); }, /The given argument is not a valid name/, 'Passing in null correctly raises an Error');
assert.equal(countWords("abcdu afac"),"There are 2 words in the text string you entered!",'Returns word count as 2 if number of words in string is 2');
});