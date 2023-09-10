// scripts/generateFrontmatterJSON.js

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const generateJSON = () => {
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

  fs.writeFileSync('public/frontmatterData.json', JSON.stringify(data));
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

generateJSON();
