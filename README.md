countTo
=======

A simple JavaScript plug-in that will count from one value to another and outputs the result along the way.

An example of using this plug-in:

<code>countTo({<br>
&nbsp;&nbsp;&nbsp;&nbsp;to: [ending number],<br>
&nbsp;&nbsp;&nbsp;&nbsp;from: [starting number],<br>
&nbsp;&nbsp;&nbsp;&nbsp;context: [jQuery expression that can be used to display the current count value],<br>
&nbsp;&nbsp;&nbsp;&nbsp;duration: [time in milliseconds to update the count]<br>
});</code>
<br>

countTo will also fire off the following events on the context jQuery expression:
<ul>
<li>countstart</li>
<li>countincrement</li>
<li>countcomplete</li>
</ul>


