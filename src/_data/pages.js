const fs = require('fs');
const path = require('path');

module.exports = function() {
  const dataDir = path.join(__dirname, '../data');
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

  return files.map(filename => {
    const filepath = path.join(dataDir, filename);
    const story = JSON.parse(fs.readFileSync(filepath, 'utf8'));

    // Build HTML content from the bilingual story
    let contentHtml = '<div class="story-content">';

    // Add bilingual paragraphs
    story.content.forEach((para, idx) => {
      contentHtml += `
        <div class="paragraph" style="margin-bottom: 2rem;">
          <p class="spanish" style="font-size: 1.1rem; margin-bottom: 0.5rem;"><strong>ES:</strong> ${para.es}</p>
          <p class="english" style="color: #666;"><strong>EN:</strong> ${para.en}</p>
        </div>
      `;
    });

    contentHtml += '</div>';

    // Add vocabulary section
    if (story.vocab && story.vocab.length > 0) {
      contentHtml += `
        <hr style="margin: 2rem 0;" />
        <h2>Vocabulary</h2>
        <div class="vocab-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
      `;

      story.vocab.forEach(word => {
        contentHtml += `
          <div class="vocab-item" style="padding: 0.5rem; background: #f5f5f5; border-radius: 4px;">
            <strong>${word.es}</strong> - ${word.en}
          </div>
        `;
      });

      contentHtml += '</div>';
    }

    // Add grammar note
    if (story.grammar_note) {
      contentHtml += `
        <hr style="margin: 2rem 0;" />
        <h2>Grammar Note</h2>
        <div class="grammar-note" style="background: #fffbea; padding: 1rem; border-left: 4px solid #f5c518; border-radius: 4px;">
          ${story.grammar_note}
        </div>
      `;
    }

    // Return page object
    return {
      title: story.meta.title_en,
      titleEs: story.meta.title_es,
      slug: story.meta.id,
      level: story.meta.level,
      category: "Story",
      tags: story.meta.tags,
      characters: story.meta.characters,
      dateCreated: story.meta.date_created,
      content: contentHtml
    };
  });
};
