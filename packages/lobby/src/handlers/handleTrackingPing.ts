import { SerializedBufferOld } from "rusty-motors-shared";
import pino, { Logger } from "pino";
const defaultLogger = pino({ name: "PersonaServer" });


export async function handleTrackingPing({
	connectionId,
	message,
	log = defaultLogger,
}: {
	connectionId: string;
	message: SerializedBufferOld;
	log?: Logger;
}): Promise<{
	connectionId: string;
	messages: SerializedBufferOld[];
}> {
	log.debug("Handling NPS_TRACKING_PING");
	log.debug(`Received command: ${message.toString()}`);

	log.debug("Skipping response");

	return {
		connectionId,
		messages: [],
	};
}
