# Assignment 11 - MongoDB Atlas API

## Required environment variable
Set `MONGODB_URI` to your MongoDB Atlas connection string.

- Local: copy `.env.example` to `.env` and replace the sample URI.
- Render: open the web service → Environment → add `MONGODB_URI` with the Atlas connection string → Save Changes.

Do not commit `.env` or share your database password.

## Routes
- `GET /mydata` — Show All records from MongoDB.
- `GET /mydata/create` — display the create form.
- `POST /mydata/create` — save a new record and return to Show All.
- `GET /resource` — JSON API specification.
- `GET /resource/mydatas` — JSON array of records in the `mydatas` collection.
- `POST /resource/mydatas` — create a record. Send JSON with `name`, `category`, and `description`.

When the database is empty, the app inserts three starter records once.

## Assignment screenshots
1. MongoDB Atlas Data Explorer showing the `mydatas` collection with three documents.
2. Browser/Postman at `/resource` showing the JSON API specification.
3. Browser/Postman at `/resource/mydatas` showing the JSON array with at least three documents.
4. Browser at `/mydata` showing all database records.
5. Create one more record at `/mydata/create`, submit it, then capture `/mydata` showing the original records and the new record.
