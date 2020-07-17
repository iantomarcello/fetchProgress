/**
 *  Modified from Jake Archibald
 *  @url https://jakearchibald.com/2016/streams-ftw/
 *  @param url The path of the resource.
 *  @param progressCapture the callback function which takes two arguement of total bytes
 *  streamed and size of the resource.
 *  @returns a regular Fetch API response for futher action.
 */

let fetchProgress = (url, progressCapture = null, requestOptions) => {
  if ( progressCapture === null ) {
    progressCapture = (received, total) => console.log(`${(received / total * 100).toFixed(0)}% loaded.`);
  }

  return fetch(url, requestOptions).then(response => {
    let totalSize = parseInt(response.clone().headers.get('content-length'));
    let reader = response.clone().body.getReader();
    let bytesReceived = 0;

    return reader.read().then(function processResult(result) {
      if (result.done) return response;

      bytesReceived += result.value.length;
      progressCapture(bytesReceived, totalSize);

      return reader.read().then(processResult);
    });
  })
}
export default fetchProgress;
