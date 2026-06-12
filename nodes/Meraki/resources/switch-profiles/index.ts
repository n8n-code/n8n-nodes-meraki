import type { INodeProperties } from 'n8n-workflow';

export const switchProfilesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Profiles"
					]
				}
			},
			"options": [
				{
					"name": "Get Organization Config Template Switch Profiles",
					"value": "Get Organization Config Template Switch Profiles",
					"action": "List the switch profiles for your switch template configuration",
					"description": "List the switch profiles for your switch template configuration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/configTemplates/{{$parameter[\"configTemplateId\"]}}/switchProfiles"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationId}/configTemplates/{configTemplateId}/switchProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Profiles"
					],
					"operation": [
						"Get Organization Config Template Switch Profiles"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Profiles"
					],
					"operation": [
						"Get Organization Config Template Switch Profiles"
					]
				}
			}
		},
		{
			"displayName": "Config Template ID",
			"name": "configTemplateId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Profiles"
					],
					"operation": [
						"Get Organization Config Template Switch Profiles"
					]
				}
			}
		},
		{
			"displayName": "X Cisco Meraki API Key (Header)",
			"name": "security_meraki_api_key",
			"type": "string",
			"default": "",
			"description": "API key for meraki_api_key (header: X-Cisco-Meraki-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Cisco-Meraki-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Switch Profiles"
					],
					"operation": [
						"Get Organization Config Template Switch Profiles"
					]
				}
			}
		},
];
