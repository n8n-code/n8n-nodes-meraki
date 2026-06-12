import type { INodeProperties } from 'n8n-workflow';

export const vlaNsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					]
				}
			},
			"options": [
				{
					"name": "Get Network Vlans",
					"value": "Get Network Vlans",
					"action": "List the VLANs for an MX network",
					"description": "List the VLANs for an MX network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/vlans"
						}
					}
				},
				{
					"name": "Create Network Vlan",
					"value": "Create Network Vlan",
					"action": "Add a VLAN",
					"description": "Add a VLAN",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/vlans"
						}
					}
				},
				{
					"name": "Delete Network Vlan",
					"value": "Delete Network Vlan",
					"action": "Delete a VLAN from a network",
					"description": "Delete a VLAN from a network",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/vlans/{{$parameter[\"vlanId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Vlan",
					"value": "Get Network Vlan",
					"action": "Return a VLAN",
					"description": "Return a VLAN",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/vlans/{{$parameter[\"vlanId\"]}}"
						}
					}
				},
				{
					"name": "Update Network Vlan",
					"value": "Update Network Vlan",
					"action": "Update a VLAN",
					"description": "Update a VLAN",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/vlans/{{$parameter[\"vlanId\"]}}"
						}
					}
				},
				{
					"name": "Get Network Vlans Enabled State",
					"value": "Get Network Vlans Enabled State",
					"action": "Returns the enabled status of VLANs for the network",
					"description": "Returns the enabled status of VLANs for the network",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/vlansEnabledState"
						}
					}
				},
				{
					"name": "Update Network Vlans Enabled State",
					"value": "Update Network Vlans Enabled State",
					"action": "Enable/Disable VLANs for the given network",
					"description": "Enable/Disable VLANs for the given network",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networks/{{$parameter[\"networkId\"]}}/vlansEnabledState"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networks/{networkId}/vlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Get Network Vlans"
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
						"VLA Ns"
					],
					"operation": [
						"Get Network Vlans"
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
						"VLA Ns"
					],
					"operation": [
						"Get Network Vlans"
					]
				}
			}
		},
		{
			"displayName": "POST /networks/{networkId}/vlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Create Network Vlan"
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
						"VLA Ns"
					],
					"operation": [
						"Create Network Vlan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Appliance Ip",
			"name": "applianceIp",
			"type": "string",
			"default": "",
			"description": "The local IP of the appliance on the VLAN",
			"routing": {
				"send": {
					"property": "applianceIp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Create Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Group Policy ID",
			"name": "groupPolicyId",
			"type": "string",
			"default": "",
			"description": "The id of the desired group policy to apply to the VLAN",
			"routing": {
				"send": {
					"property": "groupPolicyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Create Network Vlan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "The VLAN ID of the new VLAN (must be between 1 and 4094)",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Create Network Vlan"
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
			"description": "The name of the new VLAN",
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
						"VLA Ns"
					],
					"operation": [
						"Create Network Vlan"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subnet",
			"name": "subnet",
			"type": "string",
			"default": "",
			"description": "The subnet of the VLAN",
			"routing": {
				"send": {
					"property": "subnet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Create Network Vlan"
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
						"VLA Ns"
					],
					"operation": [
						"Create Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networks/{networkId}/vlans/{vlanId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Delete Network Vlan"
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
						"VLA Ns"
					],
					"operation": [
						"Delete Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Vlan ID",
			"name": "vlanId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Delete Network Vlan"
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
						"VLA Ns"
					],
					"operation": [
						"Delete Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/vlans/{vlanId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Get Network Vlan"
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
						"VLA Ns"
					],
					"operation": [
						"Get Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Vlan ID",
			"name": "vlanId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Get Network Vlan"
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
						"VLA Ns"
					],
					"operation": [
						"Get Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/vlans/{vlanId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
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
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Vlan ID",
			"name": "vlanId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Appliance Ip",
			"name": "applianceIp",
			"type": "string",
			"default": "",
			"description": "The local IP of the appliance on the VLAN",
			"routing": {
				"send": {
					"property": "applianceIp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Dhcp Boot Filename",
			"name": "dhcpBootFilename",
			"type": "string",
			"default": "",
			"description": "DHCP boot option for boot filename",
			"routing": {
				"send": {
					"property": "dhcpBootFilename",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Dhcp Boot Next Server",
			"name": "dhcpBootNextServer",
			"type": "string",
			"default": "",
			"description": "DHCP boot option to direct boot clients to the server to load the boot file from",
			"routing": {
				"send": {
					"property": "dhcpBootNextServer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Dhcp Boot Options Enabled",
			"name": "dhcpBootOptionsEnabled",
			"type": "boolean",
			"default": true,
			"description": "Use DHCP boot options specified in other properties",
			"routing": {
				"send": {
					"property": "dhcpBootOptionsEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Dhcp Handling",
			"name": "dhcpHandling",
			"type": "options",
			"default": "Do not respond to DHCP requests",
			"description": "The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'",
			"options": [
				{
					"name": "Do Not Respond To DHCP Requests",
					"value": "Do not respond to DHCP requests"
				},
				{
					"name": "Relay DHCP To Another Server",
					"value": "Relay DHCP to another server"
				},
				{
					"name": "Run A DHCP Server",
					"value": "Run a DHCP server"
				}
			],
			"routing": {
				"send": {
					"property": "dhcpHandling",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Dhcp Lease Time",
			"name": "dhcpLeaseTime",
			"type": "options",
			"default": "1 day",
			"description": "The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'",
			"options": [
				{
					"name": "1 Day",
					"value": "1 day"
				},
				{
					"name": "1 Hour",
					"value": "1 hour"
				},
				{
					"name": "1 Week",
					"value": "1 week"
				},
				{
					"name": "12 Hours",
					"value": "12 hours"
				},
				{
					"name": "30 Minutes",
					"value": "30 minutes"
				},
				{
					"name": "4 Hours",
					"value": "4 hours"
				}
			],
			"routing": {
				"send": {
					"property": "dhcpLeaseTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Dhcp Options",
			"name": "dhcpOptions",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The list of DHCP options that will be included in DHCP responses. Each object in the list should have \"code\", \"type\", and \"value\" properties.",
			"routing": {
				"send": {
					"property": "dhcpOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Dhcp Relay Server Ips",
			"name": "dhcpRelayServerIps",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The IPs of the DHCP servers that DHCP requests should be relayed to",
			"routing": {
				"send": {
					"property": "dhcpRelayServerIps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "DNS Nameservers",
			"name": "dnsNameservers",
			"type": "string",
			"default": "",
			"description": "The DNS nameservers used for DHCP responses, either \"upstream_dns\", \"google_dns\", \"opendns\", or a newline seperated string of IP addresses or domain names",
			"routing": {
				"send": {
					"property": "dnsNameservers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Fixed Ip Assignments",
			"name": "fixedIpAssignments",
			"type": "json",
			"default": "{}",
			"description": "The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain \"ip\" and \"name\" string fields. See the sample request/response for more details.",
			"routing": {
				"send": {
					"property": "fixedIpAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Group Policy ID",
			"name": "groupPolicyId",
			"type": "string",
			"default": "",
			"description": "The id of the desired group policy to apply to the VLAN",
			"routing": {
				"send": {
					"property": "groupPolicyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the VLAN",
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
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Reserved Ip Ranges",
			"name": "reservedIpRanges",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "The DHCP reserved IP ranges on the VLAN",
			"routing": {
				"send": {
					"property": "reservedIpRanges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Subnet",
			"name": "subnet",
			"type": "string",
			"default": "",
			"description": "The subnet of the VLAN",
			"routing": {
				"send": {
					"property": "subnet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "Vpn Nat Subnet",
			"name": "vpnNatSubnet",
			"type": "string",
			"default": "",
			"description": "The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN",
			"routing": {
				"send": {
					"property": "vpnNatSubnet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
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
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlan"
					]
				}
			}
		},
		{
			"displayName": "GET /networks/{networkId}/vlansEnabledState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Get Network Vlans Enabled State"
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
						"VLA Ns"
					],
					"operation": [
						"Get Network Vlans Enabled State"
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
						"VLA Ns"
					],
					"operation": [
						"Get Network Vlans Enabled State"
					]
				}
			}
		},
		{
			"displayName": "PUT /networks/{networkId}/vlansEnabledState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlans Enabled State"
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
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlans Enabled State"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Boolean indicating whether to enable (true) or disable (false) VLANs for the network",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlans Enabled State"
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
						"VLA Ns"
					],
					"operation": [
						"Update Network Vlans Enabled State"
					]
				}
			}
		},
];
