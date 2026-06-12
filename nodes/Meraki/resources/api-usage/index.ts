import type { INodeProperties } from 'n8n-workflow';

export const apiUsageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					]
				}
			},
			"options": [
				{
					"name": "Get Organization API Requests",
					"value": "Get Organization API Requests",
					"action": "List the API requests made by an organization",
					"description": "List the API requests made by an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/apiRequests"
						}
					}
				},
				{
					"name": "Get Organization API Requests Overview",
					"value": "Get Organization API Requests Overview",
					"action": "Return an aggregated overview of API requests data",
					"description": "Return an aggregated overview of API requests data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/apiRequests/overview"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organizations/{organizationId}/apiRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
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
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 31 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 31 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "perPage",
			"description": "The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "perPage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "Starting After",
			"name": "startingAfter",
			"description": "A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startingAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "Ending Before",
			"name": "endingBefore",
			"description": "A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endingBefore",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "Admin ID",
			"name": "adminId",
			"description": "Filter the results by the ID of the admin who made the API requests",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "adminId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "Path",
			"name": "path",
			"description": "Filter the results by the path of the API requests",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "path",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "Method",
			"name": "method",
			"description": "Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE')",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "method",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "Response Code",
			"name": "responseCode",
			"description": "Filter the results by the response code of the API requests",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "responseCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "Source Ip",
			"name": "sourceIp",
			"description": "Filter the results by the IP address of the originating API request",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sourceIp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
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
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/apiRequests/overview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests Overview"
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
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests Overview"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 31 days from today.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t0",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests Overview"
					]
				}
			}
		},
		{
			"displayName": "T 1",
			"name": "t1",
			"description": "The end of the timespan for the data. t1 can be a maximum of 31 days after t0.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "t1",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests Overview"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timespan",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests Overview"
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
						"API Usage"
					],
					"operation": [
						"Get Organization API Requests Overview"
					]
				}
			}
		},
];
