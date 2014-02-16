countTo
=======

A simple JavaScript plug-in that will count from one value to another and outputs the result along the way.

An example of using this plug-in:

countTo({
  to: [ending number],
  from: [starting number],
  context: [jQuery expression that can be used to display the current count value],
  duration: [time in milliseconds to update the count]
});

countTo will also fire off the following events on the context jQuery expression:

countstart
countincrement
countcomplete
