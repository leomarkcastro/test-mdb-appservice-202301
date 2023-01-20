exports = function ({ query, headers, body }, response) {
  const docs = context.services
    .get("mongodb-atlas")
    .db("examples")
    .collection("notes")
    .find({})
    .toArray();

  return docs;
};
