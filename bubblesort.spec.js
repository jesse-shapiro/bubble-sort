describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('returns element of single-item array', function() {
    expect( bubbleSort([8]) ).toEqual( [8] );
  })

  it('sorts elements from smallest to largest', function() {
    expect( bubbleSort([4, 2, 8, 5, 9, 1, 3, 13]) ).toEqual( [1, 2, 3, 4, 5, 8, 9, 13] );
  })

  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough();
  });
  it('calls swap exactly 11 times', function () {
    window.bubbleSort([4, 2, 8, 5, 9, 1, 3, 13]);
    expect(window.swap.calls.count()).toEqual(11);
  });

  it('calls swap exactly 1 times', function () {
    window.bubbleSort([4, 2, 8]);
    expect(window.swap.calls.count()).toEqual(1);
  });

});
