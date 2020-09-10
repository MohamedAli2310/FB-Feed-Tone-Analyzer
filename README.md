# FB-Feed-Tone-Analyzer
###### A chrome extension that analyzes the tones in posts on your FB feed and allows you to hide specific posts by tone (e.g. hide all sad posts from your feed).

### How It Works:
FB-FTA scrapes your FB Feed for text content (posts and captions), it then makes use of IBM Watson's tone analyzing NLP Model by sending requests to the service's server. FB-FTA parses the server's response and uses it to determine the overall tone of each post on your feed and shows the dominant tone next to each post. 

### Features: 

1. Hide posts of a specific tone (e.g. hide posts with an analytical or sad tone).
2. Only show posts of a specific tone (e.g. only show posts with a happy tone on my feed).
3. See the dominant tones of each post before reading it.
4. The ability to always show posts from specific people, even they have a tone that you chose to be hidden. 
5. Drop-down design for hidden posts: Hidden posts don't just disappear; you get a little bar for each hidden post saying that a post has been hidden from       <userName>. you can show hidden posts by clicking on the arrow next to the little bar.

### Implemented:

1. Scraper function to retrieve posts from FB feed.
2. Get request to send encoded text to the model.
3. Script to add an HTML element containing the parsed response to each post.
4. Made use of Google Cloud Translation API to make a script that detects the language of posts and translate it to English if it's not in order to send it to the tone analyzer, as the IBM Model only understands English as an input. 
5. Manifest.json file hosting all HTML and Scripts for packing the code as a chrome extension

## Issues:

1. Responses from the server are asynchronous and mess up the order by which posts are matched to their tone.

### To-Do: 

1. Enable Google authorization token to be able to use Google API for detecting languages and translating to English.
2. Use an async function with await capability instead of a regular get request in order to fix Issue #1.
3. Create the UI to take the user's preferences of which tone to show/hide.
4. Create a method to hide and show posts by replacing them with the HTML element for the little bar containing the user who posted and why was the post hidden.
5. Encrypt requests going to translation and tone analyzing services.

### Programming Languages Used:

JavaScript 100%
