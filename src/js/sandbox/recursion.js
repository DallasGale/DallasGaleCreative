
// Example of needing a recursive function to iterate through a post and it's 
// comments with potential reply's to comments (sub-comments)
const post = {
  message: "Post message",
  comments: [
    {
      id: '0',
      comment: "Comment #1",
      children: [],
    },
    {
      id: '1',
      comment: "Comment #2",
      children: [
      {
        id: '1-1',
        comment: "Comment Reply #1",
        children: [
          {
            id: '1-1-1',
            comment: "Comment Reply #1",
            children: [],
          },
          {
            id: '1-1-2',
            comment: "Comment Reply #2",
            children: [],
          },
          
        ],
      },
      {
        id: '1-2',
        comment: "Comment Reply #2",
        children: [],
      },
      {
        id: '1-3',
        comment: "Comment Reply #3",
        children: [
          {
            id: '1-3-1',
            comment: "Comment Reply #1",
            children: [],
          },
          {
            id: '1.3-2',
            comment: "Comment Reply #2",
            children: [],
          },
        ],
      },
      ]
    },
  ]
}



// Recursive function 
function getPost(children, currentDepth = 0) {
  if (!children || children.length === 0) {
    return [];
  }

  // Create an empty array to push/store all the comments
  let allComments = [];

  // Loop through all children and push comments..
  children.forEach((child) => {

    allComments.push({
      id: child.id,
      comment: `${child.comment} id: ${child.id}`,
      depth: currentDepth,
    })

    // If there is nested comments...
    if (child.children && child.children.length > 0) {
      const childResults = getPost(child.children, currentDepth + 1);
      allComments.push(...childResults);
    }
  });
  return allComments
}


const comments = getPost(post.comments);

// 1. Create an output empty array
// 2. Loop over 'children'
// 3. push 'comments' to a output arraye
// 4. inside the loop check if there is sub-children 'eg: child.children'
// 5. if true - call the function again; assigned to a var
// 6. push var to the output array
// 7. return output



function fibonacci(number) {
  if (number <= 1) return number
  return (
    fibonacci(number - 1) + fibonacci(number - 2)
  )
} 

// console.log(fibonacci(4));


function factorial(number) {
  if (number === 0) return 1;
  else return number * factorial(number - 1);
};

// console.log(factorial(3))


function countdown(number) {
  if (number <= 0) return "Boom!";
  console.log({number});
  return  countdown(number - 1);
}

// console.log(countdown(10))

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1))
}

// console.log(sumArray([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))

function reverseString(str) {
  if (str.length <= 1) return str
  console.log({str})
  return reverseString(str.slice(1)) + str[0]
}

// console.log(reverseString('dallas'))


// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

console.log("-----------------")

// recursive version of for loop
function func(i) {
  if (!(i < 10)) return
  console.log(i)
  return func(i + 1)
}

// func(0)



function range(min, max, acc = []) {
  if (min === max) {
    console.log('base case', min, max, acc)
    return acc.concat[min]
  }
  console.log('recursive case', min, max, acc)
  return range(min + 1, max, acc.concat(min))
}

console.log(range(1, 5));