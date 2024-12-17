document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');

    // Check if input is empty
    if (!inputText.trim()) {
        alert('Please input a value');
        return;
    }

    // Clean up the input by removing non-alphanumeric characters and converting to lowercase
    const cleanedText = inputText.toLowerCase().replace(/[^a-z0-9]/gi, '');

    // Check if the cleaned text is a palindrome
    const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');

    if (isPalindrome) {
        resultDiv.textContent = `${inputText} is a palindrome`;
    } else {
        resultDiv.textContent = `${inputText} is not a palindrome`;
    }
});
