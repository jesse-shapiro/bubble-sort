describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([4, 7, 2, 6, 1]) ).toEqual( [[4, 7], [2, 6, 1]] );
  });
});

// describe('Merge function', function(){
//   it('is able to merge two sorted arrays into one sorted array', function(){
//     expect( merge([1, 3], [2, 4, 6])).toEqual( [1, 2, 3, 4, 6] )
//     expect( merge([6, 7, 8, 9], [1, 2, 3, 4])).toEqual( [1, 2, 3, 4, 6, 7, 8, 9] )
//     expect( merge([1, 2, 3, 4], [6, 7, 8, 9])).toEqual( [1, 2, 3, 4, 6, 7, 8, 9] )
//   });
// });

describe('MergeSort function', function(){
  it('is able to split and merge an unordered array into one sorted array', function(){
  expect(mergeSort([6])).toEqual([6]);
   expect(mergeSort([3,1])).toEqual([1,3]);
   expect(mergeSort([1, 5, 2, 4])).toEqual([1, 2, 4, 5]);
   expect(mergeSort([1, 3, 5, 2, 4])).toEqual([1, 2, 3, 4, 5]);
   expect(mergeSort([1, 3, 5, 2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
   expect(mergeSort([1000, 3, 500, 2, 84, 1006, 1, 0, 70])).toEqual([0, 1, 2, 3, 70, 84, 500, 1000, 1006]);
   expect(mergeSort([1, 20, 100, 30, 15, 22, 28, 200, 0, 80])).toEqual([0, 1, 15, 20, 22, 28, 30, 80, 100, 200]);

  });
});
