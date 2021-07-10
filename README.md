# 03-JavaScript-Homework
Homework for week three - JavaScript Practice
Completing code for a random password generator

The task at hand involved modifying and adding to code that was provided to accept input criteria provided by a user to generate a random password. This was very logic oriented task and did not pose much difficulty. 

Overview of work: 
* Created some global strings to be used when selecting random characters
    * lower case alphabet
    * upper case alphabet
    * numerals
    * standard set of special characters (This required some research to get the quotes and \ to work properly and not be ignored or create and error. Very neat to learn how to implement)
* Created 2 functions to gather user input and then called them within the main generatePassword function that was already referenced by the provided code. 
* The first function got the desired length from the user and would re-prompt for invalid entry and exit the prompts if they cancel.
* The second function would gather the character sets that they wanted and validate that they select at least one, re-prompting if they do not select any. 
* Finally, I created the generatePassword function to take the inputs received, concatanate the global strings that they would accept and then selected random characters from the available options. This was done within a loop adding each character until the length reached the user's desired length. 

Screenshot of generated password: 


Links: 
* repo - https://github.com/irv0735/03-JavaScript-Homework
* "live site" - https://irv0735.github.io/03-JavaScript-Homework/