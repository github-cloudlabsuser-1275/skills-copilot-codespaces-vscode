const { divide } = require('./test');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

test('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
});

test('divides two negative numbers', () => {
    expect(divide(-10, -2)).toBe(5);
});

test('divides a positive number by a negative number', () => {
    expect(divide(10, -2)).toBe(-5);
});

test('divides a negative number by a positive number', () => {
    expect(divide(-10, 2)).toBe(-5);
});

test('division by zero', () => {
    expect(divide(10, 0)).toBe("Error! Division by zero.");
});