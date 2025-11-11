//src/server.ts
// Entry point to start the server
import app from './app';

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
