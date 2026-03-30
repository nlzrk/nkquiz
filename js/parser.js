// parser.js
// Reads a .md or .txt file and pulls out quiz question blocks.
//
// Supported syntax:
//   {bank:10}                                           <- optional: pick 10 random questions
//   {type:MC, Q:Question text, A:a;Option *b;Correct c;Option d;Option}
//   {type:SA, Q:Question text, A:Sample answer, M:5}
//
// Q field supports $LaTeX$, $$LaTeX$$, and {img:path} tags.
// Fields are delimited by ", Q:" and ", A:" so commas in question text are fine.

// Returns { questions: Question[], bankSize: number|null }
function parseQuizFile(content) {
  const bankSize = parseBankSize(content);
  const blocks   = extractQuestionBlocks(content);
  const questions = blocks.map(parseQuestionBlock).filter(Boolean);

  if (questions.length === 0) {
    throw new Error('No valid questions found. Check your question syntax.');
  }

  if (bankSize !== null && bankSize > questions.length) {
    throw new Error(`Bank size (${bankSize}) is larger than the number of questions (${questions.length}).`);
  }

  if (bankSize !== null && bankSize < 1) {
    throw new Error('Bank size must be at least 1.');
  }

  return { questions, bankSize };
}

// Looks for {bank:N} anywhere in the file.
function parseBankSize(content) {
  const match = content.match(/\{bank\s*:\s*(\d+)\s*\}/i);
  return match ? parseInt(match[1], 10) : null;
}

// Finds all {type:...} blocks, handling nested {img:} correctly.
function extractQuestionBlocks(content) {
  const blocks = [];
  let i = 0;

  while (i < content.length) {
    const start = content.indexOf('{type:', i);
    if (start === -1) break;

    let depth = 0;
    let j = start;

    while (j < content.length) {
      if (content[j] === '{') depth++;
      else if (content[j] === '}') {
        depth--;
        if (depth === 0) {
          blocks.push(content.slice(start + 1, j));
          i = j + 1;
          break;
        }
      }
      j++;
    }

    if (depth !== 0) i = start + 1;
  }

  return blocks;
}

function parseQuestionBlock(blockContent) {
  try {
    const fields = extractFields(blockContent);
    if (!fields.type || !fields.Q || fields.A === null) return null;

    const type = fields.type.trim().toUpperCase();
    const questionText = fields.Q.trim();

    if (type === 'MC') {
      const options = parseMCOptions(fields.A.trim());
      if (options.length < 2) return null;
      if (!options.some(o => o.isCorrect)) return null;
      return { type: 'MC', question: questionText, options };
    }

    if (type === 'SA') {
      const answer = fields.A.trim();
      if (!answer) return null;
      const marks = (fields.M !== null && fields.M > 0) ? fields.M : 5;
      return { type: 'SA', question: questionText, answer, marks };
    }

    return null;
  } catch (_) {
    return null;
  }
}

// Splits block content into fields using ", Q:" and ", A:" as boundaries.
function extractFields(blockContent) {
  const typeMatch = blockContent.match(/^type\s*:\s*(.*?)(?=\s*,\s*Q\s*:)/is);
  const qMatch    = blockContent.match(/,\s*Q\s*:\s*([\s\S]*?)(?=\s*,\s*A\s*:)/i);
  const aMatch    = blockContent.match(/,\s*A\s*:\s*([\s\S]*?)(?=\s*,\s*M\s*:|$)/i);
  const mMatch    = blockContent.match(/,\s*M\s*:\s*(\d+)/i);

  return {
    type: typeMatch ? typeMatch[1].trim()     : null,
    Q:    qMatch    ? qMatch[1].trim()        : null,
    A:    aMatch    ? aMatch[1].trim()        : null,
    M:    mMatch    ? parseInt(mMatch[1], 10) : null,
  };
}

// Parses "a;Option 1 *b;Correct c;Option 3" into an array of option objects.
function parseMCOptions(optionsStr) {
  const parts = optionsStr.trim().split(/\s+(?=\*?[a-zA-Z]\s*;)/);
  const options = [];

  for (const part of parts) {
    const match = part.match(/^(\*?)([a-zA-Z])\s*;\s*([\s\S]*)$/);
    if (match) {
      options.push({
        isCorrect: match[1] === '*',
        label:     match[2].toLowerCase(),
        text:      match[3].trim(),
      });
    }
  }

  return options;
}
