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


const verifiableIdDescriptor =	{
	"id": "VerifiableId",
	"constraints": {
		"fields": [
			{
				"name": "Credential Type",
				"path": [ '$.type' ],
				"filter": {
					"type": 'array',
					"items": { type: 'string' },
					"contains": { const: 'VerifiableId' }
				}
			},
			{
				"name": "First Name",
				"path": ['$.credentialSubject.firstName'],
				"filter": {}
			},
			{
				"name": "Family Name",
				"path": ['$.credentialSubject.familyName'],
				"filter": {}
			},
			{
				"name": "Personal Identifier",
				"path": ['$.credentialSubject.personalIdentifier'],
				"filter": {}
			},
			{
				"name": "Birthdate",
				"path": ['$.credentialSubject.birthdate'],
				"filter": {}
			}
		]
	}
}

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

const bachelorDescriptor = {
	"id": "Bachelor",
	"constraints": {
		"fields": [
			{
				"name": "Credential Type",
				"path": [ '$.type' ],
				"filter": {
					"type": 'array',
					"items": { type: 'string' },
					"contains": { const: 'Bachelor' }
				}
			},
			{
				"name": "Credential Subject Id",
				"path": ['$.credentialSubject.id'],
				"filter": {}
			},
			{
				"name": "First Name",
				"path": ['$.credentialSubject.firstName'],
				"filter": {}
			},
			{
				"name": "Family Name",
				"path": ['$.credentialSubject.familyName'],
				"filter": {}
			},
			{
				"name": "Diploma Title",
				"path": ['$.credentialSubject.diplomaTitle'],
				"filter": {}
			},
			{
				"name": "Grade",
				"path": ['$.credentialSubject.grade'],
				"filter": {}
			},
			{
				"name": "EQF Level",
				"path": ['$.credentialSubject.eqfLevel'],
				"filter": {}
			},
			{
				"name": "Certificate Id",
				"path": ['$.credentialSubject.certificateId'],
				"filter": {}
			},
			{
				"name": "Date of Birth",
				"path": ['$.credentialSubject.dateOfBirth'],
				"filter": {}
			},
			{
				"name": "Awardning Date",
				"path": ['$.credentialSubject.awardingDate'],
				"filter": {}
			},
			{
				"name": "Completion Date",
				"path": ['$.credentialSubject.completionDate'],
				"filter": {}
			},
		]
	}
}

const bachelorDescriptorSdJwt = {
	"id": "Bachelor",
	"constraints": {
		"fields": [
			{
				"name": "Credential Type",
				"path": [ '$.type' ],
				"filter": {
					"type": 'array',
					"items": { type: 'string' },
					"contains": { const: 'Bachelor' }
				}
			},
			{
				"name": "Credential Subject Id",
				"path": [ "$.credentialSubject.id" ],
				"filter": {}
			},
			{
				"name": "Family Name",
				"path": [ "$.credentialSubject.familyName" ],
				"filter": {}
			},
			{
				"name": "First Name",
				"path": [ "$.credentialSubject.firstName" ],
				"filter": {}
			},
			{
				"name": "EQF Level",
				"path": [ "$.credentialSubject.eqfLevel" ],
				"filter": {},
			},
		]
	}
}

const europeanHealthInsuranceCardDescriptor = {
	"id": "EuropeanHealthInsuranceCard",
	"constraints": {
		"fields": [
			{
				"name": "Credential Type",
				"path": [ '$.type' ],
				"filter": {
					"type": 'array',
					"items": { type: 'string' },
					"contains": { const: 'EuropeanHealthInsuranceCard' }
				}
			},
			{
				"name": "Credential Subject Id",
				"path": ['$.credentialSubject.id'],
				"filter": {}
			},
			{
				"name": "First Name",
				"path": ['$.credentialSubject.firstName'],
				"filter": {}
			},
			{
				"name": "Family Name",
				"path": ['$.credentialSubject.familyName'],
				"filter": {}
			},
			{
				"name": "Personal Identifier",
				"path": ['$.credentialSubject.personalIdentifier'],
				"filter": {}
			},
			{
				"name": "Birthdate",
				"path": ['$.credentialSubject.birthdate'],
				"filter": {}
			},
		]
	}
}


const funkePidSdJwtPresentationDefinition = {
	"id": "FunkePID",
	"title": "Funke PID",
	"description": ".....(desc)",
	"format": { "vc+sd-jwt": { alg: [ 'ES256' ] },jwt_vc_json: { alg: [ 'ES256' ] }, jwt_vp: { alg: [ 'ES256' ] } },
	"input_descriptors": [
		funkePidSdJwtDescriptor
	]
}

const verifiableIdWithBachelorPresentationDefinition = {
	"id": "VerifiableIdWithBachelor",
	"title": "Verifiable ID and Bachelor Diploma",
	"description": "Required Fields: Verifiable ID (type, personalIdentifier, firstName, familyName, birthdate), Bachelor Diploma (id, firstName, familyName, diplomaTitle, grade, eqfLevel, certificateId, dateOfBirth, awardingDate, completionDate)",
	"format": { "vc+sd-jwt": { alg: [ 'ES256' ] },jwt_vc_json: { alg: [ 'ES256' ] }, jwt_vp: { alg: [ 'ES256' ] } },
	"input_descriptors": [
		verifiableIdDescriptor,
		bachelorDescriptor
	]
}

const verifiableIdWithEuropeanHealthInsuranceCardPresentationDefinition = {
	"id": "VerifiableIdWithEuropeanHealthInsuranceCard",
	"title": "Verifiable ID and European Health Insurance Card",
	"description": "Required Fields: Verifiable ID (type, personalIdentifier, firstName, familyName, birthdate), EHIC (id, firstName, familyName, personalIdentifier, birthdate)",
	"format": { "vc+sd-jwt": { alg: [ 'ES256' ] },jwt_vc_json: { alg: [ 'ES256' ] }, jwt_vp: { alg: [ 'ES256' ] } },
	"input_descriptors": [
		verifiableIdDescriptor,
		europeanHealthInsuranceCardDescriptor
	]
}

const bachelorWithEuropeanHealthInsuranceCardPresentationDefinition = {
	"id": "BachelorWithEuropeanHealthInsuranceCard",
	"title": "Bachelor Diploma and European Health Insurance Card",
	"description": "Required Fields: Bachelor Diploma (id, firstName, familyName, diplomaTitle, grade, eqfLevel, certificateId, dateOfBirth, awardingDate, completionDate), EHIC (id, firstName, familyName, personalIdentifier, birthdate)",
	"format": { "vc+sd-jwt": { alg: [ 'ES256' ] },jwt_vc_json: { alg: [ 'ES256' ] }, jwt_vp: { alg: [ 'ES256' ] } },
	"input_descriptors": [
		bachelorDescriptor,
		europeanHealthInsuranceCardDescriptor
	]
}

const verifiableIdWithBachelorWithEuropeanHealthInsuranceCardPresentationDefinition = {
	"id": "VerifiableIdWithBachelorWithEuropeanHealthInsuranceCard",
	"title": "Verifiable ID, Bachelor Diploma and European Health Insurance Card",
	"description": "Required Fields: Verifiable ID (type, personalIdentifier, firstName, familyName, birthdate), Bachelor Diploma (id, firstName, familyName, diplomaTitle, grade, eqfLevel, certificateId, dateOfBirth, awardingDate, completionDate), EHIC (id, firstName, familyName, personalIdentifier, birthdate)",
	"format": { "vc+sd-jwt": { alg: [ 'ES256' ] },jwt_vc_json: { alg: [ 'ES256' ] }, jwt_vp: { alg: [ 'ES256' ] } },
	"input_descriptors": [
		verifiableIdDescriptor,
		bachelorDescriptor,
		europeanHealthInsuranceCardDescriptor,
	]
}

const minimalBachelorSdJwtPresentationDefinition = {
	"id": "MinimalBachelorSdJwtPresentationDefinition",
	"title": "Minimal Bachelor Diploma",
	"description": "Required Fields: id, type, familyName, firstName, eqfLevel",
	"format": { "vc+sd-jwt": { alg: [ 'ES256' ] } },
	"input_descriptors": [
		bachelorDescriptorSdJwt
	]
}

const customVerifiableIdSdJwtPresentationDefinition = {
	"id": "CustomVerifiableId",
	"title": "Custom Verifiable ID",
	"description": "Selectable Fields: personalIdentifier, firstName, familyName, birthdate",
	"selectable": true,
	"format": { "vc+sd-jwt": { alg: ['ES256'] }, jwt_vc_json: { alg: ['ES256'] }, jwt_vp: { alg: ['ES256'] } },
	"input_descriptors": [
		verifiableIdDescriptor
	]
}
// const projectManagerPresentationDefinition = {
// 	"id": "Multiple", // scope name
// 	"title": "Project Manager",
// 	"description": "Apply for Project Manager",
// 	"format": { jwt_vc: { alg: [ 'ES256' ] },jwt_vc_json: { alg: [ 'EdDSA' ] }, jwt_vp: { alg: [ 'ES256' ] } },
// 	"input_descriptors": [
// 		{
// 			"id": "Open Badge",
// 			"constraints": {
// 				"fields": [
// 					{
// 						"path": [ '$.vc.type' ],
// 						"filter": {
// 							"type": 'array',
// 							"items": { type: 'string' },
// 							"contains": { const: 'OpenBadgeCredential' }
// 						}
// 					}
// 				]
// 			}
// 		},
// 		{
// 			"id": "Residence",
// 			"constraints": {
// 				"fields": [
// 					{
// 						"path": [ '$.vc.type' ],
// 						"filter": {
// 							"type": 'array',
// 							"items": { type: 'string' },
// 							"contains": { const: 'PermanentResidentCard' }
// 						}
// 					}
// 				]
// 			}
// 		},
// 		bachelorDescriptor
// 	]
// }


@injectable()
export class VerifierConfigurationService implements VerifierConfigurationInterface {


	getPresentationDefinitions(): PresentationDefinitionTypeWithFormat[] {
		return [
			funkePidSdJwtPresentationDefinition,
			customVerifiableIdSdJwtPresentationDefinition,
			{
				"title": "Minimal Verifiable ID",
				"description": "Required Fields: id, personalIdentifier",
				"id": "vid", // scope name
				"format": { "vc+sd-jwt": { alg: ['ES256'] }, jwt_vp: { alg: ['ES256'] } },
				"input_descriptors": [
					{
						"id": "VID",
						"constraints": {
							"fields": [
								{
									"path": [
										"$.credentialSubject.personalIdentifier"
									],
									"filter": {}
								},
								{
									"path": [
										"$.credentialSchema.id"
									],
									"filter": {
										"type": "string",
										"const": "https://api-pilot.ebsi.eu/trusted-schemas-registry/v2/schemas/z8Y6JJnebU2UuQQNc2R8GYqkEiAMj3Hd861rQhsoNWxsM"
									}
								}
							]
						}
					}
				]
			},
			{
				"id": "VerifiableId",
				"title": "Verifiable ID",
				"description": "Required Fields: type, personalIdentifier, firstName, familyName, birthdate",
				"format": { "vc+sd-jwt": { alg: [ 'ES256' ] },jwt_vc_json: { alg: [ 'ES256' ] }, jwt_vp: { alg: [ 'ES256' ] } },
				"input_descriptors": [
					verifiableIdDescriptor
				]
			},
			minimalBachelorSdJwtPresentationDefinition,
			{
				"id": "Bachelor",
				"title": "Bachelor Diploma",
				"description": "Required Fields: id, firstName, familyName, diplomaTitle, grade, eqfLevel, certificateId, dateOfBirth, awardingDate, completionDate",
				"format": { "vc+sd-jwt": { alg: [ 'ES256' ] },jwt_vc_json: { alg: [ 'ES256' ] }, jwt_vp: { alg: [ 'ES256' ] } },
				"input_descriptors": [
					bachelorDescriptor
				]
			},
			{
				"id": "EuropeanHealthInsuranceCard",
				"title": "European HealthInsurance Card",
				"description": "Required Fields: id, firstName, familyName, personalIdentifier, birthdate",
				"format": { "vc+sd-jwt": { alg: [ 'ES256' ] },jwt_vc_json: { alg: [ 'ES256' ] }, jwt_vp: { alg: [ 'ES256' ] } },
				"input_descriptors": [
					europeanHealthInsuranceCardDescriptor
				]
			},
			verifiableIdWithBachelorPresentationDefinition,
			verifiableIdWithEuropeanHealthInsuranceCardPresentationDefinition,
			bachelorWithEuropeanHealthInsuranceCardPresentationDefinition,
			verifiableIdWithBachelorWithEuropeanHealthInsuranceCardPresentationDefinition,
			// projectManagerPresentationDefinition
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


	