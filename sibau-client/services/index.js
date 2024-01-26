export const convertStringToLowerCase = (name) => {
  return name
    .toLowerCase() // Convert the string to lowercase
    .replace(/\s+/g, "-");
};

export const convertKebabCaseToSentenceCase = (kebabCaseString) => {
  const words = kebabCaseString.split("-"); // Split the string into words based on hyphens
  const sentenceCaseWords = words.map((word) => {
    // Capitalize the first letter of each word
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return sentenceCaseWords.join(" "); // Join the words with spaces to form the sentence
};
