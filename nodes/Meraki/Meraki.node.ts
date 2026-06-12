import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apiUsageDescription } from './resources/api-usage';
import { actionBatchesDescription } from './resources/action-batches';
import { adminsDescription } from './resources/admins';
import { alertSettingsDescription } from './resources/alert-settings';
import { bluetoothClientsDescription } from './resources/bluetooth-clients';
import { bluetoothSettingsDescription } from './resources/bluetooth-settings';
import { cameraQualityRetentionProfilesDescription } from './resources/camera-quality-retention-profiles';
import { camerasDescription } from './resources/cameras';
import { changeLogDescription } from './resources/change-log';
import { clientsDescription } from './resources/clients';
import { configTemplatesDescription } from './resources/config-templates';
import { contentFilteringCategoriesDescription } from './resources/content-filtering-categories';
import { contentFilteringRulesDescription } from './resources/content-filtering-rules';
import { devicesDescription } from './resources/devices';
import { eventsDescription } from './resources/events';
import { firewalledServicesDescription } from './resources/firewalled-services';
import { floorPlansDescription } from './resources/floor-plans';
import { intrusionSettingsDescription } from './resources/intrusion-settings';
import { licensesDescription } from './resources/licenses';
import { linkAggregationsDescription } from './resources/link-aggregations';
import { mgLanSettingsDescription } from './resources/mg-lan-settings';
import { mgPortForwardingRulesDescription } from './resources/mg-port-forwarding-rules';
import { mrL3FirewallDescription } from './resources/mr-l-3-firewall';
import { mvSenseDescription } from './resources/mv-sense';
import { mx11NatRulesDescription } from './resources/mx-1-1-nat-rules';
import { mx1ManyNatRulesDescription } from './resources/mx-1-many-nat-rules';
import { mxL3InboundFirewallDescription } from './resources/mx-l-3-inbound-firewall';
import { mxL3OutboundFirewallDescription } from './resources/mx-l-3-outbound-firewall';
import { mxL7ApplicationCategoriesDescription } from './resources/mx-l-7-application-categories';
import { mxL7FirewallDescription } from './resources/mx-l-7-firewall';
import { mxVlanPortsDescription } from './resources/mx-vlan-ports';
import { mxVpnFirewallDescription } from './resources/mx-vpn-firewall';
import { mxCellularFirewallDescription } from './resources/mx-cellular-firewall';
import { mxPortForwardingRulesDescription } from './resources/mx-port-forwarding-rules';
import { mxStaticRoutesDescription } from './resources/mx-static-routes';
import { mxWarmSpareSettingsDescription } from './resources/mx-warm-spare-settings';
import { malwareSettingsDescription } from './resources/malware-settings';
import { merakiAuthUsersDescription } from './resources/meraki-auth-users';
import { monitoredMediaServersDescription } from './resources/monitored-media-servers';
import { namedTagScopeDescription } from './resources/named-tag-scope';
import { networksDescription } from './resources/networks';
import { openApiSpecDescription } from './resources/open-api-spec';
import { organizationsDescription } from './resources/organizations';
import { piiDescription } from './resources/pii';
import { radioSettingsDescription } from './resources/radio-settings';
import { samlRolesDescription } from './resources/saml-roles';
import { smDescription } from './resources/sm';
import { snmpSettingsDescription } from './resources/snmp-settings';
import { ssiDsDescription } from './resources/ssi-ds';
import { securityEventsDescription } from './resources/security-events';
import { splashLoginAttemptsDescription } from './resources/splash-login-attempts';
import { splashSettingsDescription } from './resources/splash-settings';
import { switchAccessPoliciesDescription } from './resources/switch-access-policies';
import { switchPortSchedulesDescription } from './resources/switch-port-schedules';
import { switchPortsDescription } from './resources/switch-ports';
import { switchProfilesDescription } from './resources/switch-profiles';
import { switchSettingsDescription } from './resources/switch-settings';
import { switchStacksDescription } from './resources/switch-stacks';
import { syslogServersDescription } from './resources/syslog-servers';
import { trafficShapingUplinkSettingsDescription } from './resources/traffic-shaping-uplink-settings';
import { vlaNsDescription } from './resources/vla-ns';
import { wirelessHealthDescription } from './resources/wireless-health';
import { wirelessSettingsDescription } from './resources/wireless-settings';

export class Meraki implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Meraki',
                name: 'N8nDevMeraki',
                icon: { light: 'file:./meraki.png', dark: 'file:./meraki.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Cisco Meraki Dashboard REST API uses OpenAPI specification.',
                defaults: { name: 'Meraki' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevMerakiApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "API Usage",
					"value": "API Usage",
					"description": ""
				},
				{
					"name": "Action Batches",
					"value": "Action Batches",
					"description": ""
				},
				{
					"name": "Admins",
					"value": "Admins",
					"description": ""
				},
				{
					"name": "Alert Settings",
					"value": "Alert Settings",
					"description": ""
				},
				{
					"name": "Bluetooth Clients",
					"value": "Bluetooth Clients",
					"description": ""
				},
				{
					"name": "Bluetooth Settings",
					"value": "Bluetooth Settings",
					"description": ""
				},
				{
					"name": "Camera Quality Retention Profiles",
					"value": "Camera Quality Retention Profiles",
					"description": ""
				},
				{
					"name": "Cameras",
					"value": "Cameras",
					"description": ""
				},
				{
					"name": "Change Log",
					"value": "Change Log",
					"description": ""
				},
				{
					"name": "Clients",
					"value": "Clients",
					"description": ""
				},
				{
					"name": "Config Templates",
					"value": "Config Templates",
					"description": ""
				},
				{
					"name": "Content Filtering Categories",
					"value": "Content Filtering Categories",
					"description": ""
				},
				{
					"name": "Content Filtering Rules",
					"value": "Content Filtering Rules",
					"description": ""
				},
				{
					"name": "Devices",
					"value": "Devices",
					"description": ""
				},
				{
					"name": "Events",
					"value": "Events",
					"description": ""
				},
				{
					"name": "Firewalled Services",
					"value": "Firewalled Services",
					"description": ""
				},
				{
					"name": "Floor Plans",
					"value": "Floor Plans",
					"description": ""
				},
				{
					"name": "Intrusion Settings",
					"value": "Intrusion Settings",
					"description": ""
				},
				{
					"name": "Licenses",
					"value": "Licenses",
					"description": ""
				},
				{
					"name": "Link Aggregations",
					"value": "Link Aggregations",
					"description": ""
				},
				{
					"name": "MG LAN Settings",
					"value": "MG LAN Settings",
					"description": ""
				},
				{
					"name": "MG Port Forwarding Rules",
					"value": "MG Port Forwarding Rules",
					"description": ""
				},
				{
					"name": "MR L 3 Firewall",
					"value": "MR L 3 Firewall",
					"description": ""
				},
				{
					"name": "MV Sense",
					"value": "MV Sense",
					"description": ""
				},
				{
					"name": "MX 1 1 NAT Rules",
					"value": "MX 1 1 NAT Rules",
					"description": ""
				},
				{
					"name": "MX 1 Many NAT Rules",
					"value": "MX 1 Many NAT Rules",
					"description": ""
				},
				{
					"name": "MX L 3 Inbound Firewall",
					"value": "MX L 3 Inbound Firewall",
					"description": ""
				},
				{
					"name": "MX L 3 Outbound Firewall",
					"value": "MX L 3 Outbound Firewall",
					"description": ""
				},
				{
					"name": "MX L 7 Application Categories",
					"value": "MX L 7 Application Categories",
					"description": ""
				},
				{
					"name": "MX L 7 Firewall",
					"value": "MX L 7 Firewall",
					"description": ""
				},
				{
					"name": "MX VLAN Ports",
					"value": "MX VLAN Ports",
					"description": ""
				},
				{
					"name": "MX VPN Firewall",
					"value": "MX VPN Firewall",
					"description": ""
				},
				{
					"name": "MX Cellular Firewall",
					"value": "MX Cellular Firewall",
					"description": ""
				},
				{
					"name": "MX Port Forwarding Rules",
					"value": "MX Port Forwarding Rules",
					"description": ""
				},
				{
					"name": "MX Static Routes",
					"value": "MX Static Routes",
					"description": ""
				},
				{
					"name": "MX Warm Spare Settings",
					"value": "MX Warm Spare Settings",
					"description": ""
				},
				{
					"name": "Malware Settings",
					"value": "Malware Settings",
					"description": ""
				},
				{
					"name": "Meraki Auth Users",
					"value": "Meraki Auth Users",
					"description": ""
				},
				{
					"name": "Monitored Media Servers",
					"value": "Monitored Media Servers",
					"description": ""
				},
				{
					"name": "Named Tag Scope",
					"value": "Named Tag Scope",
					"description": ""
				},
				{
					"name": "Networks",
					"value": "Networks",
					"description": ""
				},
				{
					"name": "Open API Spec",
					"value": "Open API Spec",
					"description": ""
				},
				{
					"name": "Organizations",
					"value": "Organizations",
					"description": ""
				},
				{
					"name": "PII",
					"value": "PII",
					"description": ""
				},
				{
					"name": "Radio Settings",
					"value": "Radio Settings",
					"description": ""
				},
				{
					"name": "SAML Roles",
					"value": "SAML Roles",
					"description": ""
				},
				{
					"name": "SM",
					"value": "SM",
					"description": ""
				},
				{
					"name": "SNMP Settings",
					"value": "SNMP Settings",
					"description": ""
				},
				{
					"name": "SSI Ds",
					"value": "SSI Ds",
					"description": ""
				},
				{
					"name": "Security Events",
					"value": "Security Events",
					"description": ""
				},
				{
					"name": "Splash Login Attempts",
					"value": "Splash Login Attempts",
					"description": ""
				},
				{
					"name": "Splash Settings",
					"value": "Splash Settings",
					"description": ""
				},
				{
					"name": "Switch Access Policies",
					"value": "Switch Access Policies",
					"description": ""
				},
				{
					"name": "Switch Port Schedules",
					"value": "Switch Port Schedules",
					"description": ""
				},
				{
					"name": "Switch Ports",
					"value": "Switch Ports",
					"description": ""
				},
				{
					"name": "Switch Profiles",
					"value": "Switch Profiles",
					"description": ""
				},
				{
					"name": "Switch Settings",
					"value": "Switch Settings",
					"description": ""
				},
				{
					"name": "Switch Stacks",
					"value": "Switch Stacks",
					"description": ""
				},
				{
					"name": "Syslog Servers",
					"value": "Syslog Servers",
					"description": ""
				},
				{
					"name": "Traffic Shaping Uplink Settings",
					"value": "Traffic Shaping Uplink Settings",
					"description": ""
				},
				{
					"name": "VLA Ns",
					"value": "VLA Ns",
					"description": ""
				},
				{
					"name": "Wireless Health",
					"value": "Wireless Health",
					"description": ""
				},
				{
					"name": "Wireless Settings",
					"value": "Wireless Settings",
					"description": ""
				}
			],
			"default": ""
		},
		...apiUsageDescription,
		...actionBatchesDescription,
		...adminsDescription,
		...alertSettingsDescription,
		...bluetoothClientsDescription,
		...bluetoothSettingsDescription,
		...cameraQualityRetentionProfilesDescription,
		...camerasDescription,
		...changeLogDescription,
		...clientsDescription,
		...configTemplatesDescription,
		...contentFilteringCategoriesDescription,
		...contentFilteringRulesDescription,
		...devicesDescription,
		...eventsDescription,
		...firewalledServicesDescription,
		...floorPlansDescription,
		...intrusionSettingsDescription,
		...licensesDescription,
		...linkAggregationsDescription,
		...mgLanSettingsDescription,
		...mgPortForwardingRulesDescription,
		...mrL3FirewallDescription,
		...mvSenseDescription,
		...mx11NatRulesDescription,
		...mx1ManyNatRulesDescription,
		...mxL3InboundFirewallDescription,
		...mxL3OutboundFirewallDescription,
		...mxL7ApplicationCategoriesDescription,
		...mxL7FirewallDescription,
		...mxVlanPortsDescription,
		...mxVpnFirewallDescription,
		...mxCellularFirewallDescription,
		...mxPortForwardingRulesDescription,
		...mxStaticRoutesDescription,
		...mxWarmSpareSettingsDescription,
		...malwareSettingsDescription,
		...merakiAuthUsersDescription,
		...monitoredMediaServersDescription,
		...namedTagScopeDescription,
		...networksDescription,
		...openApiSpecDescription,
		...organizationsDescription,
		...piiDescription,
		...radioSettingsDescription,
		...samlRolesDescription,
		...smDescription,
		...snmpSettingsDescription,
		...ssiDsDescription,
		...securityEventsDescription,
		...splashLoginAttemptsDescription,
		...splashSettingsDescription,
		...switchAccessPoliciesDescription,
		...switchPortSchedulesDescription,
		...switchPortsDescription,
		...switchProfilesDescription,
		...switchSettingsDescription,
		...switchStacksDescription,
		...syslogServersDescription,
		...trafficShapingUplinkSettingsDescription,
		...vlaNsDescription,
		...wirelessHealthDescription,
		...wirelessSettingsDescription
                ],
        };
}
