import { injectable } from "inversify";
import { OpenidForPresentationsConfiguration } from "../../services/types/OpenidForPresentationsConfiguration.type";
import { authorizationServerMetadataConfiguration } from "../../authorizationServiceConfiguration";
import config from "../../../config";
import { VerifierConfigurationInterface } from "../../services/interfaces";
import { InputDescriptorType } from "@wwwallet/ssi-sdk";
import "reflect-metadata";

export type PresentationDefinitionTypeWithFormat = {
	title: string;
	description: string;
	id: string;
	format?: any;
	input_descriptors: InputDescriptorType[];
	selectable?: boolean;
};


const funkePidSdJwtDescriptor =	{
	"id": "VerifiableId",
	"constraints": {
		"fields": [
			{
				"name": "Given Name",
				"path": ['$.given_name'],
				"filter": {}
			},
			{
				"name": "Family Name",
				"path": ['$.family_name'],
				"filter": {}
			},
			{
				"name": "Age Over 18",
				"path": ['$.age_equal_or_over.18'],
				"filter": {}
			},
			{
				"name": "Issuing Authority",
				"path": ['$.issuing_authority'],
				"filter": {}
			},
			{
				"name": "Birthdate",
				"path": ['$.birthdate'],
				"filter": {}
			}
		]
	}
}


const funkePidSdJwtPresentationDefinition = {
	"id": "FunkePID",
	"title": "Funke PID",
	"description": "Required Fields: Given Name, Family Name, Age Over 18, Birth Date, Issuing Authority",
	"format": { "vc+sd-jwt": { alg: [ 'ES256' ] },jwt_vc_json: { alg: [ 'ES256' ] }, jwt_vp: { alg: [ 'ES256' ] } },
	"input_descriptors": [
		funkePidSdJwtDescriptor
	]
}

const customVerifiableIdSdJwtPresentationDefinition = {
	"id": "CustomFunkePID",
	"title": "Custom Funke PID",
	"description": "Selectable Fields: Given Name, Family Name, Age Over 18, Birth Date, Issuing Authority",
	"selectable": true,
	"format": { "vc+sd-jwt": { alg: ['ES256'] }, jwt_vc_json: { alg: ['ES256'] }, jwt_vp: { alg: ['ES256'] } },
	"input_descriptors": [
		funkePidSdJwtDescriptor
	]
}


@injectable()
export class VerifierConfigurationService implements VerifierConfigurationInterface {


	getPresentationDefinitions(): PresentationDefinitionTypeWithFormat[] {
		return [
			funkePidSdJwtPresentationDefinition,
			customVerifiableIdSdJwtPresentationDefinition,
		]
	}


	getConfiguration(): OpenidForPresentationsConfiguration {
		return {
			baseUrl: config.url,
			client_id: authorizationServerMetadataConfiguration.authorization_endpoint,
			redirect_uri: config.url + "/verification/direct_post",
			authorizationServerWalletIdentifier: "authorization_server",
		}
	}

}


	