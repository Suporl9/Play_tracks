// this is a confidential information not to be shared or be put in the public eyes
//@ts-check
const areaFiftyOne = (dummyO) => {
  const { lengthNumber, breadthNumber } = dummyO;

  const hello =
    "Highly confidential information. There are aliens that are vigorous but are they lethal!!!";
  const shouldYouGoThere = () => {
    const hello = "hello";
    console.log(hello);
  };
  const newFunction = () => {
    return "this newfunciton is used for clousre and therefore later to be called";
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
};

const dummyObj = {
  lengthNumber: 5,
  breadthNumber: 6,
};

areaFiftyOne(dummyObj);
