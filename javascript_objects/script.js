// 1. Exploring JavaScript Objects
// Objective: The aim of this assignment is to deepen understanding and proficiency in manipulating JavaScript objects, including creating objects, accessing properties and methods, using constructors, and working with prototypes.

// Problem Statement: You are tasked with creating a JavaScript program that simulates a digital library system. The program should allow users to add new books, search for books by title or author, and display information about the library's collection.

// Task 1: Create a class for the Book object with properties for title, author, and pages.

// Define the Book class
class Book {
    // Constructor to initialize the properties of the Book object
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}





// 2. Exploring Objects and Math in JavaScript
// Objective: The objective of this assignment is to enhance proficiency in working with JavaScript objects and utilizing the Math class for mathematical operations.

// Problem Statement: You are tasked with developing a JavaScript program that simulates a simple banking application. The program should allow users to create accounts, deposit funds, withdraw funds, and calculate interest based on specified rates.

// Task 1: Create a class for the Account object with properties for accountNumber, balance, and owner.
// Task 2: Implement methods within the Account object to deposit and withdraw funds.
// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate. Allow users to pass a year parameter to your method that represents the # of years the money has been invested and an interest rate. The output should be rounded up to the nearest whole number (perhaps using the Math.ceil()). The formula for compound interest is...

// Define the Account class
class Account {
    // Constructor to initialize the properties of the Account object
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }

    // Method to deposit funds into the account
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Successfully deposited $${amount}.`);
        } else {
            console.log('Invalid amount. Please enter a positive number.');
        }
    }

    // Method to withdraw funds from the account
    withdraw(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Successfully withdrew $${amount}.`);
            } else {
                console.log('Insufficient balance. Withdrawal failed.');
            }
        } else {
            console.log('Invalid amount. Please enter a positive number.');
        }
    }

    // Method to calculate interest based on specified rate and time (in years)
    calculateInterest(rate, years) {
        if (rate > 0 && years > 0) {
            const interest = this.balance * (rate / 100) * years;
            console.log(`Interest calculated: $${interest.toFixed(2)} after ${years} years at ${rate}% interest rate.`);
        } else {
            console.log('Invalid rate or years. Please enter positive numbers.');
        }
    }

    // Method to display account information
    displayInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner: ${this.owner}`);
        console.log(`Balance: $${this.balance}`);
        console.log('---------------------------');
    }
}


   



// A=P(1+nr​)^nt

// Where:

// 𝐴
//  is the amount of money accumulated after n years, including interest.
// 𝑃
//  is the principal amount (the initial sum of money).
// 𝑟
//  is the annual interest rate (in decimal form).
// 𝑛
//  is the number of times interest is compounded per year (you can use 1 for this example).
// 𝑡
//  is the number of years the money is invested or borrowed for (this will be your parameter passed into the method).
// Expected Outcomes:

// After completing this assignment, students should be able to create objects using classes and manipulate their properties and methods in JavaScript.
// Students should understand how to perform basic mathematical operations and calculations using the Math class.
// Students should be able to apply object-oriented principles and mathematical concepts to solve real-world problems, such as financial calculations in a banking application.
