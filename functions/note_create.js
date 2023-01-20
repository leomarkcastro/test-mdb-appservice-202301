exports = function ({ query, headers, body }, response) {
  const result = context.services
    .get("mongodb-atlas")
    .db("examples")
    .collection("notes")
    .insertOne({ ...JSON.parse(body.text()), ...query });

  return result;
};
