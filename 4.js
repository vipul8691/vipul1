function getInputArray() {
            const inputArrayStr = document.getElementById('inputArray').value.trim();
            if (inputArrayStr === '') {
                return [];
            }
            return inputArrayStr.split(',').map(num => parseInt(num.trim()));
        }

        function calculateLength() {
            const inputArray = getInputArray();
            const length = inputArray.length;
            displayResult(`Length of the array: ${length}`);
        }

        function calculateSum() {
            const inputArray = getInputArray();
            const sum = inputArray.reduce((acc, num) => acc + num, 0);
            displayResult(`Sum of the numbers in the array: ${sum}`);
        }

        function reverseArray() {
            const inputArray = getInputArray();
            const reversedArray = inputArray.slice().reverse();
            displayResult(`Reversed Array: [${reversedArray}]`);
        }

        function sortArray() {
            const inputArray = getInputArray();
            const sortedArray = inputArray.slice().sort((a, b) => a - b);
            displayResult(`Sorted Array (Ascending Order): [${sortedArray}]`);
        }

        function findMax() {
            const inputArray = getInputArray();
            const maxNumber = Math.max(...inputArray);
            displayResult(`Maximum Number in the array: ${maxNumber}`);
        }

        function displayResult(message) {
            document.getElementById('output').innerHTML = `<p>${message}</p>`;
        }