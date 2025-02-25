import {
	GameMessage,
	MiniUserInfo,
	MiniUserList,
	getAsHex,
} from "rusty-motors-nps";
import pino from "pino";
const defaultLogger = pino({ name: "nps.getLobMiniUserList" });

// Command id: 0x128
export async function getLobMiniUserList(
	commandId: number,
	data: Buffer,
): Promise<Buffer> {
	defaultLogger.debug("getLobMiniUserList called");
	defaultLogger.info(`Processing getLobMiniUserList command: ${getAsHex(data)}`);

	const miniUserList = new MiniUserList(0);

	miniUserList.addChannelUser(new MiniUserInfo(1000, "Molly"));

	const responseMessage = new GameMessage(0);
	responseMessage.header.setId(0x229);
	responseMessage.setData(miniUserList);

	return Promise.resolve(responseMessage.serialize());
}
