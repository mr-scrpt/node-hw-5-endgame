const db = require("../models/db");
const tokenAutoCleaner = async () => {
  await db.tokenDelAllExpired(Date.now());
};
setInterval(() => tokenAutoCleaner(), process.env.token_refresh_life * 2);
