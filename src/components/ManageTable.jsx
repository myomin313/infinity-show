export default function ManageTable() {
  const data = [
    {
      option: "Manage Groups",
      description: [
        "Systems Groups",
        "Human User Groups",
        "Admin Users Group",
        "Standard Users Group"
      ]
    },
    {
      option: "Manage Policies",
      description: [
        "Systems Policies",
        "Human User Policies",
        "Admin Policies",
        "Standard Users Group"
      ]
    },
    {
      option: "Define & Manage Policies",
      description: [
        "Policy Based Access Control (PBAC) Policy *Default*",
        "Role Based Access Control (RBAC) Policy *integrated*"
      ]
    },
    {
      option: "Manage Accounts",
      description: [
        "System Accounts",
        "Human User Accounts",
        "Admin Accounts",
        "Standard Users Accounts"
      ]
    },
    {
      option: "Manage Users Permissions",
      description: [
        "Systems authentication and access control",
        "Systems authentication and authorisation",
        "Human User authentication and access control",
        "Human User authentication and authorisation"
      ]
    },
    {
      option: "Authentication",
      description: [
        "Single Sign-on (SSO)",
        "Multifactor authentication (MFA)",
        "SAML",
        "Open ID Connect (OIDC)",
        "OAuth 2.0",
        "YubiKey-authentication devices & Platforms",

      ]
    },
    {
      option: "Authorisation |Access",
      description: [
        "Policy Based Access",
        "External Authentication",
        "YubiKey-authentication devices & Platforms",
      ]
    }

  ]

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Manage</h2>
      <div className="border border-gray-200">
        <div className="grid grid-cols-2 bg-gray-100 text-sm font-semibold text-gray-700 p-2">
          <div>Option</div>
          <div>Description</div>
        </div>
        {/* {data.map((item, i) => (
          <div key={i} className="grid grid-cols-2 border border-gray-300 text-sm p-2">
            <div className="font-bold text-gray-600 border-r border-gray-300 pr-2">{item.option}</div>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {item.description.map((desc, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </ul>
          </div>
        ))} */}
        {data.map((item, i) => (
  <div
    key={i}
    className="grid grid-cols-2 border-t border-gray-300 text-sm"
  >
    <div className="p-2 font-bold text-gray-600 border-r border-gray-300">
      {item.option}
    </div>
    <ul className="p-2 list-disc list-inside space-y-1 text-gray-600">
      {item.description.map((desc, j) => (
        <li key={j} dangerouslySetInnerHTML={{ __html: desc }} />
      ))}
    </ul>
  </div>
))}

      </div>
    </div>
  )
}
