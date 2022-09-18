export default interface Connection {
	connect (): Promise<any>;
	close (): Promise<void>
}