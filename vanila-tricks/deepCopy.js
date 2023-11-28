function deepCopy(obj) {
  if (obj === null && typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    const newArray = [];
    obj.forEach((item, i) => {
      newArray[i] = deepCopy(item);
    });
    return newArray;
  }
  if (typeof obj === "object") {
    const newObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepCopy(obj[key]);
      }
    }
    return newObj;
  }
}

const originalObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Exampleville",
  },
};

const deepCopyObject = deepCopy(originalObject);

deepCopyObject.address.city = "NewCity";

console.log(originalObject.address.city); // Output: Exampleville
