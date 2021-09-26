import { pino } from "pino";
import { EServerConnectionName, AppConfiguration } from "mcos-types";
import { RoutingMesh } from "mcos-router";
import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { ConfigurationManager } from "mcos-config";

const log = pino();
export const CastanetResponse = {
  body: Buffer.from("cafebeef00000000000003", "hex"),
  header: {
    type: "Content-Type",
    value: "application/octet-stream",
  },
};

export class PatchServer {
  static _instance: PatchServer;
  _config: AppConfiguration;
  _server: Server;
  _serviceName = "MCOServer:Patch";

  static getInstance(): PatchServer {
    if (!PatchServer._instance) {
      PatchServer._instance = new PatchServer();
    }
    return PatchServer._instance;
  }

  private constructor() {
    this._config = ConfigurationManager.getInstance().getConfig();
    this._server = createServer((request, response) => {
      this.handleRequest(request, response);
    });

    this._server.on("error", (error) => {
      process.exitCode = -1;
      log.error("error", `Server error: ${error.message}`, {
        service: this._serviceName,
      });
      log.info("info", `Server shutdown: ${process.exitCode}`, {
        service: this._serviceName,
      });
      process.exit();
    });
  }

  handleRequest(request: IncomingMessage, response: ServerResponse): void {
    const responseData = CastanetResponse;

    switch (request.url) {
      case "/games/EA_Seattle/MotorCity/UpdateInfo":
      case "/games/EA_Seattle/MotorCity/NPS":
      case "/games/EA_Seattle/MotorCity/MCO":
        log.debug(
          "debug",
          `[PATCH] Request from ${request.socket.remoteAddress} for ${request.method} ${request.url}.`,
          { service: this._serviceName }
        );

        response.setHeader(responseData.header.type, responseData.header.value);
        response.end(responseData.body);
        break;

      default:
        response.statusCode = 404;
        response.end("");
        break;
    }
  }

  start(): Server {
    const host = this._config.serverSettings.ipServer || "localhost";
    const port = 81;
    return this._server.listen({ port, host }, () => {
      log.debug("debug", `port ${port} listening`, { service: this._serviceName });
      log.info("info", "Patch server is listening...", {
        service: this._serviceName,
      });

      // Register service with router
      RoutingMesh.getInstance().registerServiceWithRouter(
        EServerConnectionName.PATCH,
        host,
        port
      );
    });
  }
}
