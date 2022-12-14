import type { TArr, TFinalArr } from "../../types";

/**
 * shuffle the order of a unique array
 *https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
 */
const shuffle = (array: any[]): number[] => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

/**
 *
 * @param numberOfElement
 * @returns an shuffled array of unique numbers
 */
const getRandomUniqueArrayOfIndex = (numberOfElement: number): number[] => {
  const numberArr = Array.from({ length: numberOfElement }, (v, i) => i);
  return shuffle(numberArr);
};

/**
 *
 * @param arr
 * @param numOfElement
 * @returns given an array of elements return a subset of that array base on numOfElement wanted
 */
const getRandomElements = (arr: string[], numOfElement: number): number[] => {
  if (numOfElement > arr.length) {
    throw new Error("Number of element is exceeding the length of the array");
  }
  const copyArr = [...getRandomUniqueArrayOfIndex(arr.length)];
  const result = Array.from({ length: numOfElement }, () => {
    const randomIndex = Math.floor(Math.random() * copyArr.length);
    const uniqueElement = copyArr[randomIndex];
    copyArr.splice(randomIndex, 1);
    if (!uniqueElement) {
      return 1;
    }
    return uniqueElement;
  });
  return result;
};

export const get24SeedWords = async (): Promise<TArr | undefined> => {
  const endpoint = "https://metanode.co/json/eng.json";
  try {
    const res = await fetch(endpoint);
    if (res.ok) {
      const jsonRes: string[] = await res.json();
      const uniqueResults = [...new Set(jsonRes)];
      const result = getRandomElements(uniqueResults, 24).map(
        (element, index) => {
          const name = uniqueResults[element] as string;
          return {
            name,
            index,
          };
        }
      );
      return result;
    }
  } catch (error) {
    console.error(error);
  }
};

const getNext18 = (arr: TArr) => {
  const result = getRandomUniqueArrayOfIndex(18).map(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    (element) => arr[element]!
  );
  return result;
};

export const getFinal6 = async (seedPhrase: TArr | undefined) => {
  if (seedPhrase) {
    const next18Elements = getNext18(seedPhrase);

    if (next18Elements) {
      const copyArr = [...next18Elements].filter(
        (element) => typeof element !== "undefined"
      );
      const finalResult: TFinalArr = [];
      while (copyArr.length > 0) {
        const sub3Strings = copyArr.splice(0, 3).map(({ name }) => name);
        const randomElement =
          sub3Strings[Math.floor(Math.random() * sub3Strings.length)];

        const indexOfRandomElement = next18Elements.find(
          ({ name }) => name === randomElement
        )?.index;
        if (indexOfRandomElement) {
          finalResult.push({
            list: sub3Strings,
            primary: indexOfRandomElement + 1,
            "index-selected": -1,
          });
        }
      }
      return finalResult;
    }
  }
};
