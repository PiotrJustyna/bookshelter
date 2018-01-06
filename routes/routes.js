var appRouter = function (app) {
    app.get("/", function (request, response) {
        response
            .status(200)
            .send("bookshelter api");
    });

    app.get("/book", function (request, response) {
        if (!request.query.author) {
            return response
                .status(404)
                .send({
                    "status": "error",
                    "message": "missing author"
                });
        }
        else if (!request.query.title) {
            return response
                .status(404)
                .send({
                    "status": "error",
                    "message": "missing title"
                });
        }

        return response
            .status(200)
            .send({
                "author": request.query.author,
                "title": request.query.title
            });
    });
}

module.exports = appRouter;