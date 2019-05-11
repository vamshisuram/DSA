let str = "abc";

const hasUniqueChars = (str) => {
    // considering alphabets only, including uppercase/lowercase
    // total available is 26 + 26 = 52 chars.
    if (str.length > 52) {
        return false;
    }

    const charsMapExistence = {};
    for (let i = 0; i < str.length; i++) {
        // if we had seen this char earlier or not
        if (charsMapExistence[str[i]]) {
            return false;
        } else {
            charsMapExistence[str[i]] = true;
        }
    }
    return true;
};