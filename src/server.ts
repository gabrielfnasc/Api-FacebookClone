import "./shared/ModuleAlias";
import env from "@src/infrastructure/config/env";
import { MongoHelper } from "@src/infrastructure/database/mongodb";

const PORT = env.port;

MongoHelper.connect(env.url)
  .then(async () => {
    const app = (await import("./infrastructure/http/config/App")).default;
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  })
  .catch(console.error);
