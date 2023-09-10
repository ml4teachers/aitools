// pages/api/tools.ts

import fs from 'fs';

export default function handler(req, res) {
  try {
    const data = JSON.parse(fs.readFileSync('frontmatterData.json', 'utf-8'));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}
