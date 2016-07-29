
describe("longest-word", function() {

    it("should split a string into an array", function () {
        var longWordArray = findLongestWord("The quick brown fox jumped over the lazy dog");
        expect(longWordArray).toEqual(["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
    });

});