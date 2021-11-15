export default function handler(req, res) {
  res.status(200).json([
    { title: "song1", duration: "3.23", bpm: 123 },
    { title: "song2", duration: "2.10", bpm: 80 },
    { title: "song3", duration: "1.15", bpm: 190 }
  ])
}