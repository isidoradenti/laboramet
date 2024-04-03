interface Assignment {
  title: string;
  points: number;
  dueDate?: Date;
}

function createNewAssignment(assignmentDetails: Assignment): Assignment {
  // Ensure the title is not empty and points are positive
  if (!assignmentDetails.title || assignmentDetails.points <= 0) {
    throw new Error('Invalid assignment details');
  }

  // Optionally, set a due date if not provided
  assignmentDetails.dueDate = assignmentDetails.dueDate || new Date(new Date().setDate(new Date().getDate() + 7));

  // Return the new assignment object
  return assignmentDetails;
}

// Usage:
const newAssignment = createNewAssignment({
  title: 'Introduction to TypeScript',
  points: 100,
  dueDate: new Date('2024-05-01'), // Optional
});
