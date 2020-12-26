<h1>Shiftleft</h1>
<p>A simple application made for Shiftleft.</p>
<p>This application relies on json-server for making RESTful requests and persisting data.</p>

From the root directory,  run the following:<br />
`npm install`<br />
`npm run postinstall`<br />
`npm start`<br />

<p>This should install the necessary node modules in the root, server, and client directories, and start the server and client servers.</p>

<p>The client utilizes a debouncer to limit API calls when searching. Additional improvements would include: pagination or lazy loading for search results and the Book Shelf, limiting the fields returned on each OpenLibrary search results, and the ability to select an individual book and view additional details.</p>
