/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
function strCmp(str1, str2) {
    let dict = {
        A: 190, B: 192, C: 194, D: 196, E: 198, F: 1910, G: 1912, H: 1914, I: 1916, J: 1918, K: 1920, L: 1922, M: 1924, N: 1926, O: 1928, P: 1930, Q: 1932, R: 1934, S: 1936, T: 1938, U: 1940, V: 1942, W: 1944, X: 1946, Y: 1948, Z: 1950,
        a: 191, b: 193, c: 195, d: 197, e: 199, f: 1911, g: 1913, h: 1915, i: 1917, j: 1919, k: 1921, l: 1923, m: 1925, n: 1927, o: 1929, p: 1931, q: 1933, r: 1935, s: 1937, t: 1939, u: 1941, v: 1943, w: 1945, x: 1947, y: 1949, z: 1951,
        А: 52, Б: 54, В: 56, Г: 58, Д: 60, Е: 62, Ё: 64, Ж: 66, З: 68, И: 70, Й: 72, К: 74, Л: 76, М: 78, Н: 80, О: 82, П: 84, Р: 86, С: 88, Т: 90, У: 92, Ф: 94, Х: 96, Ц: 98, Ч: 100, Ш: 102, Щ: 104, Ъ: 106, Ы: 108, Ь: 110, Э: 112, Ю: 114, Я: 116,
        а: 53, б: 55, в: 57, г: 59, д: 61, е: 63, ё: 65, ж: 67, з: 69, и: 71, й: 73, к: 75, л: 77, м: 79, н: 81, о: 83, П: 85, р: 87, с: 89, т: 91, у: 93, ф: 95, х: 97, ц: 99, ч: 101, ш: 103, щ: 105, ъ: 107, ы: 109, ь: 111, э: 113, ю: 115, я: 117,
    }
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (dict[str1[i]] < dict[str2[i]]) {
            return -1
        }
        if (dict[str1[i]] > dict[str2[i]]) {
            return 1
        }
    }
    return 0
}
function sortStrings(arr2, param = 'asc') {
    let arr = [...arr2]
    if(param==='asc'){
        return arr.sort((a, b) => {
            return strCmp(a, b)
        })
    }
    if(param === 'desc'){
        return arr.sort((a, b) => {
            return -strCmp(a, b)
        })
    }
    
}
export{sortStrings, strCmp}