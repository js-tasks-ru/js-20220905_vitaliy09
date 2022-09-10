/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
function sortStrings(arr2, param = 'asc') {
    let arr = [...arr2]
    let mod = 0
    if(param === 'desc'){
        mod = -1
    }
    if(param === 'asc'){
        mod = 1
    }
    return arr.sort((a, b) => {
        return mod * (new Intl.Collator('ru',{caseFirst:'upper'}).compare(a, b))
    })
    
}
export{sortStrings}