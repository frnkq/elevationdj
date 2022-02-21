export default function handler(req, res) {
  res.status(200).json({
    youSent: JSON.parse(req.body),
  });
}
