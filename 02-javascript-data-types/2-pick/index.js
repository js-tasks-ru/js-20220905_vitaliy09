/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let obj2 = new Object()
    Object.entries(obj).forEach((entrie)=>{
        if(fields.includes(entrie[0])){
            obj2[entrie[0]]=entrie[1]
        }
    })
    return obj2
};
