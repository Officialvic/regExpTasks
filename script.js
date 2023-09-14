// CHeck for car or cat in a txt
const carCat = () => {
    (/car|cat/i.test(prompt('Enter a text'))) == true ? alert("Yuup! Your text contains car & cat") : alert("Ooops!!! Enter a text that contains car & cat");
}
// carCat()

const popProp = () => {
    (/pop|prop/i.test(prompt('Enter a text'))) == true ? alert("Yuup! Your text contains pop & prop") : alert("Ooops!!! Enter a text that contains pop & prop");
}

// popProp()

const fer = () => {
    (/ferret|ferry|ferrari/i.test(prompt('Enter a text'))) == true ? alert("Yuup! Your text contains ferret, ferry or ferrari") : alert("Ooops!!! Enter a text that contains car & cat");
}
// fer()

const ious = () => {
    (/ious\b/i.test(prompt('Enter a text'))) == true ? alert("Yuup! Your text ends with ious") : alert("Ooops!!! Enter a text that ends with ious");
}
// ious()

const whiteSpace = () => {
    (/\s\W/.test(prompt('Enter a text'))) == true ? alert("Yuup! Your text contains whitespace & special characters") : alert("Ooops!!! Enter a text that contains whitespace & special characters");
}
// whiteSpace()

const sixLettersOrMore = () => {
    (/\w{6,}/.test(prompt('Enter a text'))) == true ? alert("Yuup! Your text is longer than six letters") : alert("Ooops!!! Enter a text that is longer than six letters");
}
// sixLettersOrMore()


// let story = "'This is my story.'";
// alert(story.replace(/\b\W/, '"'));
