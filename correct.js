// ? Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment t

let totalNumberOfAssignments = 9;
let numberOfAssignmentsTaken = 8;
let neededAverage = 80;
let currentAverage = 78;

var outcome = (neededAverage*totalNumberOfAssignments) - (currentAverage*numberOfAssignmentsTaken);
console.log(outcome);


