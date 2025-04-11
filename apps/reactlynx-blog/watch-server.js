import fs from 'fs';
import { spawn } from 'child_process';

console.log('Waiting for server to start...');

// Watch for the server-urls.txt file to be created or updated
fs.watchFile('server-urls.txt', { interval: 1000 }, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    // File was created or updated, run the show-urls script
    const child = spawn('node', ['./scripts/show-urls.js'], { stdio: 'inherit' });
    child.on('close', (code) => {
      if (code !== 0) {
        console.error('Error: show-urls script exited with code', code);
      }
    });
  }
});
