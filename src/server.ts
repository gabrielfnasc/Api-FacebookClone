import env from "./infrastructure/http/config/env";
import { MongoHelper } from "./infrastructure/database/mongodb/MongoHelper";

const PORT = env.port;

MongoHelper.connect(env.url)
  .then(async () => {
    const app = (await import("./infrastructure/http/config/App")).default;
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  })
  .catch(console.error);
