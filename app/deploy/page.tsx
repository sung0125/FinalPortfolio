const deployUrls = [
    { id: 1, title: "test-1", url: "https://test-1-snowy.vercel.app/" },
    { id: 2, title: "JB-next-js", url: "https://jb-next-js.vercel.app" },
    { id: 3, title: "clerk-api", url: "https://clerk-api-ten.vercel.app" },
    { id: 4, title: "crud", url: "https://crud-one-orpin.vercel.app" },
    { id: 5, title: "ServerAction", url: "https://server-action-five.vercel.app" },
    { id: 6, title: "mongo-crud", url: "https://mongo-crud-sand.vercel.app" },
    { id: 7, title: "daiso-shopping", url: "https://daiso-shopping-kappa.vercel.app" },
    { id: 8, title: "TeamProject", url: "https://team-project-mu-azure.vercel.app/" },
];

export default function DeployPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {deployUrls.map((site) => (
                <div
                    key={site.id}
                    className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{site.title}</h3>
                    <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 break-all"
                    >
                        {site.url}
                    </a>
                </div>
            ))}
        </div>
    );
}
