export const trending = (req, res) => res.send("homepage videos");
export const see = (req, res) => {
  console.log(req.params.id);
  res.send(`watch video #${req.params.id}`);
};
export const edit = (req, res) => res.send("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("delete video");
