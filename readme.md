Is it still loading...?
---
A simple JavaScript function that wraps the Fetch API with a callback to capture the download progress.
The function uses Streams to read the progress. For further reading, checkout Jake Archibald's [article on Streams](https://jakearchibald.com/2016/streams-ftw/), which this function was based on.

How to use this?
---
Just link to the file and call the function with the progress capturing function.
```html
<h1>Loading</h1>

<script src="path/to/fetchProgress.js"></script>
<script>
  let progressCapture = (accumulated, total) => {
    target.querySelector("h1").textContent = `Loading ${(accumulated / total * 100).toFixed(0)}%`;
  }

  fetchProgress("path/to/resource", progressCapture)
    .then(resp => {
      // Action to handled
    })
</script>
```
Or do it the ES6 Module way.
```html
<h1>Loading</h1>

<script type="module">
  import fetchProgress from "./path/to/fetchProgress.js";
  let progressCapture = (accumulated, total) => {
    target.querySelector("h1").textContent = `Loading ${(accumulated / total * 100).toFixed(0)}%`;
  }

  fetchProgress("path/to/resource", progressCapture)
    .then(resp => {
      // Action to handled
    })
</script>
```

Additional options
---
Should one needs to add options to the fetch request, may pass them in the third parameter as one would for the original Fetch API:
```javascript
fetchProgress("path/to/resource", progressCapture, {
  mode: "cors",
  cache: "no-store"
})
```

See it in action.
---
Another fancy way to say: here's a [demo](https://iantomarcello.github.io/fetchProgress)
