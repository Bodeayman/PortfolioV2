import {
    SiFlutter, SiDart, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
    SiPython, SiSharp, SiCplusplus, SiDotnet, SiFlask, SiDocker,
    SiPostman, SiRabbitmq, SiTypescript, SiJavascript, SiGo, SiPhp,
    SiOpenjdk, SiNextdotjs, SiReact, SiFastapi, SiPrisma, SiMysql,
    SiSqlite, SiRedis, SiGit, SiGithubactions, SiSwagger, SiNginx,
    SiSocketdotio, SiGraphql
} from "react-icons/si";

const skillCategories = [
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: ".NET Core", icon: <SiDotnet /> },
            { name: "Flask", icon: <SiFlask /> },
            { name: "FastAPI", icon: <SiFastapi /> },
            { name: "Prisma", icon: <SiPrisma /> },
            { name: "RabbitMQ", icon: <SiRabbitmq /> },
        ]
    },
    {
        title: "Frontend & Mobile",
        skills: [
            { name: "Flutter", icon: <SiFlutter /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "React", icon: <SiReact /> },
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Redis", icon: <SiRedis /> },
            { name: "SQLite", icon: <SiSqlite /> },
        ]
    },
    {
        title: "DevOps & Tools",
        skills: [
            { name: "Docker", icon: <SiDocker /> },
            { name: "GitHub Actions", icon: <SiGithubactions /> },
            { name: "Git", icon: <SiGit /> },
            { name: "Nginx", icon: <SiNginx /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "Swagger", icon: <SiSwagger /> },
        ]
    },
    {
        title: "Languages",
        skills: [
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "Go", icon: <SiGo /> },
            { name: "Python", icon: <SiPython /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "C#", icon: <SiSharp /> },
            { name: "Dart", icon: <SiDart /> },
            { name: "PHP", icon: <SiPhp /> },
            { name: "Java", icon: <SiOpenjdk /> },
        ]
    },
    {
        title: "Protocols",
        skills: [
            { name: "WebSockets", icon: <SiSocketdotio /> },
            { name: "GraphQL", icon: <SiGraphql /> },
        ]
    }
];

export default function SkillsSection() {
    return (
        <div className="space-y-12">
            {skillCategories.map((category) => (
                <div key={category.title} className="animate-fadeIn">
                    <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">
                        {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center space-x-2 px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-full hover:border-white/20 transition-all duration-300 group"
                            >
                                <span className="text-zinc-400 group-hover:text-white transition-colors">
                                    {skill.icon}
                                </span>
                                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

