"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./src/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.init();
    return app.getHttpAdapter().getInstance();
}
exports.default = bootstrap;
//# sourceMappingURL=nest.js.map