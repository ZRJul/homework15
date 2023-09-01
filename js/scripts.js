const cache = new Map();
const callHistory = [];

function createCachedFunction(fn) {

    return function (...args) {

        const key = args.join(',');

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);

        cache.set(key, result);
        callHistory.push({ args, result });

        if (callHistory.length > 10) {
            callHistory.shift();
        }

        return result;
    };

}
function displayCallHistory() {
    console.log("Call History:");
    for (const call of callHistory) {
        console.log(`Phone number: ${call.result}`);
    }
}

function expensiveOperation(phoneNumber) {
    return `${phoneNumber}`;
}

const cachedExpensiveOperation = createCachedFunction(expensiveOperation);


cachedExpensiveOperation("1234567890");
cachedExpensiveOperation("9876543210");
cachedExpensiveOperation("9876543210");
cachedExpensiveOperation("123564");
cachedExpensiveOperation("8967452236");
cachedExpensiveOperation("56");
cachedExpensiveOperation("34");
cachedExpensiveOperation("58");
cachedExpensiveOperation("89");
cachedExpensiveOperation("81");
cachedExpensiveOperation("85");
cachedExpensiveOperation("82");
cachedExpensiveOperation("34");
cachedExpensiveOperation("33");
cachedExpensiveOperation("25");
cachedExpensiveOperation("11");

displayCallHistory();


console.log(cache)

