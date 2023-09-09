import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
  try {
    const files = fs.readdirSync(path.join('pages/tools'));
  
    // Ignoriere die Datei _meta.json
    const filteredFiles = files.filter(filename => filename !== '_meta.json');
  
    const data = filteredFiles.map(file => {
      const slug = file.replace('.mdx', '');
      const markdownWithMeta = fs.readFileSync(path.join('pages/tools', file), 'utf-8');
      const { data: frontmatter } = matter(markdownWithMeta);
  
      return {
        slug,
        frontmatter
      };
    });
  
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}
