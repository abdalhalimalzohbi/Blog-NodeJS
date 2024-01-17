import { AuthorModel } from "../model/author.js";

export async function test(req, res) {
  const { name, description, email } = req.body;
  const test = await AuthorModel.create({ name, description, email });
  return res.send(test);
}
