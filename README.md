countTo
=======

A simple JavaScript plug-in that will count from one value to another and outputs the result along the way.

An example of using this plug-in:

countTo({<br>
  &nbsp;&nbsp;to: [ending number],<br>
  &nbsp;&nbsp;from: [starting number],<br>
  &nbsp;&nbsp;context: [jQuery expression that can be used to display the current count value],<br>
  &nbsp;&nbsp;duration: [time in milliseconds to update the count]<br>
});<br>

countTo will also fire off the following events on the context jQuery expression:
<ul>
<li>countstart</li>
<li>countincrement</li>
<li>countcomplete</li>
</ul>


