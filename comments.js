// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (request, response) {
    var pathName = url.parse(request.url).pathname;
    if (pathName === '/skills') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./views/skills.html', function (error, data) {
            if (error) throw error;
            response.end(data);
        });
    }
    else if (pathName === '/comments') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./views/comments.html', function (error, data) {
            if (error) throw error;
            response.end(data);
        });
    }
    else if (pathName === '/api/skills') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        var skills = ['HTML', 'CSS', 'JS', 'PHP', 'Ruby', 'Python'];
        response.end(JSON.stringify(skills));
    }
    else if (pathName === '/api/comments') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        var comments = [
            {
                'name': 'John Doe',
                'comment': 'Hello there!'
            },
            {
                'name': 'Jane Doe',
                'comment': 'How are you doing?'
            },
            {
                'name': 'Jim Doe',
                'comment': 'Wassup?'
            }
        ];
        response.end(JSON.stringify(comments));
    }
    else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./views/index.html', function (error, data) {
            if (error) throw error;
            response.end(data);
        });
    }
});
server.listen(3000, ') => console.log('Server is running...'));