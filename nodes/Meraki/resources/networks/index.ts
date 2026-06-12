import type { INodeProperties } from 'n8n-workflow';

export const networksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					]
				}
			},
			"options": [
				{
					"name": "Delete Network",
					"value": "Delete Network",
					"action": "Delete a network",
					"description": "Delete a network",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}"
						}
					}
				},
				{
					"name": "Get Network",
					"value": "Get Network",
					"action": "Return a network",
					"description": "Return a network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}"
						}
					}
				},
				{
					"name": "Update Network",
					"value": "Update Network",
					"action": "Update a network",
					"description": "Update a network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Air Marshal",
					"value": "Get Network Air Marshal",
					"action": "List Air Marshal scan results from a network",
					"description": "List Air Marshal scan results from a network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/airMarshal"
						}
					}
				},
				{
					"name": "Bind Network",
					"value": "Bind Network",
					"action": "Bind a network to a template.",
					"description": "Bind a network to a template.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/bind"
						}
					}
				},
				{
					"name": "Get Network Site To Site Vpn",
					"value": "Get Network Site To Site Vpn",
					"action": "Return the site-to-site VPN settings of a network",
					"description": "Return the site-to-site VPN settings of a network. Only valid for MX networks.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/siteToSiteVpn"
						}
					}
				},
				{
					"name": "Update Network Site To Site Vpn",
					"value": "Update Network Site To Site Vpn",
					"action": "Update the site-to-site VPN settings of a network",
					"description": "Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/siteToSiteVpn"
						}
					}
				},
				{
					"name": "Split Network",
					"value": "Split Network",
					"action": "Split a combined network into individual networks for each type of device",
					"description": "Split a combined network into individual networks for each type of device",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/split"
						}
					}
				},
				{
					"name": "Get Network Traffic",
					"value": "Get Network Traffic",
					"action": "Return the traffic analysis data for this network",
					"description": "Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/traffic"
						}
					}
				},
				{
					"name": "Unbind Network",
					"value": "Unbind Network",
					"action": "Unbind a network from a template.",
					"description": "Unbind a network from a template.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/unbind"
						}
					}
				},
				{
					"name": "Get Organization Networks",
					"value": "Get Organization Networks",
					"action": "List the networks in an organization",
					"description": "List the networks in an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/networks"
						}
					}
				},
				{
					"name": "Create Organization Network",
					"value": "Create Organization Network",
					"action": "Create a network",
					"description": "Create a network",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/networks"
						}
					}
				},
				{
					"name": "Combine Organization Networks",
					"value": "Combine Organization Networks",
					"action": "Combine multiple networks into a single network",
					"description": "Combine multiple networks into a single network",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organizations/{{$parameter[\"organizationId\"]}}/networks/combine"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /networks/{networkId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Delete Network"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Delete Network"
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
						"Networks"
					],
					"operation": [
						"Delete Network"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network"
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
						"Networks"
					],
					"operation": [
						"Get Network"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network"
					]
				}
			}
		},
		{
			"displayName": "Disable My Meraki Com",
			"name": "disableMyMerakiCom",
			"type": "boolean",
			"default": true,
			"description": "Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)",
			"routing": {
				"send": {
					"property": "disableMyMerakiCom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network"
					]
				}
			}
		},
		{
			"displayName": "Disable Remote Status Page",
			"name": "disableRemoteStatusPage",
			"type": "boolean",
			"default": true,
			"description": "Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false",
			"routing": {
				"send": {
					"property": "disableRemoteStatusPage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network"
					]
				}
			}
		},
		{
			"displayName": "Enrollment String",
			"name": "enrollmentString",
			"type": "string",
			"default": "",
			"description": "A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break.",
			"routing": {
				"send": {
					"property": "enrollmentString",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the network",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "string",
			"default": "",
			"description": "A space-separated list of tags to be applied to the network",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network"
					]
				}
			}
		},
		{
			"displayName": "Time Zone",
			"name": "timeZone",
			"type": "string",
			"default": "",
			"description": "The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>",
			"routing": {
				"send": {
					"property": "timeZone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network"
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
						"Networks"
					],
					"operation": [
						"Update Network"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/airMarshal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network Air Marshal"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network Air Marshal"
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
						"Networks"
					],
					"operation": [
						"Get Network Air Marshal"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.",
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
						"Networks"
					],
					"operation": [
						"Get Network Air Marshal"
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
						"Networks"
					],
					"operation": [
						"Get Network Air Marshal"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/bind",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Bind Network"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Bind Network"
					]
				}
			}
		},
		{
			"displayName": "Auto Bind",
			"name": "autoBind",
			"type": "boolean",
			"default": true,
			"description": "Optional boolean indicating whether the network's switches should automatically bind to profiles of the same model. Defaults to false if left unspecified. This option only affects switch networks and switch templates. Auto-bind is not valid unless the switch template has at least one profile and has at most one profile per switch model.",
			"routing": {
				"send": {
					"property": "autoBind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Bind Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Config Template ID",
			"name": "configTemplateId",
			"type": "string",
			"default": "",
			"description": "The ID of the template to which the network should be bound.",
			"routing": {
				"send": {
					"property": "configTemplateId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Bind Network"
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
						"Networks"
					],
					"operation": [
						"Bind Network"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/siteToSiteVpn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network Site To Site Vpn"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network Site To Site Vpn"
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
						"Networks"
					],
					"operation": [
						"Get Network Site To Site Vpn"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/siteToSiteVpn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network Site To Site Vpn"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network Site To Site Vpn"
					]
				}
			}
		},
		{
			"displayName": "Hubs",
			"name": "hubs",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required.",
			"routing": {
				"send": {
					"property": "hubs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network Site To Site Vpn"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "hub",
			"description": "The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub'",
			"options": [
				{
					"name": "Hub",
					"value": "hub"
				},
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Spoke",
					"value": "spoke"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network Site To Site Vpn"
					]
				}
			}
		},
		{
			"displayName": "Subnets",
			"name": "subnets",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of subnets and their VPN presence.",
			"routing": {
				"send": {
					"property": "subnets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Update Network Site To Site Vpn"
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
						"Networks"
					],
					"operation": [
						"Update Network Site To Site Vpn"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/split",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Split Network"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Split Network"
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
						"Networks"
					],
					"operation": [
						"Split Network"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/traffic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network Traffic"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network Traffic"
					]
				}
			}
		},
		{
			"displayName": "T 0",
			"name": "t0",
			"description": "The beginning of the timespan for the data. The maximum lookback period is 30 days from today.",
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
						"Networks"
					],
					"operation": [
						"Get Network Traffic"
					]
				}
			}
		},
		{
			"displayName": "Timespan",
			"name": "timespan",
			"description": "The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days.",
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
						"Networks"
					],
					"operation": [
						"Get Network Traffic"
					]
				}
			}
		},
		{
			"displayName": "Device Type",
			"name": "deviceType",
			"description": "Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'. When using 'combined', for each rule the data will come from the device type with the most usage.",
			"default": "appliance",
			"type": "options",
			"options": [
				{
					"name": "Appliance",
					"value": "appliance"
				},
				{
					"name": "Combined",
					"value": "combined"
				},
				{
					"name": "Switch",
					"value": "switch"
				},
				{
					"name": "Wireless",
					"value": "wireless"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "deviceType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Network Traffic"
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
						"Networks"
					],
					"operation": [
						"Get Network Traffic"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/unbind",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Unbind Network"
					]
				}
			}
		},
		{
			"displayName": "Network ID",
			"name": "networkId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Unbind Network"
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
						"Networks"
					],
					"operation": [
						"Unbind Network"
					]
				}
			}
		},
		{
			"displayName": "GET /organizations/{organizationId}/networks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Organization Networks"
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
						"Networks"
					],
					"operation": [
						"Get Organization Networks"
					]
				}
			}
		},
		{
			"displayName": "Config Template ID",
			"name": "configTemplateId",
			"description": "An optional parameter that is the ID of a config template. Will return all networks bound to that template.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "configTemplateId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Get Organization Networks"
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
						"Networks"
					],
					"operation": [
						"Get Organization Networks"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationId}/networks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Organization Network"
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
						"Networks"
					],
					"operation": [
						"Create Organization Network"
					]
				}
			}
		},
		{
			"displayName": "Copy From Network ID",
			"name": "copyFromNetworkId",
			"type": "string",
			"default": "",
			"description": "The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network's type exactly.",
			"routing": {
				"send": {
					"property": "copyFromNetworkId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Organization Network"
					]
				}
			}
		},
		{
			"displayName": "Disable My Meraki Com",
			"name": "disableMyMerakiCom",
			"type": "boolean",
			"default": true,
			"description": "Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false)",
			"routing": {
				"send": {
					"property": "disableMyMerakiCom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Organization Network"
					]
				}
			}
		},
		{
			"displayName": "Disable Remote Status Page",
			"name": "disableRemoteStatusPage",
			"type": "boolean",
			"default": true,
			"description": "Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false",
			"routing": {
				"send": {
					"property": "disableRemoteStatusPage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Organization Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the new network",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Organization Network"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "string",
			"default": "",
			"description": "A space-separated list of tags to be applied to the network",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Organization Network"
					]
				}
			}
		},
		{
			"displayName": "Time Zone",
			"name": "timeZone",
			"type": "string",
			"default": "",
			"description": "The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>",
			"routing": {
				"send": {
					"property": "timeZone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Organization Network"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "The type of the new network. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, environmental, or a space-separated list of those for a combined network.",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Create Organization Network"
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
						"Networks"
					],
					"operation": [
						"Create Organization Network"
					]
				}
			}
		},
		{
			"displayName": "POST /organizations/{organizationId}/networks/combine",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Combine Organization Networks"
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
						"Networks"
					],
					"operation": [
						"Combine Organization Networks"
					]
				}
			}
		},
		{
			"displayName": "Enrollment String",
			"name": "enrollmentString",
			"type": "string",
			"default": "",
			"description": "A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. All networks that are part of this combined network will have their enrollment string appended by '-network_type'. If left empty, all exisitng enrollment strings will be deleted.",
			"routing": {
				"send": {
					"property": "enrollmentString",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Combine Organization Networks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the combined network",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Combine Organization Networks"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Network Ids",
			"name": "networkIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of the network IDs that will be combined. If an ID of a combined network is included in this list, the other networks in the list will be grouped into that network",
			"routing": {
				"send": {
					"property": "networkIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networks"
					],
					"operation": [
						"Combine Organization Networks"
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
						"Networks"
					],
					"operation": [
						"Combine Organization Networks"
					]
				}
			}
		},
];
