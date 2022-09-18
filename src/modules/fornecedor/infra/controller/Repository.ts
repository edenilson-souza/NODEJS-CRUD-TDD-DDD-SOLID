export default interface ControllerRepository {
	create (params: any, body: any) : Promise<any>;
    get (params: any, body: any) : Promise<any>;
	update (params: any, body: any) : Promise<any>;
	list(params: any, body: any) : Promise<any>;
	listAll(params: any, body: any) : Promise<any>;
}
