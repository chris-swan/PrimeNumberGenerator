describe('prime sifting', function() {
  it("returns a list of numbers between 2-nummber given by user", function() {
    expect(primeSifting(6)).to.eql([2,3,5]);
  });

  it("removes multiples of 2", function() {
    expect(primeSifting(5)).to.eql([2,3,5]);
  });
});
