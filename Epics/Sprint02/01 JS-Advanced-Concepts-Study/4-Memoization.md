// Summary Notes: Provide a brief rundown of the significant points, insights, and observations for each video segment.
// Questions & Clarifications: Document any questions or aspects that are unclear, serving as a foundation for future learning or discussions.

// Memoization helps make code more performant (efficient).
// Store, or cache, previous results from iterative code, so repeated calculations are stored instead of re-calculated each iteration.

const prevValues = []

function square(n) {
    if (prevValues[n] != null) { // check if value is not null
    return prevValues[n] // if not null, returns the value previously calculated
    }
    let result = 0
    for (let i = 1; i <=n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1
        }
    }
    prevValues[n] = result // code executes slowly for first iteration, but faster for all others.
    return result
}

console.log(square(30000)) // code executes slowly for first iteration
console.log(square(30000)) // but faster for all others
console.log(square(30000)) // but faster for all others
console.log(square(30000)) // but faster for all others

// Memoization also helps for fetching external resources by caching the previous fetch results...

// Dynamic programming for recursive functions are another good use case. Just add the prevValues function to each part of the iterative calculation.
