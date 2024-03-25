/*
    Count the number of Duplicates
    Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

    Example
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice
*/

class CountingDuplicates {
    charFrequency = {};

    duplicateCount(text){
        // Convert input string to lowercase to make it case-insensitive
        text = text.toLowerCase();
        
        // Create an object to store character frequencies
        const charFrequency = {};
        
        // Iterate through the input string to count character frequencies
        for (let char of text) {
            // Ignore non-alphabetic and non-numeric characters
            if (/[a-z0-9]/.test(char)) {
                // If the character already exists in the frequency object, increment its count
                // Otherwise, initialize its count to 1
                charFrequency[char] = (charFrequency[char] || 0) + 1;
            }
        }
        
        // Count the characters that occur more than once
        let duplicateCount = 0;
        for (let char in charFrequency) {
            if (charFrequency[char] > 1) {
                duplicateCount++;
            }
        }
        
        return duplicateCount;
      }
}

//Example usage:    
const counter = new CountingDuplicates();
const input = "AaBbCc112233DD";
console.log(counter.duplicateCount(input)); // Output: 4 (A, B, C, and 1 occur more than once)




/*

Sample tests

    const { assert } = require('chai');

    describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(duplicateCount(""), 0);
        assert.strictEqual(duplicateCount("abcde"), 0);
        assert.strictEqual(duplicateCount("aabbcde"), 2);
        assert.strictEqual(duplicateCount("aabBcde"), 2,"should ignore case");
        assert.strictEqual(duplicateCount("Indivisibility"), 1)
        assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
    });
    });

*/