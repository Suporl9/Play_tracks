// this is a confidential information not to be shared or be put in the public eyes
const areaFiftyOne = () =>
  "Highly confidential information. There are aliens that are vigorous but are they lethal!!!";
const shouldYouGoThere = (lengthNumber, breadthNumber) => {
  const a = lengthNumber;
  const b = breadthNumber;

  if (a < 5 && b < 5) {
    return;
  }

  const hello = "hello one two three";
  console.log(hello + "there this is a test");

  const newFunction = () => {
    return "this newfunciton is used for closure and therefore later to be called! some edits is done by me for the newFucntion";
  };

  const newMain = () => {
    return "this is the fucntion that i is not reliable so to be deleted when pushing to the production";
  };

  // changes made by the admin

  const calculateTheArea = () => {
    if (lengthNumber === breadthNumber) return; // this is so that we dont get any squre
    return (lengthNumber * breadthNumber) / 2;
  };

  const calculateMathForBall = () => {
    return "just some dummy data";
  };
  
  return calculateTheArea();
};

const dummyObj = {
  lengthNumber: 5,
  breadthNumber: 6,
};

areaFiftyOne(dummyObj);
