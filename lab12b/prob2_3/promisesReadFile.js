const fsp = require('fs').promises;

async function readFileAndLog() {
  try {
    const data = await fsp.readFile('about.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err.message);
  }
}

readFileAndLog();
