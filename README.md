# countTo

A simple JavaScript plug-in that will count from one value to another and outputs the result along the way.

An example of using this plug-in:

```javascript
countTo({
  to: 10, // ending number
  from: 0, // starting number
  context: "#counter", // jQuery expression that can be used to display the current count value
  duration: 10000 // time in milliseconds to update the count
});
```


countTo will also fire off the following events on the context jQuery expression:
- countstart
- countincrement
- countcomplete
