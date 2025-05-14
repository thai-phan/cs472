Question 3: What are the differences? 

| Method                   | Sync/Async | Suitable For     | Memory Usage | Recommended Use Case                    |
| ------------------------ | ---------- | ---------------- | ------------ | --------------------------------------- |
| `fs.readFileSync()`      | Sync       | Small scripts    | High         | Simple scripts, blocking okay           |
| `fs.readFile()`          | Async      | All files        | Medium       | Server-side file reads (callback-based) |
| `fs.promises.readFile()` | Async      | All files        | Medium       | Modern apps using async/await           |
| `fs.createReadStream()`  | Async      | Very large files | Low          | Stream processing, logs, media files    |
