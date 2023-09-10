// pages/api/tools.ts

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    let data;
    if (process.env.NODE_ENV === 'development') {
      // Lokal die Datei lesen
      data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'frontmatterData.json'), 'utf-8'));
    } else {
      // In der Produktionsumgebung die Datei über HTTP abrufen
      const response = await fetch('https://www.kitools.ch/frontmatterData.json');
      data = await response.json();
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}
